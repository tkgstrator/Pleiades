import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(firestorePlugin)

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDw0utCGindl_Uc-Z-SgGEqtAHHQ95Igws",
    authDomain: "pleiades-a2806.firebaseapp.com",
    databaseURL: "https://pleiades-a2806.firebaseio.com",
    projectId: "pleiades-a2806",
    storageBucket: "pleiades-a2806.appspot.com",
    messagingSenderId: "724744513542",
    appId: "1:724744513542:web:3aa086501e381a0b29fb87",
    measurementId: "G-YBPZWETJ2H"
});

export const db = firebaseApp.firestore();