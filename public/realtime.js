// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
// import { getDatabase,ref, set } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";
// //  import { getDatabase,ref, set } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";
// //  import { getStorage, ref as storageRef } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-storage.js";;

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDXNkeCJ-vIxWNcr41oOB-7TmNTcgKc9oA",
//   authDomain: "bank-app-848df.firebaseapp.com",
//   projectId: "bank-app-848df",
//   storageBucket: "bank-app-848df.appspot.com",
//   messagingSenderId: "75140908214",
//   appId: "1:75140908214:web:837234d491b3703d8a5217",
//   measurementId: "G-VL3H9RT8PG"
// };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const database = getDatabase(app);


// function writeUserData(userId, name, email) {
//     const db = getDatabase();
//     set(ref(db, 'users/' + userId), {
//       username: name,
//       email: email,
//     //   profile_picture : imageUrl
// })
//     });