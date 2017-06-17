import { delay } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';

import {
  types,
  googleClientInitRequest,
  googleClientInitSuccess,
  googleClientInitFailure,
  loginSuccess,
  loginFailure,
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
    yield put(googleClientInitSuccess());
  }
  catch(e) {
    console.error(e);
    yield put(googleClientInitFailure());
  }
}

function* loginSaga(action) {
  try {
    yield call(gapi.auth2.getAuthInstance().signIn);
    yield put(loginSuccess());
  }
  catch(e) {
    console.error(e);
    yield put(loginFailure());
  }
}

function* rootSaga() {
  yield takeEvery(types.GOOGLE_CLIENT_INIT.REQUEST, initGoogleClientSaga);
  yield takeEvery(types.LOGIN.REQUEST, loginSaga);

  yield call(delay, 100);
  yield put(googleClientInitRequest());
}

export default rootSaga;
