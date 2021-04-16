import firebase from 'firebase'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBBcms98cua28QoEGMPbRW15C_Zu1wzwxU",
    authDomain: "image-gallery-369d4.firebaseapp.com",
    databaseURL: "https://image-gallery-369d4.firebaseio.com",
    projectId: "image-gallery-369d4",
    storageBucket: "image-gallery-369d4.appspot.com",
    messagingSenderId: "745337024537",
    appId: "1:745337024537:web:edeed0dda3fda9610f7a88"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const projstorage = firebase.storage();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  const increment = firebase.firestore.FieldValue.increment(1);

  export {db, projstorage,timestamp,increment};