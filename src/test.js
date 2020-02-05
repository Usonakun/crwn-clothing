import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("z6QliJ5pbOW1EPczrVny")
  .collection("Items")
  .doc("z6QliJ5pbOW1EPczrVny/Items/yLOJ3LPjWlxipG7SAHx5");
firestore.doc("/users/z6QliJ5pbOW1EPczrVny/Items/yLOJ3LPjWlxipG7SAHx5");
firestore.collection("/users/z6QliJ5pbOW1EPczrVny/Items");
