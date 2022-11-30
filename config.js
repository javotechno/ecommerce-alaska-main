import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIND,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

initializeApp(firebaseConfig);

//incripción de Firebass, - .env -

//REACT_APP_API_KEY=AIzaSyAK93MCQ5lRsDvWmzZzYH-CpgKcKSj-VEk
//REACT_APP_AUTH_DOMAIND=alaska-d8049.firebaseapp.com
//REACT_APP_PROJECT_ID=alaska-d8049
//REACT_APP_STORAGE_BUCKET=alaska-d8049.appspot.com
//REACT_APP_MESSAGING_SENDER_ID=472857591982
//REACT_APP_APP_ID=1:472857591982:web:e02faad944a08c9d99ad3f
