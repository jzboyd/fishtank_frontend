import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
        apiKey: "AIzaSyDQCpb_7SzShII4u2sI_NrPmxHFQpGy36k",
        authDomain: "fishtank-a7721.firebaseapp.com",
        projectId: "fishtank-a7721",
        storageBucket: "fishtank-a7721.appspot.com",
        messagingSenderId: "1040578648923",
        appId: "1:1040578648923:web:6e504537561a577dd8987e",
        measurementId: "G-EL8S3T0R0R"
    };
let app; 
 if (firebase.apps.length === 0) {
     app = firebase.initializeApp(firebaseConfig)
 } else {
app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };