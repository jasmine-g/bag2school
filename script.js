$(document).ready(function () {
$('.startbutton').click(function(){
    $('.intro').css('display','none');
    $('.namesect').css('display','flex');
    $('.submit1').css('display','block');
    $('#startbutton').css('display','none');
  
});


});

  $('.submit1').click(function(){
    if(document.getElementById('username').checkValidity() && document.getElementById('username').value !=""){
   

    //@TODO
    //create objects based on object template and form data
    //
    //INSERT YOUR CODE HERE :)

    //Get form values
    let username = document.getElementById("username").value;
    
    
    console.log(username)
    
    let userStats = [];

    if (localStorage.getItem("userStats") !== null) {
        userStats = JSON.parse(localStorage.getItem("userStats"));
      }
      let newUser = new User (username);
      //create our student and store to localstorage
      userStats.push(newUser);
      localStorage.setItem("userStats", JSON.stringify(userStats));

      showUserStats();
    }
    });
  

    function showUserStats() {
        
        if (localStorage.getItem("userStats") !== null) {
          userStats = JSON.parse(localStorage.getItem("userStats"));

              console.log(userStats);
          }
          
        };
        
        function User(username) {
          this.id = Date.now();
          this.name = username;
         
        };

function nextPage(){
  var checkInput = document.getElementById('username').value;
  if (checkInput != "" && checkInput!= null) {
    window.location.replace("./template1.html");
    // alert("You Are a ADMIN");

  } else {
    alert("Please enter a username");
    return;
  }

  }



        
      