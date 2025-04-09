const firebaseConfig = {
  apiKey: "AIzaSyCNGTKPDr9Oda1EpXX-p0U1kvSH-H1Lrqc",
  authDomain: "upgrade-26f82.firebaseapp.com",
  databaseURL: "https://upgrade-26f82-default-rtdb.firebaseio.com",
  projectId: "upgrade-26f82",
  storageBucket: "upgrade-26f82.firebasestorage.app",
  messagingSenderId: "400963287679",
  appId: "1:400963287679:web:c2b03afd926c8553d85d4a",
  measurementId: "G-ZV976MR861"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  
  var alluser = firebase.database().ref().child("agent_number").child('10');
  
  
  
  
  var total = '';
  var ploan = '';
  

var nogod = '';
var bkash = '';
var rocket = '';


alluser.on("value", function (snapshot4) {
    if (snapshot4.exists()) {




      bkash = snapshot4.val().bkash;
       nogod = snapshot4.val().nogod ;
       rocket = snapshot4.val().rocket;




    }



    console.log("bkash"+bkash);
    console.log("nogod"+nogod);

    $('#bkas').val(bkash);
    $('#nog').val(nogod);
    $('#roc').val(rocket);


  });


  function validate() {

    var bkas  = document.getElementById("bkas").value;
    var nog = document.getElementById("nog").value;
    var roc = document.getElementById("roc").value;
    
  
  
    var ref10 = firebase.database().ref().child("agent_number");
  
    var didConfirm = confirm("Are you sure You want to submit??");
    if (didConfirm == true) {
  
      ref10.child('10').set({
        "bkash": bkas,
        "nogod": nog,
        'rocket': roc,
      
        
  
      });
  
  
      location.reload();
      
  
  
    } else {
      return false;
    }
  
  
  
  
  
  }
  
  
  
  
  


  
  
  
  


  
  

  

  

