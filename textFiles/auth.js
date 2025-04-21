// Import the Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function to register a new user
function register(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User registered
      console.log("User registered:", userCredential.user);
    })
    .catch((error) => {
      console.error("Error registering user:", error);
    });
}

// Function to log in a user
function login(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User logged in
      console.log("User logged in:", userCredential.user);
    })
    .catch((error) => {
      console.error("Error logging in:", error);
    });
}

// Function to log out the current user
function logout() {
  signOut(auth)
    .then(() => {
      // User logged out
      console.log("User logged out");
    })
    .catch((error) => {
      console.error("Error logging out:", error);
    });
}

// Example usage
// register("test@example.com", "password123");
// login("test@example.com", "password123");
// logout();