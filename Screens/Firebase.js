import firebase from 'firebase';



var firebaseConfig = {
    apiKey: "AIzaSyAfA8OZAw07SvlWaiy0CEdhDiy11YWsG70",
    authDomain: "virasat-1be29.firebaseapp.com",
    projectId: "virasat-1be29",
    storageBucket: "virasat-1be29.appspot.com",
    messagingSenderId: "78639777119",
    appId: "1:78639777119:web:f452efd8220d1ea78622ea",
    measurementId: "G-0M9CL4883S"
  };
  // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
const fire = firebase.initializeApp(firebaseConfig);

export default fire;