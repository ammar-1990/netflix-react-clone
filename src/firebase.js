
import {initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDKPEX6Ml1rtY8K5Gym6bgPJOeoMPsHoiE",
  authDomain: "netflix-clone-763c4.firebaseapp.com",
  projectId: "netflix-clone-763c4",
  storageBucket: "netflix-clone-763c4.appspot.com",
  messagingSenderId: "782107026782",
  appId: "1:782107026782:web:0f5d6d18689153cd819bcf"
};


const firebaseApp=initializeApp(firebaseConfig)


const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);





export default db;