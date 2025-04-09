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
    
    
    
    var alluser = firebase.database().ref().child("admin").child('super_asdmin');
    
    
    
    
    var admin = '';
    var pass = '';
    
  
  
  
  
  alluser.on("value", function (snapshot4) {
      if (snapshot4.exists()) {
  
  
  
  
        admin = snapshot4.val().username;
         pass = snapshot4.val().password ;
  
  
  
  
  
      }
  
  

  
      $('#bkas').val(admin);
      $('#nog').val(pass);
    
  
  
    });
  
  
    function validate() {
  
      var bkas  = document.getElementById("bkas").value;
      var nog = document.getElementById("nog").value;
   
      
    
    
      var ref10 = firebase.database().ref().child("admin");
    
      var didConfirm = confirm("Are you sure You want to submit??");
      if (didConfirm == true) {
    
        ref10.child('super_asdmin').set({
          "username": bkas,
          "password": nog,

        
          
    
        });
    
    
        location.reload();
        
    
    
      } else {
        return false;
      }
    
    
    
    
    
    }
    
    
    
    
    
  
  
    
    
    
    
  
  
    
    
  
    
  
    
  
  