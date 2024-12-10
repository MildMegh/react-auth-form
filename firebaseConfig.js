
import { initializeApp } from 'firebase/app';
import { getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD1NZs3AAW24K8wX9KO3cW1zo-kqyihAFE",
    authDomain: "fir-auth-app-681d8.firebaseapp.com",
    projectId: "fir-auth-app-681d8",
    storageBucket: "fir-auth-app-681d8.firebasestorage.app",
    messagingSenderId: "922341400871",
    appId: "1:922341400871:web:7e005a91a20b6a897b8902",
    measurementId: "G-JTNQMFECQD"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
