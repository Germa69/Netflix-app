import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBotpKR7CAsdNeVXLgtAnVW6HRq2bcN5Xw",
    authDomain: "netflix-e696e.firebaseapp.com",
    projectId: "netflix-e696e",
    storageBucket: "netflix-e696e.appspot.com",
    messagingSenderId: "454898409301",
    appId: "1:454898409301:web:51bad740622239107159dc",
    measurementId: "G-GL8WMM3SBQ",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;