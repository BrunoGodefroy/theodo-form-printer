import firebase from 'firebase'
import ReduxSagaFirebase from 'redux-saga-firebase'

const myFirebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBQVZtWkR0H6BboUO9G3dcctHYlnIQfqrI',
  authDomain: 'm33-performance-32c4d.firebaseapp.com',
  databaseURL: 'https://m33-performance-32c4d.firebaseio.com',
  storageBucket: 'm33-performance-32c4d.appspot.com'
})

const reduxSagaFirebase = new ReduxSagaFirebase(myFirebaseApp)
export default reduxSagaFirebase
