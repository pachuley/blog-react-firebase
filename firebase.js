require("firebase/firestore")
import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyDCCCz6WTNW_Ey3FGQFpN2AX7yZ95DnmO4",
    authDomain: "blog-react-firebase-a6af4.firebaseapp.com",
    projectId: "blog-react-firebase-a6af4",
    storageBucket: "blog-react-firebase-a6af4.appspot.com",
    messagingSenderId: "216637978061",
    appId: "1:216637978061:web:57207d0220cc3aaae8c084"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

export const auth = firebase.auth();
export const firestore = firebase.firestore;
export default db;

