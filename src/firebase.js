import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyCrCNiuvxf0_X5enaFbvYWc-iSbCxWaGf8",
    authDomain: "omegachat-7bd20.firebaseapp.com",
    projectId: "omegachat-7bd20",
    storageBucket: "omegachat-7bd20.appspot.com",
    messagingSenderId: "764174359774",
    appId: "1:764174359774:web:74b96cfc35fb15dd36f64f",
  })
  .auth();
