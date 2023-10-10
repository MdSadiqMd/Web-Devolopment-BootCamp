import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyAGBSTMiNYZbSqTg_9W61cZtOYKVlF7WW0",
    authDomain: "fir-17e4a.firebaseapp.com",
    projectId: "fir-17e4a",
    storageBucket: "fir-17e4a.appspot.com",
    messagingSenderId: "333825579797",
    appId: "1:333825579797:web:dbe5ad899eb7205b56e71c",
};

// This connects our web app with firebase
export const app = initializeApp(firebaseConfig);