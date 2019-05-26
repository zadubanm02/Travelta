import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBHPEk1orTC_d-B-VaHO1i3TZ-jZ-Mcmjw",
  authDomain: "traveltatest.firebaseapp.com",
  databaseURL: "https://traveltatest.firebaseio.com",
  projectId: "traveltatest",
  storageBucket: "traveltatest.appspot.com",
  messagingSenderId: "272876044805"
};

firebase.initializeApp(config);

export default firebase;
