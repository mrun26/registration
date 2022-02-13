const firebaseConfig = {
    apiKey: "AIzaSyAPyj0Ybv6QUc6eZlDNZ1w28HJQQ4KRN9A",
    authDomain: "fir-55df2.firebaseapp.com",
    databaseURL: "https://fir-55df2-default-rtdb.firebaseio.com",
    projectId: "fir-55df2",
    storageBucket: "fir-55df2.appspot.com",
    messagingSenderId: "958285379486",
    appId: "1:958285379486:web:4463159c8ffc4cda76088f"
  };
  


  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()
  const dataBase = firebase.database()
  
  function login(){
    email= document.getElementById("email").value
    password = document.getElementById("pass").value 

    //validate input fields
    if(validateEmail(email)==false || validatePassword(password)==false){
        alert("enter a valid email id or password")
        //we are using this return to stop the execution
        return
    }

    auth.signInWithEmailAndPassword(email, password)
    .then(function(){
        alert("login successful")
    })

    .catch(function(error){
        var errorMsg = error.message
        alert(errorMsg)
    })
}


  function register(){
    email = document.getElementById("email").value
    password = document.getElementById("password").value
    fullname = document.getElementById("fullname").value
    username = document.getElementById("username").value

  if (validateEmail(email) == false || validatePassword(password)== false) {
      alert("Enter proper Email")
      return
      //return will not continue running the code

  }

  auth.createUserWithEmailAndPassword(email,password)
  .then(function (){ 
      console.log("inside then")
    var currentUser = auth.currentUser
    var dataBaseref = dataBase.ref()
    var userData = {
        fullname : fullname,
        email : email
    }
    dataBaseref.child('user/'+currentUser.uid).set(userData)
    alert(" User Registered Successfully")
    return

  })
  .catch(function(error){
      var errorMsg = error.message
    alert(errorMsg)
  })

  }

   function validateEmail(email) {
   expression = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
   if (expression.test(email)==true){
      return true
    } else{
          return false
      }
  }

  function validatePassword(password) {
    if(password.length<6){
        return false;
    }else{
        return true;
    }
}


function validatefullname(fullname) {
    if(fullname.length<30){
        return false;
    }else{
        return true;
    }
}


function validateUserName(username) {
    expression = /^[a-zA-Z0-9]+$/
    if (expression.test(username)==true){
    return true
    }else{
        return false
    }
}