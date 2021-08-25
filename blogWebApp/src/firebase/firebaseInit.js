import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
	apiKey: "AIzaSyCSmu0N37t8T5lqP8FMDVTH-_Z_UhJJMOc",
	authDomain: "blogwebapp-f1983.firebaseapp.com",
	projectId: "blogwebapp-f1983",
	storageBucket: "blogwebapp-f1983.appspot.com",
	messagingSenderId: "149988395268",
	appId: "1:149988395268:web:76487a4cc13ebcbed7a851",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
