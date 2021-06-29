import firebase from '@firebase/app';

let firebaseConfig = {
  apiKey: 'AIzaSyDiDaIi48ry0ovt2Q3PfF5q9Jan--Zb3UI',
  authDomain: 'blockchat-58c7c.firebaseapp.com',
  projectId: 'blockchat-58c7c',
  storageBucket: 'blockchat-58c7c.appspot.com',
  messagingSenderId: '662481065131',
  appId: '1:662481065131:web:cbb5cf31b27ae346ef53ee',
};

firebase.initializeApp(firebaseConfig);

export { firebase };
