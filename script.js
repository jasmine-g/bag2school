$(document).ready(function () {
$(".startbutton").click(function(){
    $(".intro").css("display","none");
    $(".namesect").css("display","flex");
    $(".submit1").css("display","block");
    $("#startbutton").css("display","none");
  
});




  $(".submit2").click(function(){
    
        $(".inputs").children().each(function(){
          
          let frenid = $(this).attr("id") ;
          let frenName = document.getElementById(frenid).value
          
          let newgroup = new group (frenName);
          localStorage.setItem("groupStats", JSON.stringify(newgroup));
          showFrenUserStats();
          

        });
        
      
    });
  

    function showFrenUserStats() {
        
        if (localStorage.getItem("groupStats") !== null) {
          groupStats = JSON.parse(localStorage.getItem("groupStats"));

              console.log(groupStats);
              
          }
          
        };
        
    function group (frenName) {
      this.id = Date.now();
      this.frenName = frenName;
      
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
      console.log(location);
       
    
      let userStats = JSON.parse(localStorage.getItem("userStats"));
     
      if (location == 1 && checkPasscode!="" && checkPasscode!= null && checkPasscode == "14Jk091H"){
        if (localStorage.getItem("userStats") !== null) {

          let userStats = JSON.parse(localStorage.getItem("userStats"));
          let accumulatedPoints = userStats.points + 15;
          userStats.points = accumulatedPoints ;

          let addItem = userStats.itemsCollected+1 ;
          userStats.itemsCollected = addItem;

          localStorage.setItem("userStats.points", JSON.stringify(accumulatedPoints));
          localStorage.setItem("userStats.itemsCollected", JSON.stringify(addItem));
          console.log(userStats.points);

          ++location;
         
          console.log(userStats);
          $(".bg").css("display","block");
          $(".cross1").css("display","block");
          
        }
      } else if(location == 2 && checkPasscode!="" && checkPasscode!= null && checkPasscode == "e4HP087p"){
        if (localStorage.getItem("userStats") !== null) {

          let userStats = JSON.parse(localStorage.getItem("userStats"));
          console.log(userStats);
          console.log(userStats.points);
          let accumulatedPoints = userStats.points + 15;
          userStats.points = accumulatedPoints ;
          localStorage.setItem("userStats.points", JSON.stringify(accumulatedPoints));

          let addItem = userStats.itemsCollected + 1 ;
          userStats.itemsCollected = addItem;
          localStorage.setItem("userStats.itemsCollected", JSON.stringify(addItem));
           
          console.log(userStats.points);

          ++location;
          console.log(userStats);
          collectItem3();
        }
      } else if (location == 3 && checkPasscode!="" && checkPasscode!= null && checkPasscode == "90LmQrZ6"){
        if (localStorage.getItem("userStats") !== null) {
          let userStats = JSON.parse(localStorage.getItem("userStats"));
          console.log(userStats);
          console.log(userStats.points);
          let accumulatedPoints = userStats.points + 15;
          userStats.points = accumulatedPoints ;
          localStorage.setItem("userStats.points", accumulatedPoints);
          console.log(userStats.points);
          
          console.log(userStats);
          ++location;
          collectItem4();
         } 
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

//hide ans
$(".cross").click(function(){
  $("#ans").css("display","none");
  $(".cross").css("display","none");

});
//show ans
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


let makanPlace = new newLocation("Here are some clues about where the next passcode is! <br> 1.It is near one of the food stores <br> 2. It is pasted on a counter","Reveal Answer","I'm Here")

let sports = new newLocation("My swimming CCA mate just texted me saying I left my bag at the Sports Complex. Lets headthere now! The Sports Complex has a swimmingpool, indoor sports hall, large field, running track, gym and more! Many sport CCAs go there for their training sessions. You should definitely join my CCA!However, if swimming is not for you, there are over 40 sports club and even more CCAs there are not sports related for you to explore!","Click here to find out more!","I'm Here")
let sports2 = new newLocation("Here are some clues about where the next passcode is!<br>1.near a place with lots of water<br> 2. pasted on something white","Reveal Answer", "I'm Here" )

let hangout = new newLocation("We have finally come to the last item I left on campus, my laptop charger. I remember leaving it at the Atrium. The Atrium is my favourite study and hang out spot. They are many chairs and tables there for youand your friends to study! It is also spacious and windy making it a nice environment to do your work. Most importantly there are charging ports for you if you ever need them. Definitely an essential to a Polytechnic student.","","Let's Go!")
let hangout2 = new newLocation("Here are some clues about where the next passcode is!<br> 1.It is near a row of plants <br> 2. pasted on something white","Reveal Answer","I'm Here")


function refreshPageMakanPlace(){
  
  $(".bubble").empty();
  $(".reachbtn").empty();
  $(".placename").append("MAKAN PLACE");
  $(".placename").css("display","block");
  $(".placename").css("margin-right","460px")
  
  let img = `<img src="photos/mp.png" class="baclue" alt="NP Makan Place">`
  $(".imageclue").append(img);

  let btn = makanPlace.buttonL
  let newBtn = `<input type="button" id="babtn" value="${btn}" style="margin-top:20px;"onClick="refreshPageSQuiz()" >`
  $(".reachbtn").append(newBtn);

  let speech = makanPlace.textL;
  $(".bubble").append(speech);
  $(".bubble").css("height","150px")

  let link = makanPlace.link;
  $("u").append(link);

}

function refreshPageSports1(){
  $(".bg").css("display","none");
  $(".passcodecontainer").css("display","none");
  $(".bubble").empty();
  $(".reachbtn").empty();

  $(".quiz").css("display","none");
  $(".quizT").css("display","none");
  $(".quiz").empty();

  let newForm = `<h3 class="top">Does Ngee Ann Poly have a fencing club?</h3>
  <input type="radio" id="FCyes" name="fencing club" value="yes">
  <label for="FCyes">Yes</label><br>
  <input type="radio" id="FCno" name="fencing club" value="no">
  <label for="FCno">No</label><br>
  <h3>How many lanes does the running track at the Sports Complex have?</h3>
  <input type="radio" id="RT6" name="Running Track" value="6">
  <label for="RT6">6</label><br>
  <input type="radio" id="RT8" name="Running Track" value="8">
  <label for="RT8">8</label><br>`

  $(".quiz").append(newForm);

  $(".bar_in").css({"height":"130px","top":"175px"});
  $(".amt").empty();
  $(".amt").append("2/4");

  $("#ans").attr("src","photos/sportans.png")
  
  let speech = sports.textL;
  $(".bubble").append(speech);
  $(".bubble").css("height","430px")

  $(".baans").attr("href","https://www.np.edu.sg/studentlife/Pages/ccas.aspx");
  let link = sports.link ;
  $(".baans").append(`<u style="color:#793B36;">${link}</u>`);

  let btn = sports.buttonL ;
  let newBtn = `<input type="button" id="babtn" value="${btn}" style="background-color:#CF726B; margin-top:10px" onClick="refreshPageSports2()" >`
  $(".reachbtn").append(newBtn);

}

function refreshPageSports2(){
  $(".bubble").empty();
  $(".baans").empty();
  $(".reachbtn").empty();
  $("a.baans").attr("href","#ans")

    let speechb = sports2.textL;
    let butt0n = sports2.buttonL;
    console.log(butt0n)
    let textL = sports2.link;

    $(".bubble").append(speechb);
    $(".bubble").css("height","160px")

    let newInput = `<input type="button" id="babtn" value="${butt0n}" style="margin-top:20px;"onClick = "refreshPageSQuiz()">`
    $(".reachbtn").append(newInput);

    let newText = `<u>${textL}</u>`
    $(".baans").append(newText);

    let newImg = `<img src="photos/SC.jpg" class= "baclue" alt="NP Sports Complex">`
    $(".imageclue").append(newImg);
    

    $(".placename").append("SPORTS COMPLEX");
    $(".placename").css({"display":"block","margin-right":"390px"});

    $(".cross").css("top","63%")



}

function refreshPageSQuiz(){
  $(".bubble").empty();
  $(".placename").empty();
  $(".imageclue").empty();
  $(".baans").empty();
  $(".reachbtn").empty();
  $(".placename").css("display","none");
  
  let speechb2 = quizTemplate.textL;
  let butt0n2 = quizTemplate.buttonL;

  $(".bubble").append(speechb2);

  let newInput2 = `<input type="button" id="babtn" value="${butt0n2}" style="margin-top:20px" onClick="showPasscode()" >`
  $(".reachbtn").append(newInput2);

  $(".quiz").css("display","block");
  $(".quizT").css("display","block");

}

;
function showPasscode(){
  $(".passcodecontainer").css("display","flex");
  
}

function refreshPageHangout(){
  $(".bg").css("display","none");
  $(".cross1").css("display","none");
  $(".bubble").empty();
  $(".passcodecontainer").css("display","none");
  $(".quizT").css("display","none");
  $(".quiz").css("display","none");
  $(".reachbtn").empty();
  $(".amt").empty();
  $(".bar_in").css({"height":"170px",
  "top":"138px"});

  let speechb3 = hangout.textL
  let butt0n3 = hangout.buttonL

  $(".bubble").append(speechb3);
  $(".bubble").css("height","450px");
  let newInput3 = `<input type="button" id="babtn" value="${butt0n3}" style = "background-color:#CF726B; margin-top:0px;" onClick="refreshPageHangout2()">`
 
  $(".reachbtn").append(newInput3)
  
  $(".amt").append("3/4");
  $(".amt").css("position:relative;");
}

function refreshPageHangout2(){
  $(".bubble").empty();
  $(".reachbtn").empty();
  $(".placename").append("ATRIUM");
  $(".placename").css("margin-right","600px");
  $(".placename").css("display","block")
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

  let newInput3 = `<input type="button" id="babtn" value="${btnt}" style="margin-top:20px;" onClick = "refreshpageHQuiz()">`
  $(".reachbtn").append(newInput3);


}

function refreshpageHQuiz(){
  $(".passcodecontainer").css("display","none");
  $(".bubble").empty();
  $(".placename").empty();
  $(".placename").css("display","none")
  $(".imageclue").empty();
  $(".baans").empty();
  $(".reachbtn").empty();
  $(".quiz").empty();

  let speechb = quizTemplate.textL
  let btn = quizTemplate.buttonL

  let newInput3 = `<input type="button" id="babtn" value="${btn}" style="margin-top:20px" onCLick="showPasscode()">`
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








//collection
function collectItem3(){
  $(".cross1").remove();
  $(".prizeText").empty();
  $(".prizeText").append("YOU HAVE COLLECTED THE BAG!")
  let newCross = `<div class="cross1" onclick="refreshPageHangout()"></div>`
  $(".bg").append(newCross);
  $(".cross1").css("display","block");
  $(".itemimg").attr("src","photos/bag.PNG");
  $(".bg").css("display","block");
  $(".amt").empty();
  $(".amt").append("3/4");
  
}

function collectItem4(){
  $(".cross1").remove();
  $(".prizeText").empty();
  $(".prizeText").append("YOU HAVE COLLECTED THE CHARGER!");
  let newCross = `<div class="cross1"></div>`
  $(".bg").append(newCross);
  $(".cross1").css("display","block");
  $(".itemimg").attr("src","photos/charger.PNG");
  $(".itemimg").css("top","13%")
  $(".bg").css("display","block");
  $(".amt").empty();
  $(".amt").append("4/4");

}


//MAP API
// TO MAKE THE MAP APPEAR YOU MUST
	// ADD YOUR ACCESS TOKEN FROM
	// https://account.mapbox.com
  $(document).ready(function(){

  
	mapboxgl.accessToken = 'pk.eyJ1IjoiZGVuMTIzamFzbWluZSIsImEiOiJja3o2c240eHkxMzlnMzFvMjhsdzh1d3MxIn0.eLnHviVq5nng0d2dtGbOlA';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [103.774612, 1.333188], // starting position [lng, lat]
        zoom: 17


         // starting zoom
        
    });
    
    map.on('load', () => {
// Load an image from an external URL.
map.loadImage(
'photos/schoollogo.png', 

(error, image) => {
if (error) throw error;

 
// Add the image to the map style.
map.addImage('BA', image);

 
// Add a data source containing one point feature.
map.addSource('point', {
'type': 'geojson',
'data': {
'type': 'FeatureCollection',
'features': [
{
    
    'type': 'Feature',
    'geometry': {
    'type': 'Point',
    'coordinates': [103.77595870892608, 1.3319364595559566]
        },
    },


]
}
});
 
// Add a layer to use the image to represent the data.
map.addLayer({
'id': 'points',
'type': 'symbol',
'source': 'point', // reference the data source
'layout': {
'icon-image': 'BA', // reference the image
'icon-size': 0.4
}
});

}
);
});

map.on('load', () => {
// Load an image from an external URL.
map.loadImage(
'photos/ict.png', 
(error, image) => {
if (error) throw error;

 
// Add the image to the map style.

map.addImage('ICT', image);
 
// Add a data source containing one point feature.
map.addSource('point2', {
'type': 'geojson',
'data': {
'type': 'FeatureCollection',
'features': [
{
    
    'type': 'Feature',
    'geometry': {
    'type': 'Point',
    'coordinates': [103.77521102042574,1.3344110333832981]
        },
    },


]
}
});
 
// Add a layer to use the image to represent the data.
map.addLayer({
'id': 'points2',
'type': 'symbol',
'source': 'point2', // reference the data source
'layout': {
'icon-image': 'ICT', // reference the image
'icon-size': 0.3
}
});

}
);
});

map.on('load', () => {
// Load an image from an external URL.
map.loadImage(
'photos/soe.png', 
(error, image) => {
if (error) throw error;

 
// Add the image to the map style.

map.addImage('SOE', image);
 
// Add a data source containing one point feature.
map.addSource('point3', {
'type': 'geojson',
'data': {
'type': 'FeatureCollection',
'features': [
{
    
    'type': 'Feature',
    'geometry': {
    'type': 'Point',
    'coordinates': [103.7743587161088,1.3320859799678084]
        },
    },


]
}
});
 
// Add a layer to use the image to represent the data.
map.addLayer({
'id': 'points3',
'type': 'symbol',
'source': 'point3', // reference the data source
'layout': {
'icon-image': 'SOE', // reference the image
'icon-size': 0.2
}
});


}
);
});

map.on('load', () => {
// Load an image from an external URL.
map.loadImage(
'photos/fms.png', 
(error, image) => {
if (error) throw error;

 
// Add the image to the map style.

map.addImage('FMS', image);
 
// Add a data source containing one point feature.
map.addSource('point4', {
'type': 'geojson',
'data': {
'type': 'FeatureCollection',
'features': [
{
    
    'type': 'Feature',
    'geometry': {
    'type': 'Point',
    'coordinates': [103.77530574797247,1.3318533465583449]
        },
    },


]
}
});
 
// Add a layer to use the image to represent the data.
map.addLayer({
'id': 'points4',
'type': 'symbol',
'source': 'point4', // reference the data source
'layout': {
'icon-image': 'FMS', // reference the image
'icon-size': 0.25
}
});


}
);
});

map.on('load', () => {
// Load an image from an external URL.
map.loadImage(
'photos/hms.png', 
(error, image) => {
if (error) throw error;

 
// Add the image to the map style.

map.addImage('HMS', image);
 
// Add a data source containing one point feature.
map.addSource('point5', {
'type': 'geojson',
'data': {
'type': 'FeatureCollection',
'features': [
{
    
    'type': 'Feature',
    'geometry': {
    'type': 'Point',
    'coordinates': [103.77504356896912,1.3315113699785717]
        },
    },


]
}
});
 
// Add a layer to use the image to represent the data.
map.addLayer({
'id': 'points5',
'type': 'symbol',
'source': 'point5', // reference the data source
'layout': {
'icon-image': 'HMS', // reference the image
'icon-size': 0.25
}
});


}
);
});

map.on('load', () => {
// Load an image from an external URL.
map.loadImage(
'photos/hs.png', 
(error, image) => {
if (error) throw error;

 
// Add the image to the map style.

map.addImage('HS', image);
 
// Add a data source containing one point feature.
map.addSource('point6', {
'type': 'geojson',
'data': {
'type': 'FeatureCollection',
'features': [
{
    
    'type': 'Feature',
    'geometry': {
    'type': 'Point',
    'coordinates': [ 103.77428520394221,1.3302495659411049]
        },
    },


]
}
});
 
// Add a layer to use the image to represent the data.
map.addLayer({
'id': 'points6',
'type': 'symbol',
'source': 'point6', // reference the data source
'layout': {
'icon-image': 'HS', // reference the image
'icon-size': 0.2
}
});


}
);
});
    

map.on('load', () => {
// Load an image from an external URL.
map.loadImage(
'photos/isct.png', 
(error, image) => {
if (error) throw error;

 
// Add the image to the map style.

map.addImage('ISCT', image);
 
// Add a data source containing one point feature.
map.addSource('point7', {
'type': 'geojson',
'data': {
'type': 'FeatureCollection',
'features': [
{
    
    'type': 'Feature',
    'geometry': {
    'type': 'Point',
    'coordinates': [ 103.77490189332893,1.3306262776232527]
        },
    },


]
}
});
 
// Add a layer to use the image to represent the data.
map.addLayer({
'id': 'points7',
'type': 'symbol',
'source': 'point7', // reference the data source
'layout': {
'icon-image': 'ISCT', // reference the image
'icon-size': 0.2
}
});

}
);
});

map.on('load', () => {
// Load an image from an external URL.
map.loadImage(
'photos/design.png', 
(error, image) => {
if (error) throw error;

 
// Add the image to the map style.

map.addImage('DE', image);
 
// Add a data source containing one point feature.
map.addSource('point8', {
'type': 'geojson',
'data': {
'type': 'FeatureCollection',
'features': [
{
    
    'type': 'Feature',
    'geometry': {
    'type': 'Point',
    'coordinates': [ 103.774125760712,1.333663814270164 ]
        },
    },


]
}
});
 
// Add a layer to use the image to represent the data.
map.addLayer({
'id': 'points8',
'type': 'symbol',
'source': 'point8', // reference the data source
'layout': {
'icon-image': 'DE', // reference the image
'icon-size': 0.2
}
});
}
);
});

document.getElementById('fit').addEventListener('click', () => {
map.fitBounds([
[ 103.7832715635987,1.3293500682510455], // southwestern corner of the bounds
[103.77056306003449, 1.3327436469174052 ] // northeastern corner of the bounds
]);
});
});
//side nav menu functions
//show checklist
$("#checklist").click(function() {
  $(".endbtn").css("display","block");

  $(".CLcontent").css("display","block");
  $(".two").hide();
  $(".three").hide();
  if (localStorage.getItem("userStats") !== null) {

    let userStats = JSON.parse(localStorage.getItem("userStats"));
    let value = userStats.itemsCollected 
    console.log(value);
    
    let j=0;
    while(j<value){
      $(".CLcontent").append(`<img src="photos/tickk.png" class="tickk${j}" alt="tick" >`);
      
      j++;
    }




  }
  
});
//going back for checklsit
function back(){
  $(".CLcontent").css("display","none");
  $(".two").css("display","block");
  $(".three").css("display","block");
  $(".endbtn").css("display","none");
}
function back2(){
  $("#fit").css("display","none");
  $(".one").css("display","block");
  $(".three").css("display","block");
  $("#map").css("visibility","hidden");
  $(".two img").css({"position":"relative",
    "top":"0%","left":"0%"});
  $(".menuitems").css("top","7%");
  $(".two h3").css({"position":"relative",
  "top":"0%","left":"0%"});
  $(".two hr").css({"position":"relative",
  "top":"0%","left":"0%"});
  $(".endbtn").css("display","none");
  }

//showing map
$("#mapicon").click(function(){
  $(".endbtn").css("display","block");
  $("a.endbtn ").css("display","none");
  $("#map").css({"visibility":"visible",
  }); 
  const mapDiv = document.getElementById("map");
  if (mapDiv.style.visibility === true) map.resize();
  $("#fit").css("display","block");
  $(".one").hide();
  $(".three").hide();
  $(".two img").css({"position":"absolute",
    "top":"30%","left":"5%"});
  $(".menuitems").css("top","7%");
  $(".two h3").css({"position":"absolute",
  "top":"80%","left":"65px"});
  $(".two hr").css({"position":"absolute",
  "top":"165%","left":"30px"});

});




