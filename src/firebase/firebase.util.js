import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBFERmp2CH_YM1PhpLU1_hRvuz8C-yeqf4',
  authDomain: 'crwn-db-dd957.firebaseapp.com',
  databaseURL: 'https://crwn-db-dd957.firebaseio.com',
  projectId: 'crwn-db-dd957',
  storageBucket: '',
  messagingSenderId: '403789709805',
  appId: '1:403789709805:web:4d5b7d97b8fadd3b'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
