import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB83Fp99FJxRsFkF_bpHSPf8oNoGEBnr2I",
  authDomain: "docs-e395f.firebaseapp.com",
  projectId: "docs-e395f",
  storageBucket: "docs-e395f.appspot.com",
  messagingSenderId: "983948831535",
  appId: "1:983948831535:web:475613c70db19db58e0fda",
  measurementId: "G-Y2XJLRCHD2",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
