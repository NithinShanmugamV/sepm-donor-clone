import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBAkass94g1wdK-U2wibnhRn9WgTkjYr4k",
    authDomain: "donor-c.firebaseapp.com",
    projectId: "donor-c",
    storageBucket: "donor-c.appspot.com",
    messagingSenderId: "264871404388",
    appId: "1:264871404388:web:8e335ff6ef62f017b19071",
    measurementId: "G-R1WKCK3MG2"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;