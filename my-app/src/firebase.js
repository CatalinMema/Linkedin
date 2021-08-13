import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDL_ZZPdUH9Qr6PoWP6VGWffZq5YHvGFOw",
    authDomain: "linkedin-359d0.firebaseapp.com",
    projectId: "linkedin-359d0",
    storageBucket: "linkedin-359d0.appspot.com",
    messagingSenderId: "243314019893",
    appId: "1:243314019893:web:05158ca281305f7da32b7c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth= firebase.auth();
  
  export  {db, auth};