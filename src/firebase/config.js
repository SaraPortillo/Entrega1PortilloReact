import firebase from "firebase/app";
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQlZljrm02RWWIo4ntIT0IMDsl46QV-20",
  authDomain: "proyectoportilloreact.firebaseapp.com",
  projectId: "proyectoportilloreact",
  storageBucket: "proyectoportilloreact.appspot.com",
  messagingSenderId: "643380353914",
  appId: "1:643380353914:web:ceafbc1ef29fef41c1d4c3"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () => {
    return firebase.firestore(app)
}