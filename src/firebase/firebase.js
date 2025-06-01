import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage}  from 'firebase/storage'

 const firebaseConfig = {
  apiKey: "AIzaSyAEj6upZEOq4LciN778ikZQh-VGztJyQLA",
  authDomain: "myapp-b1806.firebaseapp.com",
  databaseURL: "https://myapp-b1806.firebaseio.com",
  projectId: "myapp-b1806",
  storageBucket: "myapp-b1806.appspot.com",
  messagingSenderId: "717699380029",
  appId: "1:717699380029:web:4398094edc842ff7954b54",
  measurementId: "G-RRJVZDGLBC"
  
 }


const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)
export { auth, db, storage }
