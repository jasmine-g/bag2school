$(document).ready(function () {
$(".startbutton").click(function(){
    $(".intro").css("display","none");
    $(".namesect").css("display","flex");
    $(".submit1").css("display","block");
    $("#startbutton").css("display","none");
  
});




  $(".submit2").click(function(){
    
        length = $(".inputs").children().length;
        console.log(length);
        value = $(".inputs").children().value;
        console.log(value);
        
      for (let i = 0; i<length; i++){
        if(value[i].checkValidity() &&  value[i]!=""){
          let fusername = value[i];
          let fpoints = 0;
          let fitemsCollected= 0;
          let fuserStats = [];

          if (localStorage.getItem("fuserStats") !== null) {
            fuserStats = JSON.parse(localStorage.getItem("fuserStats"));
          }
          let newfUser = new fUser (fusername, fpoints, fitemsCollected);
      //create our student and store to localstorage
          userStats.push(newfUser);
          localStorage.setItem("fuserStats", JSON.stringify(fuserStats));

          showfUserStats();
    
    
      } else{alert("Please enter a username");
      return;

      }
    }
    });
  

    function showfUserStats() {
        
        if (localStorage.getItem("fuserStats") !== null) {
          fuserStats = JSON.parse(localStorage.getItem("fuserStats"));

              console.log(fuserStats);
              
          }
          
        };
        
    function fUser(username,apoints,aitemsCollected) {
      this.id = Date.now();
      this.name = fusername;
      this.userPoints = fpoints;
      this.useritemsCollected = fitemsCollected;
    };

    


  



  $('.submit1').click(function(){
    if(document.getElementById("username").checkValidity() && document.getElementById("username").value !=""){
   


    //Get form values
    let username = document.getElementById("username").value;
    let apoints = 0;
    let aitemsCollected = 0;
    
    
    console.log(username)
    
    

    
      let newUser = new User (username, apoints, aitemsCollected);
      console.log(newUser);
      //create our student and store to localstorage
      
      localStorage.setItem("userStats", JSON.stringify(newUser));

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
      this.points = apoints;
      this.itemsCollected = aitemsCollected;
         
    };


//checking whether passcode is correct 
    var location = 1; //check which location user is at
    $(".passcodesubmit").click(function(){
      var checkPasscode = ""+document.getElementById("passcode").value;
      console.log(checkPasscode);
      
       
    
      let userStats = JSON.parse(localStorage.getItem("userStats"));
     
      if (location == 1 && checkPasscode!="" && checkPasscode!= null && checkPasscode == "14Jk091H"){
        if (localStorage.getItem("userStats") !== null) {
          let userStats = JSON.parse(localStorage.getItem("userStats"));
          let accumulatedPoints = userStats.points + 15;
          userStats.points = accumulatedPoints ;
          localStorage.setItem("userStats.points", JSON.stringify(accumulatedPoints));
          console.log(userStats.points);

          ++location;
          console.log(accumulatedPoints);
          console.log(userStats);
          refreshPageHangout();
        }
      } else if(location == 2 && checkPasscode!="" && checkPasscode!= null && checkPasscode == "e4HP087p"){
        if (localStorage.getItem("userStats") !== null) {
          let userStats = JSON.parse(localStorage.getItem("userStats"));
          console.log(userStats);
          console.log(userStats.points);
          let accumulatedPoints = userStats.points + 15;
          userStats.points = accumulatedPoints ;
          localStorage.setItem("userStats.points", JSON.stringify(accumulatedPoints));
          console.log(userStats.points);
          ++location;
          console.log(userStats);
        }
      } else if (location == 3 && checkPasscode!="" && checkPasscode!= null && checkPasscode == "90LmQrZ6"){
        let accumulatedPoints = userStats.points + 15;
        localStorage.setItem("userStats.points", accumulatedPoints);

        ++location;
        console.log();
      } else if (location == 4 && checkPasscode!="" && checkPasscode!= null && checkPasscode == "2acb53Yg"){
        let accumulatedPoints = userStats.points + 15;
        localStorage.setItem("userStats.points", accumulatedPoints);

        ++location;
        console.log(accumulatedPoints);
      } else {
            alert("Please enter the correct passcode");
            return;

        
        }
      
    
  });


});
    


  
  
let x = 0;
  function addUsername(){
    
    
    if(x==3){
      alert("maximum of 4 players");
      return;
    }
    
    var newDiv = `<input type="text" id="username${x}" required style="margin-left:auto; margin-right:auto; width:30%; position:relative; margin-top:10px; border-color: #793B36;height:35px;border-radius: 5px;">`;  //create Div Element w/ jquery
    console.log(newDiv)
    $( ".inputs" ).append(newDiv)
 
    
    ++x;
    
    
    
  };

  function nextPage(){
  var checkInput = document.getElementById("username").value;
  
  
  if (checkInput != "" && checkInput!= null) {
    location.replace("template1.html");
   
  } 
  
  
  else {
    alert("Please enter a username");
    return;
  }
  };

 

  function newPageT1 (text, button, backb){
    this.text = text;
    this.button = button;
    this.backb = backb;
  }
  


  let getStarted = new newPageT1("Help me find my items around the school! At the respective locations, there would be a  password that you need to key in to collect the  item. Each item is worth 15 points. There are also quizzes that you can answer to earn bonus points!  At the end of the game, every 50 points will earn you one spin to earn more rewards!!","Let's Get Started!","back to start");
  console.log(getStarted)
  
  
  
  

  function refreshPage(){
   
    
    $(".options").empty();
    $(".bubble").empty();
    $(".backt").empty();
    $("a").attr("href","template1.html");
    



    


    let speecht = getStarted.text;
    let buttont = getStarted.button;
    let backtext = getStarted.backb;

    $(".bubble").append(speecht);
    $(".bubble").css("height",320);

    let newButton = `<div class="standardbutton">${buttont}</div>`
    console.log (newButton);
    $(".options").append(newButton);
    $(".backt").append(backtext);
  

};

/*hide*/
$(".cross").click(function(){
  $("#ans").css("display","none");
  $(".cross").css("display","none");

});
//show
$(".baans").click(function(){
  $("#ans").css("display","block");
  $(".cross").css("display","block");


});
 
/*MENU*/
function openMenu() {
  document.getElementById("menu").style.width = "100%";
}

function closeMenu() {
  document.getElementById("menu").style.width = "0%";
}


function newLocation (textL, link, buttonL){
  this.textL = textL;
  this.link = link;
  this.buttonL = buttonL;
  
  
}


let quizTemplate = new newLocation("Answer the quiz to earn bonus points!<br>Find the passcode (on a poster) and <br> key it in to collect  the item and submit <br> quiz answers!","","Key In Secret Passcode")
let ict = new newLocation("Here are some clues about where the passcode is!<br> 1.It is near the lifts<br> 2.You can see Food Club from the place it is pasted<br> 3.It is near vending machines","I'm Here","Reveal Answer","I'm Here")

let makanPlace = new newLocation("Here are some clues about where the next passcode is! <br> 1.It is near one of the food stores <br> 2. It is pasted on a counter","Reveal Answer","I'm Here")

let sports2 = new newLocation("Here are some clues about where the next passcode is!<br>1.near a place with lots of water<br> 2. pasted on something white","Reveal Answer", "I'm Here" )

let hangout = new newLocation("We have finally come to the last item I left on campus, my laptop charger. I remember leaving it at the Atrium. The Atrium is my favourite study and hang out spot. They are many chairs and tables there for youand your friends to study! It is also spacious and windy making it a nice environment to do your work. Most importantly there are charging ports for you if you ever need them. Definitely an essential to a Polytechnic student.","","Let's Go!")
let hangout2 = new newLocation("Here are some clues about where the next passcode is!<br> 1.It is near a row of plants <br> 2. pasted on something white","Reveal Answer","I'm Here")





function refreshPageSports(){
  $(".bubble").empty();
  $(".baans").empty();
  $(".reachbtn").empty();
  $("a.baans").attr("href","#ans")

    let speechb = sports2.textL;
    let butt0n = sports2.buttonL;
    console.log(butt0n)
    let textL = sports.link;

    $(".bubble").append(speechb);
    $(".bubble").css("height","160px")

    let newInput = `<input type="button" id="babtn" value="${butt0n}" onClick = "refreshPageSQuiz()">`
    $(".reachbtn").append(newInput);

    let newText = `<u>${textL}</u>`
    $(".baans").append(newText);

    let newImg = `<img src="photos/SC.jpg" class= "baclue" alt="NP Sports Complex">`
    $(".imageclue").append(newImg);
    

    $(".placename").append("SPORTS COMPLEX");

    $(".cross").css("top","55%")



}

function refreshPageSQuiz(){
  $(".bubble").empty();
  $(".placename").empty();
  $(".imageclue").empty();
  $(".baans").empty();
  $(".reachbtn").empty();
  
  let speechb2 = quizTemplate.textL;
  let butt0n2 = quizTemplate.buttonL;

  $(".bubble").append(speechb2);

  let newInput2 = `<input type="button" id="babtn" value="${butt0n2}" onClick="showPasscode()" >`
  $(".reachbtn").append(newInput2);

  $(".quiz").css("display","block");
  $(".quizT").css("display","block");

}

;
function showPasscode(){
  $(".passcodecontainer").css("display","flex");
  
}

function refreshPageHangout(){
  $(".passcodecontainer").css("display","none");
  $(".bubble").empty();
  $(".quizT").css("display","none");
  $(".quiz").css("display","none");
  $(".reachbtn").empty();
  $(".amt").empty();
  $(".bar_in").css({"height":"170px",
  "top":"138px"});

  let speechb3 = hangout.textL
  let butt0n3 = hangout.buttonL

  $(".bubble").append(speechb3);
  $(".bubble").css("height","425px");
  let newInput3 = `<input type="button" id="babtn" value="${butt0n3}" style = "background-color:#CF726B" onClick="refreshPageHangout2()">`
 
  $(".reachbtn").append(newInput3)
  
  $(".amt").append("3/4");
  $(".amt").css("position:relative;");
}

function refreshPageHangout2(){
  $(".bubble").empty();
  $(".reachbtn").empty();
  $(".placename").append("ATRIUM");
  $(".placename").css("margin-right","600px");
  $("#ans").attr("src","photos/atrans.png");
  $(".cross").css("top","40%")
  

  let newimg2= `<img src="photos/atrium.png" class= "baclue" alt="NP Atrium">`
  $(".imageclue").append(newimg2);

  let speechb = hangout2.textL
  let link = hangout2.link
  let btnt = hangout2.buttonL

  $(".bubble").append(speechb);
  $(".bubble").css("height","150px");
  
  
  let newText = `<u>${link}</u>`
  $(".baans").append(newText);

  let newInput3 = `<input type="button" id="babtn" value="${btnt}"  onClick = "refreshpageHQuiz()">`
  $(".reachbtn").append(newInput3);


}

function refreshpageHQuiz(){
  $(".bubble").empty();
  $(".placename").empty();
  $(".imageclue").empty();
  $(".baans").empty();
  $(".reachbtn").empty();
  $(".quiz").empty();

  let speechb = quizTemplate.textL
  let btn = quizTemplate.buttonL

  let newInput3 = `<input type="button" id="babtn" value="${btn}"  onCLick="showPasscode()">`
  $(".reachbtn").append(newInput3);

  $(".bubble").append(speechb);


  let newForm = `<h3 class="top">How many vending machines are there in the Atrium?</h3>
            <input type="radio" id="A5" name="vending machine" value="5">
            <label for="A5">5</label><br>
            <input type="radio" id="A3" name="vending machine" value="3">
            <label for="A3">3</label><br>
            <h3>How many tables are there in the Atrium?</h3>
            <input type="radio" id="T25" name="Tables" value="25">
            <label for="T25">25</label><br>
            <input type="radio" id="T15" name="Tables" value="15">
            <label for="T15">15</label><br></br>`

  $(".quiz").append(newForm);
  $(".quiz").css("display","block");
  $(".quizT").css("display","block");

}

function refreshPageMakanPlace(){
  $(".bubble").empty();
  $(".reachbtn").empty();
  $(".placename").append("MAKAN PLACE");
  $(".placename").css("margin-right","460px")
  
  let img = `<img src="photos/mp.png" class="baclue" alt="NP Makan Place">`
  $(".imageclue").append(img);

  let btn = makanPlace.buttonL
  let newBtn = `<input type="button" id="babtn" value="${btn}" onClick="refreshPageSQuiz()" >`
  $(".reachbtn").append(newBtn);

  let speech = makanPlace.textL;
  $(".bubble").append(speech);
  $(".bubble").css("height","150px")

  let link = makanPlace.link;
  $("u").append(link);


}

