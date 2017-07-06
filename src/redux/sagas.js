import { delay } from 'redux-saga';
import { call, put, takeEvery, select } from 'redux-saga/effects';

import {
  types,
  googleClientInitRequest,
  googleClientInitSuccess,
  googleClientInitFailure,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
  fetchFormsRequest,
  fetchFormsSuccess,
  fetchFormsFailure,
} from './actions';

import gapi, { DISCOVERY_DOCS, SCOPES } from '../services/google';

function* initGoogleClientSaga(action) {

  const clientId = yield select(state => state.clientId)

  try {
    yield call(gapi.loadAsync);
    yield call(
      gapi.client.init, {
        discoveryDocs: DISCOVERY_DOCS,
        clientId,
        scope: SCOPES
      }
    );
    yield put(googleClientInitSuccess(gapi.auth2.getAuthInstance().isSignedIn.get()));
  }
  catch(e) {
    yield put(googleClientInitFailure('Problem while loading google client. Please check your connection.'));
  }
}

function* loginSaga(action) {
  try {
    yield call(gapi.loginAsync);
    yield put(loginSuccess());
  }
  catch(e) {
    yield put(loginFailure('Authentication failed. Please try again'));
  }
}

function* logoutSaga(action) {
  try {
    yield call(gapi.logoutAsync);
    yield put(logoutSuccess());
  } catch(e) {
    yield put(logoutFailure('Logout failed. Please try again'));
  }
}

function* fetchLatestForms(action) {
  const scriptId = yield select(state => state.scriptId)

  try {
    const response = yield call(gapi.client.script.scripts.run, {
      scriptId,
      'resource': {
        'function': 'getLastResponsesUrl'
      }
    });
    if (response.result.error) {
      console.error(response.result.error);
      yield put(fetchFormsFailure());
    }
    yield put(fetchFormsSuccess(response.result.response.result));
  } catch(e) {
    yield put(fetchFormsFailure('The latest project forms could not be retrieved. Please check you have the permission to view them'));
  }
}

function* triggerFetchFormSaga(action) {
  const loggedIn = yield select(state => state.loggedIn);
  if (loggedIn) yield put(fetchFormsRequest());
}

function* initApp(action) {
  yield put(googleClientInitRequest(action.company));
}

function* rootSaga() {
  yield takeEvery(types.COMPANY_SELECTED, initApp);
  yield takeEvery(types.GOOGLE_CLIENT_INIT.REQUEST, initGoogleClientSaga);
  yield takeEvery(types.LOGIN.REQUEST, loginSaga);
  yield takeEvery(types.LOGOUT.REQUEST, logoutSaga);
  yield takeEvery(types.FETCH_FORMS.REQUEST, fetchLatestForms);
  yield takeEvery([types.LOGIN.SUCCESS, types.GOOGLE_CLIENT_INIT.SUCCESS], triggerFetchFormSaga)

  yield call(delay, 100);
}

export default rootSaga;
