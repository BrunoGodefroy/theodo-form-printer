import { call, put, takeEvery, takeLatest, select, fork, take, cancel, cancelled } from 'redux-saga/effects'
import firebase from 'firebase'

import {
  types,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
  fetchFormsRequest,
  fetchFormsSuccess,
  fetchFormsFailure
} from '@redux/actions'

import reduxSagaFirebase from '@services/reduxSagaFirebase'

const authProvider = new firebase.auth.GoogleAuthProvider()

function * loginSaga (action) {
  try {
    yield call(reduxSagaFirebase.auth.signInWithPopup, authProvider)
    yield put(loginSuccess())
  } catch (e) {
    yield put(loginFailure('Authentication failed. Please try again'))
  }
}

function * logoutSaga (action) {
  try {
    yield call(reduxSagaFirebase.auth.signOut)
    yield put(logoutSuccess())
  } catch (e) {
    yield put(logoutFailure('Logout failed. Please try again'))
  }
}

function * syncUserSaga () {
  const channel = yield call(reduxSagaFirebase.auth.channel)

  while (true) {
    const { user } = yield take(channel)

    if (user) yield put(loginSuccess())
    else yield put(logoutSuccess())
  }
}

function * syncLatestFormsSaga (channel, company) {
  while (true) {
    try {
      const { value: data } = yield take(channel)
      yield put(fetchFormsSuccess(data, company))
    } catch (e) {
      yield put(fetchFormsFailure('The latest project forms could not be retrieved. Please check you have the permission to view them'))
    } finally {
      if (yield cancelled()) channel.close()
    }
  }
}

function * handleFormsSyncSaga (action) {
  const company = yield select(state => state.selectedCompany)
  const channel = yield call(reduxSagaFirebase.database.channel, firebase.database().ref(`forms/${company.path}`).orderByChild('timestamp').limitToLast(30))
  const syncTask = yield fork(syncLatestFormsSaga, channel, company)
}

function * triggerFetchFormSaga (action) {
  const loggedIn = yield select(state => state.loggedIn)
  if (loggedIn) yield put(fetchFormsRequest())
}

function * rootSaga () {
  yield fork(syncUserSaga)
  yield takeEvery(types.LOGIN.REQUEST, loginSaga)
  yield takeEvery(types.LOGOUT.REQUEST, logoutSaga)
  yield takeLatest(types.FETCH_FORMS.REQUEST, handleFormsSyncSaga)
  yield takeEvery(types.COMPANY_SELECTED, triggerFetchFormSaga)
}

export default rootSaga
