import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDF3sAAod4N2jMJ09twFIIkg09Fd6czUzw',
  authDomain: 'eshop-db-b565c.firebaseapp.com',
  databaseURL: 'https://eshop-db-b565c.firebaseio.com',
  projectId: 'eshop-db-b565c',
  storageBucket: 'eshop-db-b565c.appspot.com',
  messagingSenderId: '884155890411',
  appId: '1:884155890411:web:8f87ea8b15ccf74490dcae',
  measurementId: 'G-JSB0DY6JZ4'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
