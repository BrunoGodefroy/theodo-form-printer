import { delay } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';

import { types, init } from './actions';

import gapi, { CLIENT_ID, DISCOVERY_DOCS, SCOPES } from '../services/google';

function* initGoogleClient(action) {
  try {
    yield call(gapi.loadAsync);
    yield call(
      gapi.client.init, {
        discoveryDocs: DISCOVERY_DOCS,
        clientId: CLIENT_ID,
        scope: SCOPES
      }
    );
  }
  catch(e) {
    console.error(e);
  }
}

function* rootSaga() {
  yield takeEvery(types.INIT, initGoogleClient);

  yield call(delay, 100);
  yield put(init());
}

export default rootSaga;
