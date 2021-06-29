import * as firebase from 'firebase'
require ('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyBuU_OuudsFy6I-IVUz1jX6ue6X0kOcSGk",
    authDomain: "wily-app-82e8e.firebaseapp.com",
    projectId: "wily-app-82e8e",
    storageBucket: "wily-app-82e8e.appspot.com",
    messagingSenderId: "828016581701",
    appId: "1:828016581701:web:ad353168a5dc45e340172c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()