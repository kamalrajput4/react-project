

import firebase from 'firebase/app';

import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBx7oUqBzpmty3jnN8mC1ryKqQ2BwtDqKk",
  authDomain: "awesome-project-77089.firebaseapp.com",
  databaseURL: "https://awesome-project-77089-default-rtdb.firebaseio.com",
  projectId: "awesome-project-77089",
  storageBucket: "awesome-project-77089.firebasestorage.app",
  messagingSenderId: "968388475961",
  appId: "1:968388475961:web:a1a654764ed40e8056a1e8"
 
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire.database().ref();
