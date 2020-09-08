import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCq1o3X0-Pxfqf6TksU3IE8IUTYIjNyBxE",
  authDomain: "whatsapp-clone-zafrir.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-zafrir.firebaseio.com",
  projectId: "whatsapp-clone-zafrir",
  storageBucket: "whatsapp-clone-zafrir.appspot.com",
  messagingSenderId: "61657785707",
  appId: "1:61657785707:web:23bce6b881052206f1182e",
  measurementId: "G-3RFJSL206P",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
