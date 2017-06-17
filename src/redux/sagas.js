import { delay } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';

import {
  types,
  googleClientInitRequest,
  googleClientInitSuccess,
  googleClientInitFailure,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
} from './actions';

import gapi, { CLIENT_ID, DISCOVERY_DOCS, SCOPES } from '../services/google';

function* initGoogleClientSaga(action) {
  try {
    yield call(gapi.loadAsync);
    yield call(
      gapi.client.init, {
        discoveryDocs: DISCOVERY_DOCS,
        clientId: CLIENT_ID,
        scope: SCOPES
      }
    );
    yield put(googleClientInitSuccess(gapi.auth2.getAuthInstance().isSignedIn.get()));
  }
  catch(e) {
    console.error(e);
    yield put(googleClientInitFailure());
  }
}

function* loginSaga(action) {
  try {
    yield call(gapi.loginAsync);
    yield put(loginSuccess());
  }
  catch(e) {
    console.error(e);
    yield put(loginFailure());
  }
}

function* logoutSaga(action) {
  try {
    yield call(gapi.logoutAsync);
    yield put(logoutSuccess())
  } catch(e) {
    console.error(e);
    yield put(logoutFailure());
  }
}

function* rootSaga() {
  yield takeEvery(types.GOOGLE_CLIENT_INIT.REQUEST, initGoogleClientSaga);
  yield takeEvery(types.LOGIN.REQUEST, loginSaga);
  yield takeEvery(types.LOGOUT.REQUEST, logoutSaga);

  yield call(delay, 100);
  yield put(googleClientInitRequest());
}

export default rootSaga;
