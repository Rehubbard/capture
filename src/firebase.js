import firebase from 'firebase'
var config = {
  apiKey: 'AIzaSyDIJ-S4dQGisxCx0pps6C7ycwUX0eaGcuU',
  authDomain: 'capture-project-d4758.firebaseapp.com',
  databaseURL: 'https://capture-project-d4758.firebaseio.com',
  storageBucket: 'capture-project-d4758.appspot.com',
  messagingSenderId: '643711974285'
}
const captureFirebase = firebase.initializeApp(config)
export default captureFirebase

export const storageRef = captureFirebase.storage().ref()
