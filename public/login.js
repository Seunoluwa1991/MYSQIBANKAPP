
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import { getDatabase,ref, set } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";
//  import { getDatabase,ref, set } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";
//  import { getStorage, ref as storageRef } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-storage.js";;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXNkeCJ-vIxWNcr41oOB-7TmNTcgKc9oA",
  authDomain: "bank-app-848df.firebaseapp.com",
  projectId: "bank-app-848df",
  storageBucket: "bank-app-848df.appspot.com",
  messagingSenderId: "75140908214",
  appId: "1:75140908214:web:837234d491b3703d8a5217",
  measurementId: "G-VL3H9RT8PG"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);


//  const storage = getStorage();

// document.getElementById("logIn").addEventListener("click", () =>{
//  let email = document.getElementById("email").value;
//  let password = document.getElementById("password").value;

 
//  signInWithEmailAndPassword(auth, email, password)
//  .then((userCredential) => {
//    // Signed in 
   
//    const user = userCredential.user;

//   //  sessionStorage.setItem('user', JSON.stringify(user));
//    alert("Glory to God for this next level")
//    // ...
//  })
//  .catch((error) => {
//    const errorCode = error.code;
//    const errorMessage = error.message;
//    alert("The login is not working")
//  });

 
//   }
// Firebase configuration and initialization are assumed to be already done as per your previous code

document.getElementById("logIn").addEventListener("click", () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // Sign in the user
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Successful login
      const user = userCredential.user;
      alert("Login successful!");
      // Redirect to a new page if necessary, e.g., dashboard.html
      // writeUserData(user.uid)
      window.location.href = "dashboard.html";  // Change to the appropriate page
    })
    .catch((error) => {
      // Handle login errors
      const errorMessage = error.message;
      if (errorMessage.includes("auth/wrong-password")) {
        alert("Incorrect password. Please try again.");
      } else if (errorMessage.includes("auth/user-not-found")) {
        alert("No account found with this email.");
      } else {
        alert(errorMessage);  // General error handling
      }
    });

    // function writeUserData(userId, name, email,password) {
    // const db = getDatabase();
    // set(ref(db, 'users/' + userId), {
    //   username: name,
    //   email: email,
    //   Password:password

    //   profile_picture : imageUrl
})
  


