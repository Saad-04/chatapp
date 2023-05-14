
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  // apiKey: "AIzaSyCguGOQIwC8tk_1pdB3tdbFm42iq8-bheY",
  apiKey: "AIzaSyB5Hsrv_Z8gIlkHBVaocB8GAFJ_ky8WYLE",
  authDomain: "message-app-18e15.firebaseapp.com",
  projectId: "message-app-18e15",
  storageBucket: "message-app-18e15.appspot.com",
  messagingSenderId: "376697811612",
  appId: "1:376697811612:web:4d55e795dad5e63b533359"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)
export const auth = getAuth(app);