import { delay } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';

import { types, init } from './actions';

function* initGoogleClient(action) {
  console.log('Hello');
}

function* rootSaga() {
  yield takeEvery(types.INIT, initGoogleClient);

  yield call(delay, 100);
  yield put(init());
}

export default rootSaga;
