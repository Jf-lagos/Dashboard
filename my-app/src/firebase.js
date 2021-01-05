import firebase from "firebase/app";
import database from "firebase/database";


  const config = {
    apiKey: "AIzaSyDrF8qH8dC30igHR-18mrWsSNMN0AHfeic",
    authDomain: "rave-barcelona.firebaseapp.com",
    projectId: "rave-barcelona",
    storageBucket: "rave-barcelona.appspot.com",
    messagingSenderId: "314797285768",
    databaseURL: "https://rave-barcelona-default-rtdb.europe-west1.firebasedatabase.app/",
    appId: "1:314797285768:web:64e322178b38d4e5685a3d",
    measurementId: "G-Y2YFPJJNKN"
  };

  let firebaseCache;

  export const getFirebase = () => {
    if (firebaseCache) {
      return firebaseCache;
    }
  
    firebase.initializeApp(config);
    firebaseCache = firebase;
    return firebase;
  };

