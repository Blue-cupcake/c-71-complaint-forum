import firebase from 'firebase';
require("@firebase/firestore")
import "firebase/auth";

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyBEn7Fk3nL9v6ybrP3LQOQj_t7sPyh4vAs",
  authDomain: "complaint-forum-f9b66.firebaseapp.com",
  projectId: "complaint-forum-f9b66",
  storageBucket: "complaint-forum-f9b66.appspot.com",
  messagingSenderId: "373663381688",
  appId: "1:373663381688:web:28071924826e32223cdc4d"
};

if(firebase.app.length){
  firebase.initializeApp(firebaseConfig);
}
  export default firebase.firestore()

