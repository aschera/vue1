import {
  firebase
} from "@firebase/app";
import "@firebase/firestore";

// Define the connections for our own app
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBFRT90Rv8jPh3EB_wzgGDHAxKPRoNxxbo",
  authDomain: "new-vue-f7321.firebaseapp.com",
  databaseURL: "https://new-vue-f7321.firebaseio.com",
  projectId: "new-vue-f7321",
  storageBucket: "new-vue-f7321.appspot.com",
  messagingSenderId: "120805381445"
});

// Prepare the connection to the firestore db
export const db = firebaseApp.firestore();

// Unified way of accessing collections
export const collections = {
  contacts: db.collection("contacts")
};
