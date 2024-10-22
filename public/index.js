
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
 import { getDatabase,ref, set } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";
 import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-storage.js";;

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
 const storage = getStorage();

 


 document.getElementById("submit").addEventListener("click", () =>{

   let firstName = document.getElementById("firstName").value;
   let middleName = document.getElementById("middleName").value;
   let lastName = document.getElementById("lastName").value;
   let phoneNumber = document.getElementById("phoneNumber").value;
   let addressDetails = document.getElementById("addressDetails").value;
   let dateOfBirth = document.getElementById("dateOfBirth").value;
   let  email= document.getElementById("email").value;
   let  password= document.getElementById("password").value;
   let occupation = document.getElementById("yourOccupation").value
   let personalPhoto = document.getElementById("personalPhoto").files[0];
   let time = new Date()
   let userAccountNumber = Math.floor(1000000000 + Math.random() * 9000000000); // 10-digit random number
   let accountBalance = 0;
 

    createUserWithEmailAndPassword(auth, email, password)
   
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      const userId = user.uid
      // alert("welcome to Firebase:")
      const picRef = storageRef(storage, `profilePictures/${userId}`);
            uploadBytes(picRef, personalPhoto)
                  .then((snapshot) => {
                    console.log("Profile picture uploaded");
                    console.log(snapshot)
                // Get the download URL of the uploaded profile picture
                getDownloadURL(snapshot.ref).then((downloadURL) => {
                  console.log("Profile picture URL: ", downloadURL);

      // ...
      let objUser ={
        firstName,
        middleName,
        lastName,
        phoneNumber,
        addressDetails,
        dateOfBirth,
        occupation,
        userBalanceAccount:accountBalance,
        accountNumber: userAccountNumber,
        personalPhoto: downloadURL,
        Date:time.toLocaleDateString(),
        email
        
      };
      // 
      const userRef = ref(database, `users/${userId}`);
  set(userRef, objUser)
  .then(() => {
    console.log("User registered successfully");
    alert("registration Successful")
      // transactionProcess(userId)
      localStorage.setItem("userId", userId);
      window.location.href = 'dashboard.html';

  })
  .catch((error) => {
    console.error("Error saving user data: ", error);
  });
  
})
.catch((error) => {
  const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode)
    });
  });
});
 });
  
  
  

// METHOD TWO


  //  const submit = document.getElementById("submit")
   
  //  submit.addEventListener("click", function(event){
  //    // event.preventDefault()
  //    const firstName = document.getElementById("firstName").value;
  //    const middleName = document.getElementById("middleName").value;
  //    const lastName = document.getElementById("lastName").value;
  //    const phoneNumber = document.getElementById("phoneNumber").value;
  //    const addressDetails = document.getElementById("addressDetails").value;
  //    const dateOfBirth = document.getElementById("dateOfBirth").value;
  //    const  email= document.getElementById("email").value;
  //    const  password= document.getElementById("password").value;
  //    const occupation = document.getElementById("yourOccupation").value;
    
  //   // alert("welcome to firebase")
  //   createUserWithEmailAndPassword(auth, email, password)
   
  //   .then((userCredential) => {
  //     // Signed up 
  //     const user = userCredential.user;
  //     alert("welcome to Firebase:")
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     alert(errorMessage)
  //     // ..
  //   });
  //  })

