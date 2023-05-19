import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAKhxuQ88-GXkkFJ6inI3DXHKV_b7o7uXY",
    authDomain: "twittwer-clone-e173a.firebaseapp.com",
    projectId: "twittwer-clone-e173a",
    storageBucket: "twittwer-clone-e173a.appspot.com",
    messagingSenderId: "1030275150686",
    appId: "1:1030275150686:web:76a8368571980edfe815cf",
    measurementId: "G-CBK9PXRKNN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

const db = firebaseApp.firestore();

export default db;