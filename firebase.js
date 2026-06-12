import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getFirestore, collection, doc,
  addDoc, getDoc, getDocs, updateDoc, deleteDoc,
  query, where, orderBy, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import {
  getAuth, createUserWithEmailAndPassword,
  signInWithEmailAndPassword, signOut, onAuthStateChanged,
  updateProfile
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAULXgc-ca9ZqEfXG39ctJ1BrNJu87WYBU",
  authDomain: "projektmamberher77265-63fc3.firebaseapp.com",
  projectId: "projektmamberher77265-63fc3",
  storageBucket: "projektmamberher77265-63fc3.firebasestorage.app",
  messagingSenderId: "106303912823",
  appId: "1:106303912823:web:10aa00110032b757087f72"
};

const app  = initializeApp(firebaseConfig);
const db   = getFirestore(app);
const auth = getAuth(app);

const ADMIN_EMAILS = ["semka.mamam@gmail.com"];

async function getCurrentUser() {
  return new Promise(resolve => onAuthStateChanged(auth, resolve));
}

async function isAdmin(user) {
  if (!user) return false;
  return ADMIN_EMAILS.includes(user.email);
}

function showToast(msg, type = "info") {
  let wrap = document.querySelector(".toast-wrap");
  if (!wrap) {
    wrap = document.createElement("div");
    wrap.className = "toast-wrap";
    document.body.appendChild(wrap);
  }
  const t = document.createElement("div");
  t.className = `toast ${type}`;
  t.textContent = msg;
  wrap.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

function renderStars(avg, count) {
  const full  = Math.round(avg);
  const stars = "★".repeat(full) + "☆".repeat(5 - full);
  return `<span class="book-stars">${stars} <span>(${count})</span></span>`;
}

async function getAvgRating(bookId) {
  const snap = await getDocs(
    query(collection(db, "ratings"), where("bookId", "==", bookId))
  );
  if (snap.empty) return { avg: 0, count: 0 };
  const total = snap.docs.reduce((s, d) => s + d.data().score, 0);
  return { avg: total / snap.size, count: snap.size };
}

const CATEGORIES = [
  "Beletrystyka","Kryminał","Fantastyka","Romans","Historia",
  "Nauka","Biografie","Dla dzieci","Poradniki","Inne"
];

export {
  app, db, auth,
  collection, doc,
  addDoc, getDoc, getDocs, updateDoc, deleteDoc,
  query, where, orderBy, serverTimestamp,
  createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signOut, onAuthStateChanged, updateProfile,
  getCurrentUser, isAdmin, showToast, renderStars, getAvgRating,
  CATEGORIES, ADMIN_EMAILS
};
