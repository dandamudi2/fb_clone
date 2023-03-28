import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBiFPORAw4_vp0fClAcGGzRE0dfQwSsBZI",
  authDomain: "facebook-yt-clone-86765.firebaseapp.com",
  projectId: "facebook-yt-clone-86765",
  storageBucket: "facebook-yt-clone-86765.appspot.com",
  messagingSenderId: "330145568718",
  appId: "1:330145568718:web:0ae0a2ca4dc67be459bd9f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
