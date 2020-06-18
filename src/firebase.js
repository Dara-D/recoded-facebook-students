import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPFwcO5W4cSdCIBU4zYSWd2Hsi52CLNQs",
  authDomain: "recodedfacebook.firebaseapp.com",
  databaseURL: "https://recodedfacebook.firebaseio.com",
  projectId: "recodedfacebook",
  storageBucket: "recodedfacebook.appspot.com",
  messagingSenderId: "792119652578",
  appId: "1:792119652578:web:6f456d9c56b5bf6c876ebb",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;




// const provider = new firebase.auth.GoogleAuthProvider();

// // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

// firebase.auth().signInWithPopup(provider).then(function(result) {
//   // This gives you a Google Access Token. You can use it to access the Google API.
//   const token = result.credential.accessToken;
//   // The signed-in user info.
//   const user = result.user;
//   // ...
// }).catch(function(error) {
//   // Handle Errors here.
//   const errorCode = error.code;
//   const errorMessage = error.message;
//   // The email of the user's account used.
//   const email = error.email;
//   // The firebase.auth.AuthCredential type that was used.
//   const credential = error.credential;
//   // ...
// });
// firebase.auth().signInWithRedirect(provider);

