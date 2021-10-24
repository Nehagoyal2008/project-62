import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDIP7BpcHiYI0eBTFm0YC9BzMKOiNNbTkI",
  authDomain: "project-60-f0956.firebaseapp.com",
  databaseURL: "https://project-60-f0956-default-rtdb.firebaseio.com",
  projectId: "project-60-f0956",
  storageBucket: "project-60-f0956.appspot.com",
  messagingSenderId: "420214318629",
  appId: "1:420214318629:web:1afb5c7c987edfa86601cc"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();
