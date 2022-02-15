$(document).ready(function () {
$(".startbutton").click(function(){
    $(".intro").css("display","none");
    $(".namesect").css("display","flex");
    $(".submit1").css("display","block");
    $("#startbutton").css("display","none");
  
});




  $(".submit1").click(function(){
    if(document.getElementById("username").checkValidity() && document.getElementById("username").value !=""){
   


    //Get form values
    let username = document.getElementById("username").value;
    let apoints = 0;
    let aitemsCollected = 0;
    
    console.log(apoints)
    console.log(username)
    
    let userStats = [];

    if (localStorage.getItem("userStats") !== null) {
        userStats = JSON.parse(localStorage.getItem("userStats"));
      }
      let newUser = new User (username, apoints, aitemsCollected);
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
        
        function User(username,apoints,aitemsCollected) {
          this.id = Date.now();
          this.name = username;
          this.userPoints = apoints;
          this.useritemsCollected = this.aitemsCollected;
         
        };

function nextPage(){
  var checkInput = document.getElementById("username").value;
  
  if (checkInput != "" && checkInput!= null) {
   location.replace("template1.html")
  } else {
    alert("Please enter a username");
    return;
  }

  }

  
  
  let x = 0;
  function addUsername(){
    
    
    if(x==3){
      alert("maximum of 4 players");
      return;
    }
    
    var newDiv = `<input type="text" id="fusername${x}" required style="margin-left:auto; margin-right:auto; width:30%; position:relative; margin-top:10px; border-color: #793B36;height:35px;border-radius: 5px;">`;  //create Div Element w/ jquery
  
    $( ".fnamesect" ).append(newDiv)
 
    
    ++x;
    
    
    
  }

  function newPageT1 (text, button, backb){
    this.text = text;
    this.button = button;
    this.backb = backb;
  }

  let getStarted = new newPageT1("Help me find my items around the school! At the respective locations, there would be a  password that you need to key in to collect the  item. Each item is worth 15 points. There are also quizzes that you can answer to earn bonus points!  At the end of the game, every 50 points will earn you one spin to earn more rewards!!","Let's Get Started!","back to start");
  localStorage.setItem("newPageT1", JSON.stringify("newPageT1"));
  
  function refreshPage (){
   
    $(".options").empty();
    $(".bubble").empty();
    $(".backt").empty();
    $("a").attr("href","template1.html")

    if (localStorage.getItem("getStarted") !== null) {
      getStarted = JSON.parse(localStorage.getItem("getStarted"));

          console.log(getStarted);
      }
   


    let speecht = getStarted.text;
    let buttont = getStarted.button;
    let backtext = getStarted.backb;

    $(".bubble").append(speecht);
    $(".bubble").css("height",320);

    var newButton = `<div class="standardbutton">${buttont}</div>`
    console.log (newButton);
    $(".options").append(newButton);
    $(".backt").append(backtext);
  }

  $('.submit2').click(function(){
    if(document.getElementById("fusername").checkValidity() && document.getElementById("fusername").value !=""){
   


    //Get form values
    let fusername = document.getElementById("fusername").value;
    let fpoints = 0;
    let fitemsCollected = 0;
    
    
    console.log(fusername)
    
    let fuserStats = [];

    if (localStorage.getItem("fuserStats") !== null) {
        fuserStats = JSON.parse(localStorage.getItem("fuserStats"));
      }
      let newGroup = new Group (fusername, fpoints, fitemsCollected);
      //create our student and store to localstorage
      fuserStats.push(newGroup);
      localStorage.setItem("fuserStats", JSON.stringify(fuserStats));

      showfUserStats();
    }
    });
  

    function showfUserStats() {
        
        if (localStorage.getItem("fuserStats") !== null) {
          fuserStats = JSON.parse(localStorage.getItem("fuserStats"));

              console.log(fuserStats);
          }
          
        };
        
    function Group(fusername,fpoints,fitemsCollected) {
      this.id = Date.now();
      this.name = fusername;
      this.points = fpoints;
      this.itemsCollected = fitemsCollected;
         
    };



    var location = 0;
    function verifyPasscode(){
      var checkPasscode = document.getElementById("passcode")
      ++location;
      if (location == 1 && checkPasscode!="" && checkPassode!= null){
        if (checkPasscode == "14Jk091H"){
         user.apoints = user.apoints + 15;


          console.log(user.apoints);
        }
          else {
            alert("Please enter the correct passcode");
            return;

        }
      }

      
      


    };

});
  
  
let x = 0;
  function addUsername(){
    
    
    if(x==3){
      alert("maximum of 4 players");
      return;
    }
    
    var newDiv = `<input type="text" id="fusername${x}" required style="margin-left:auto; margin-right:auto; width:30%; position:relative; margin-top:10px; border-color: #793B36;height:35px;border-radius: 5px;">`;  //create Div Element w/ jquery
  
    $( ".fnamesect" ).append(newDiv)
 
    
    ++x;
    
    
    
  }
   