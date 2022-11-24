import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCVG08ycJ-Nz_P6YouTxp4kPRHQx_1CMVg",
    authDomain: "quora-clone-17885.firebaseapp.com",
    projectId: "quora-clone-17885",
    storageBucket: "quora-clone-17885.appspot.com",
    messagingSenderId: "20600793279",
    appId: "1:20600793279:web:826cdb5602e8cbc4bd3e0a",
    measurementId: "G-H89CJN09D9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
// const analytics = getAnalytics(firebaseApp);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export {auth, provider}

export default db;

