import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB_ErNf1n6Cn48DBUou8H3k2-rKknz4zoE",
  authDomain: "catch-of-the-day-norris.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-norris.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
