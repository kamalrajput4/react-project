import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyB_9e6xLe-yWQULAyS-WtTWRKo0B7szzWI",
  authDomain: "komal-33e29.firebaseapp.com",
  databaseURL: "https://komal-33e29-default-rtdb.firebaseio.com",
  projectId: "komal-33e29",
  storageBucket: "komal-33e29.firebasestorage.app",
  messagingSenderId: "161686336541",
  appId: "1:161686336541:web:ef663e369f7ef8257c42f4",
  measurementId: "G-M68N118GPX"
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();