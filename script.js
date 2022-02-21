$(document).ready(function () {

// to show username input for index html
$(".startbutton").click(function(){
    $(".intro").css("display","none");
    $(".namesect").css("display","flex");
    $(".submit1").css("display","block");
    $("#startbutton").css("display","none");
  
});


// setting of friend usernames in local storage

  $(".submit2").click(function(){

      var group = []
      if (group.length >0){
        group.splice(0, group.length)
        
      } 
        $(".inputs").children().each(function(){
          let frenid = $(this).attr("id") ;
          if(document.getElementById(frenid).checkValidity() && document.getElementById(frenid).value !="" && document.getElementById(frenid).value != null){
          
          
          let frenName = document.getElementById(frenid).value
          
          let newFriend = new Friend (frenName);
          group.push(newFriend);
          localStorage.setItem("groupStats", JSON.stringify(group));
         
          }else{
            alert("Please enter a username");
            return;

          }
  
        });
        
      
    });
  

    $("#hi").click(function() {
        
        if (localStorage.getItem("groupStats") !== null) {
          groupStats = JSON.parse(localStorage.getItem("groupStats"));
          let frenData = "";
          console.log(groupStats[1]);
          for(let friend of groupStats){
            frenData += `${friend.frenName},`;
        }
        document.getElementById("fname").innerHTML = frenData;
        console.log(frenData)
      }
              
           else{
            console.log("no friends")
          }
          
        });
        
// function object for friend usernames
    function Friend (frenName) {
      this.id = Date.now();
      this.frenName = frenName;
      
    };



    // setting of user's username,points,number of collected items in local storage 

  $('.submit1').click(function(){
    if(document.getElementById("username").checkValidity() && document.getElementById("username").value !="" && document.getElementById("username").value != null){
   
        let username = document.getElementById("username").value;
        let apoints = 0;
        let aitemsCollected = 0;
        let location = 1;

        let newUser = new User (username, apoints, aitemsCollected,location);
        console.log(newUser);

        localStorage.setItem("userStats", JSON.stringify(newUser));

        showUserStats();
        window.location.replace("template1.html");
       

    } else {
      alert("Please enter a username");
      return;
    }
    });
  

    function showUserStats() {
        
        if (localStorage.getItem("userStats") !== null) {
          userStats = JSON.parse(localStorage.getItem("userStats"));

              console.log(userStats);
          }
          
        };
    
    // function object for user's name, points, number of items collected
    function User(username,apoints,aitemsCollected,location) {
      this.id = Date.now();
      this.name = username;
      this.points = apoints;
      this.itemsCollected = aitemsCollected;
      this.location = location
         
    };


//checking whether passcode is correct 
   
    
    $(".passcodesubmit").click(function(){
      var checkPasscode = ""+document.getElementById("passcode").value;
      console.log(checkPasscode);
      
      let userStats = JSON.parse(localStorage.getItem("userStats"));

    
      
     // if user is at the first location
      if (userStats.location == 1 && checkPasscode!="" && checkPasscode!= null && checkPasscode == "14Jk091H"){
        if (localStorage.getItem("userStats") !== null) {

          let userStats = JSON.parse(localStorage.getItem("userStats"));

          userStats.points += 15;
          userStats.itemsCollected+=1 ;
          userStats.location+=1;
       
          localStorage.setItem("userStats", JSON.stringify(userStats));
         
          
         
          console.log(userStats);
          $(".passcodecontainer").css("display","none");
          $(".quizpopup").css("display","block");
          
        }
      } else if(userStats.location == 2 && checkPasscode!="" && checkPasscode!= null && checkPasscode == "e4HP087p"){ //if user is at second location
        if (localStorage.getItem("userStats") !== null) {

          let userStats = JSON.parse(localStorage.getItem("userStats"));

          userStats.points += 15;
          userStats.itemsCollected+=1 ;
          userStats.location+=1;
       
          localStorage.setItem("userStats", JSON.stringify(userStats));

          
          $(".passcodecontainer").css("display","none");
          $(".quizpopup").css("display","block");
          console.log(userStats);

        }
      } else if (userStats.location == 3 && checkPasscode!="" && checkPasscode!= null && checkPasscode == "90LmQrZ6"){
        if (localStorage.getItem("userStats") !== null) {
          let userStats = JSON.parse(localStorage.getItem("userStats"));

          userStats.points += 15;
          userStats.itemsCollected+=1 ;
          userStats.location+=1;
       
          localStorage.setItem("userStats", JSON.stringify(userStats));
          $(".passcodecontainer").css("display","none");
          $(".quizpopup").css("display","block");
          
         } 
      } else if (userStats.location == 4 && checkPasscode!="" && checkPasscode!= null && checkPasscode == "2acb53Yg"){
        if (localStorage.getItem("userStats") !== null) {
        let userStats = JSON.parse(localStorage.getItem("userStats"));

          userStats.points += 15;
          userStats.itemsCollected+=1 ;
          userStats.location+=1;
          
          localStorage.setItem("userStats", JSON.stringify(userStats));
          console.log(userStats)
        $(".passcodecontainer").css("display","none");
        $(".quizpopup").css("display","block");
        }
      } else {
            alert("Please enter the correct passcode");
            return;

        
        }
      
    
  });


  //MAP API
      mapboxgl.accessToken = 'pk.eyJ1IjoiZGVuMTIzamFzbWluZSIsImEiOiJja3o2c240eHkxMzlnMzFvMjhsdzh1d3MxIn0.eLnHviVq5nng0d2dtGbOlA';
      const map = new mapboxgl.Map({
          container: 'map', // container ID
          style: 'mapbox://styles/mapbox/streets-v11', // style URL
          center: [103.774612, 1.333188], // starting position [lng, lat]
          zoom: 17


          // starting zoom
          
      });
      

      // adding school icons on map
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

    


  
// function to add username inputs for friend username portion
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

 

 
//object function to store start page 
  function newPageT1 (text, button, backb){
    this.text = text;
    this.button = button;
    this.backb = backb;
  }
  

  let getStarted = new newPageT1("Help me find my items around the school! At the respective locations, there would be a  password that you need to key in to collect the  item. Each item is worth 15 points. There are also quizzes that you can answer to earn bonus points!  At the end of the game, every 50 points will earn you one spin to earn more rewards!!","Let's Get Started!","back to start");
  
 
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

    let newButton = `<a href= "schools.html"><div class="standardbutton">${buttont}</div></a>`
    console.log (newButton);
    $(".options").append(newButton);
    $(".backt").append(backtext);
    $(".fnamesect").css("display","none")
    $(".submit2").css("display","none")

};

//hide answer
$(".cross").click(function(){
  $("#ans").css("display","none");
  $(".cross").css("display","none");

});
//show anser
$(".baans").click(function(){
  $("#ans").css("display","block");
  $(".cross").css("display","block");


});

//show passcode
function showPasscode(){
  $(".passcodecontainer").css("display","flex");
  
}

 
/*SIDE MENU*/
function openMenu() {
  document.getElementById("menu").style.width = "100%";
}

function closeMenu() {
  document.getElementById("menu").style.width = "0%";
}



//dropdown function for sch html
function schDropdown(){
  document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick=function (event){
  if(!event.target.matches('.dropbtn')){
    var dropdowns= document.getElementsByClassName("dropdown-content");
    var i;
    for (i=0;i<dropdowns.length;i++){
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')){
        openDropdown.classList.remove('show');
      }
    }
  }
  }

//function object for location pages
function newLocation (textL, link, buttonL){
  this.textL = textL;
  this.link = link;
  this.buttonL = buttonL;
  
  
}

// storing content for location pages
let quizTemplate = new newLocation("Answer the quiz to earn bonus points!<br>Find the passcode (on a poster) and <br> key it in to collect  the item and submit <br> quiz answers!","","Key In Secret Passcode")

let baOne = new newLocation("I'm currently studing at the School of Business & Accountancy under the diploma <br>course of Tourism & Resort Managemenet! The School of Business & Accountancy offers 6 different courses; Common Business Programme, Accountancy, Banking & Finance, Business Studies, International Trade & Business and Tourism & Resort Management! <br> I think i left my pen there,let's go retrieve it!!")
let ba2 = new newLocation("Here are some clues about where the passcode is!<br> 1.It is near the staircase<br> 2. It is pasted on a grey surface <br> 3.It is on a slope","Reveal Answer","I'm Here")

let makanPlace = new newLocation("Here are some clues about where the next passcode is! <br> 1.It is near one of the food stores <br> 2. It is pasted on a counter","Reveal Answer","I'm Here")

let sports = new newLocation("My swimming CCA mate just texted me saying I left my bag at the Sports Complex. Lets headthere now! The Sports Complex has a swimmingpool, indoor sports hall, large field, running track, gym and more! Many sport CCAs go there for their training sessions. You should definitely join my CCA!However, if swimming is not for you, there are over 40 sports club and even more CCAs there are not sports related for you to explore!","Click Here To Find Out More","I'm Here")
let sports2 = new newLocation("Here are some clues about where the next passcode is!<br>1.near a place with lots of water<br> 2. pasted on something white","Reveal Answer", "I'm Here" )

let hangout = new newLocation("We have finally come to the last item I left on campus, my laptop charger. I remember leaving it at the Atrium. The Atrium is my favourite study and hang out spot. They are many chairs and tables there for youand your friends to study! It is also spacious and windy making it a nice environment to do your work. Most importantly there are charging ports for you if you ever need them. Definitely an essential to a Polytechnic student.","","Let's Go!")
let hangout2 = new newLocation("Here are some clues about where the next passcode is!<br> 1.It is near a row of plants <br> 2. pasted on something white","Reveal Answer","I'm Here")

let ict = new newLocation("I am currently studing in the School <br>of InfoComm Technology under the course Immersive Media! The School of InfoComm Technology offers 5 different courses; Common ICT Programme, Data Science, Cybersecurity & Digital Forensics, Immersive Media and Infomation Technology! <br> I think I left my pen there, let's go retrieve it!! ","Click Here To Find Out More","Let's Go")
let ict2 = new newLocation("Here are some clues about where the passcode is! <br> 1.It is pasted on a grey surface<br> 2.It is near the lift lobby<br> 3.There are many trees in the area","Reveal Answer","I'm Here")

let soe= new newLocation("I'm currently studying in the School of Engineering under the course<br> Marine and Offshore Technology! The School of Engineering offers 9 different courses; Common Engineering Programme, Aerospace Engineering, Automation & Mechatronic Systems, Biomedical Engineering, Electrical Engineering, Electronic & Computer Engineering, Engineering Science, Marine & Offshore Technology and Mechanical Engineering! <br> I think I left my pen there, let's go retrieve it!", "Click Here To Find Out More","Let's Go")
let soe2= new newLocation ("Here are some clues about where the passcode is!<br> 1. It is pasted on a reflective surface<br> 2.It is near the helicopter <br> 3. It is indoors","Reveal Answer","I'm Here")

let de = new newLocation("I'm currently studying in the School of Design & Environment persuing a Diploma in Design with the specialisation of Product Innovation! The School of Design & Environment offers 3 different courses; Diploma in Design, Hotel & Leisure Facilities Management and Real Estate Business! <br> I think I left my pen there, let's go retrieve it!!","Click Here To Find Out More","Let's Go")
let de2 = new newLocation("Here are some clues about where the passcode is! <br> 1.It is pasted on a white surface <br> 2. It is pasted on something rectangular <br> 3.It is considerably near the lift lobby","Reveal Answer","I'm Here")

let fms = new newLocation("I'm currently studying in the School of Film & Media Studies under the course Media Post-Production! The School of Film & Media Studies offers 3 different courses; Film, Sound & Video , Mass Communication and Media Post-Production! <br> I think I left my pen there, let's go retrieve it!!","Click Here To Find Out More","Let's Go")
let fms2 = new newLocation ("Here are some clues about where the passcode is! <br> 1.It is pasted on a white surface <br> 2. You would be at the top of the slope when at the location of where the password is pasted <br> 3.The location has the color silver","Reveal Answer","I'm Here")

let hms = new newLocation ("I'm currently studying in the School of Humanities & Social Sciences under the course Arts Business Management! The School of Humanities & Social Sciences offers 6 different courses; Arts Business Management, Chinese Media & Communications, Chinese Studies, Community Development, Early Childhood Developement & Education and lastly, Tamil Studies with Early Education. <br> I think I left my pen there, let's go retrieve it!!","Click Here To Find Out More","Let's Go")
let hms2 = new newLocation ("Here are some clues about where the passcode is! <br> 1. It is pasted on something with a lot of words <br> 2.It is outdoors <br> 3. It is pasted on something which contains infomation about NP","Reveal Answer","I'm Here")

let hs = new newLocation ("I'm currently studying in the School of Health Sciences under the Diploma of Optometry! The School of Health Sciences offers 2 different courses; Nursing and Optometry!<br> I think i left my pen there, let's go retrieve it!!","Click Here To Find Out More","Let's Go")
let hs2= new newLocation("Here are some clues about where the passcode is! <br> 1.It is pasted outside the school <br> 2. It is near the entrance of the school <br> 3.It is pasted on a surface which contains infomation","Reveal Answer","I'm Here")

let lsct= new newLocation ("I'm currently studying in the School of Life Sciences & Chemical Technology in the course Biomedical Science! The School of Life Sciences & Chemical Technology offers 5 different courses; Biomedical Science, Pharmaceutical Science, Environmental & Water Technology, Landscape Design & Horticulture and lastly, Chemical & Biomolecular Engineering! <br> I think I left my pen there, let's go retrieve it!!","Click Here For More","Let's Go")
let lsct2 = new newLocation ("Here are some clues about where the passcode is! <br> 1.It is pasted on a colorful surface<br> 2. It is pasted at the entrance of the school<br> 3. It is pasted on a surface which has a lot of words","Reveal Answer","I'm Here")


//quiz template
function quizPage(){
  $(".bubble").empty();
  $(".imageclue").empty();
  $(".reachbtn").empty();
  $(".placename").empty();
  $(".baans").css("display","none");
  

  $(".placename").css("display","none");

  $(".quiz").css("display","block");
  $(".quizT").css("display","block");
  $(".quiz2").css("display","block");
  let quizBubble = quizTemplate.textL;
  let quizBtn = quizTemplate.buttonL;

  $(".bubble").append(quizBubble);
  $(".bubble").css("height","140px")
 

  let showPasscode = `<input type="button" id="babtn" value="${quizBtn}" style="margin-top:20px" onClick="checkQuizPoints()" >`
  $(".reachbtn").append(showPasscode);
  
}



//BUSINESS SCH SECTION//


function baPage(){
  $(".bubble").empty();
  $(".passcodecontainer").css("display","none");
  $(".reachbtn").css("display","flex");
  $("#babtn").css("display","flex");
  $(".locationlink").css("display","flex");
  $(".schooldropdownmenu").css("display","none");
 

  let baSpeech = baOne.textL;
  $(".bubble").append(baSpeech);
  $(".bubble").css("height","460px");

}

function baPage2(){
  $(".bubble").empty();
  $(".baans").empty();
  $(".reachbtn").empty();

  let baSpeech2=ba2.textL;
  let baLink2 =ba2.link;
  let baBtn2 =ba2.buttonL;

  $(".bubble").append(baSpeech2).textL;
  $(".bubble").css("height","170px");

  let showHerebtnba = `<input type="button" id="babtn" value="${baBtn2}" style="margin-top:20px;" onClick="quizPage()">`
  $(".reachbtn").append(showHerebtnba);
  $(".reachbtn").css("display","flex");
  $("#babtn").css("display","flex");

  let shownewLinkba = `<u>${baLink2}</u>`
  $(".baans").append(shownewLinkba);
  
  $(".imageclue").css("display","flex");
  $("#clue").css("display","flex");

  $(".placename").append("SCHOOL OF BUSINESS & ACCOUNTANCY");
  $(".placename").css({"display":"block","margin-right":"390px"});
  $("a.baans").attr("href","#ans");

}


//ICT SCH SECTION//
function ictPage(){
  $(".bubble").empty();
  $(".passcodecontainer").css("display","none");
  $(".reachbtn").empty();
  $(".locationlink").css("display","flex");
  $(".baans").empty();

  $(".schooldropdownmenu").css("display","none");
  $(".quiz2").empty();
  $(".quizT").css("display","none");

  let ictForm = `<h3 class="top"> There is a special studio located in the ict block, what is the name of this studio?</h3>
  <input type="radio" id="ictq1opt1" value="Studio Vibes">
  <label for ="ictq1opt1">Studio Vibes</label>
  <br>
  <input type="radio" id="ictq1opt2" value="Studio 27">
  <label for ="ictq1opt2">Studio 27</label>
  <br>
  <input type="radio" id="ictq1opt3" value="The Space">
  <label for="ictq1opt3">The Space</label>
  <br>
  <h3> Which of the following is not a couse offered in the School of ICT?</h3>
  <input type="radio" id="ictq2opt1" value="Data Science">
  <label for="ictq2opt1">Date Science</label>
  <br>
  <input type="radio" id="ictq2opt2" value="Computer Science">
  <label for="ictq2opt2">Computer Science</label>
  <br>
  <input type="radio" id="ictq2opt3" value="Immersive Media">
  <label for="ictq2opt3">Immersive Media</label>
  <br>`

  $(".quiz2").append(ictForm);

  let ictSpeech = ict.textL;
  $(".bubble").append(ictSpeech);
  $(".bubble").css("height","360px","width","560px");

  let ictBtn = ict.buttonL
  let ictNextpg= `<input type="button" id="babtn" value="${ictBtn}" onClick="ictPage2()" style="background-color:#CF726B">`
  $(".reachbtn").append(ictNextpg);
  $(".reachbtn").css("display","flex");
  $("#babtn").css("display","flex");


  $(".baans").attr("href","https://www.np.edu.sg/ict/Pages/default.aspx");
  $(".baans").css("color","#793B36")
  let ictLink= ict.link;
  $(".baans").append(ictLink);

  $("#ans").attr("src","photos/schimgs/ictans.PNG");
  
}
function ictPage2(){
  $(".bubble").empty();
  $(".baans").empty();
  $(".reachbtn").empty();
  $(".placename").append("SCHOOL OF INFOCOMM TECHNOLOGY");
  $(".placename").css("margin-right","600px");
  $(".placename").css("display","block");
  $(".imageclue").empty();

  let ictSpeech2 = ict2.textL;
  let ictLink2 = ict2.link;
  let ictButton2 = ict2.buttonL;

  $(".bubble").append(ictSpeech2);
  $(".bubble").css("height","170px");

  let shownewLinkict = `<u>${ictLink2}</u>`
  $(".baans").append(shownewLinkict);

  let showHerebtnict = `<input type="button" id="babtn" value="${ictButton2}" style="margin-top:20px;" onClick="quizPage()">`
  $(".reachbtn").append(showHerebtnict);
  $(".reachbtn").css("display","flex");
  $("#babtn").css("display","flex");

  let ictImgclue= `<img src="photos/schimgs/ictsch.png" class= "baclue">`
  $(".imageclue").append(ictImgclue);
  $(".baans").attr("href","#ans");
}

//ENGINEERING//
function soePage(){
  $(".bubble").empty();
  $(".passcodecontainer").css("display","none");
  $(".reachbtn").empty();
  $(".locationlink").css("display","flex");
  $(".baans").empty();

  $(".schooldropdownmenu").css("display","none");
  $(".quiz2").empty();
  $(".quizT").css("display","none");

  let soeForm = `<h3 class="top"> True/ False: The School of Engineering is the school which offers the most amount courses amongst all schools in NP. </h3>
  <input type="radio" id="soeq1opt1" value="True">
  <label for ="soeq1opt1">True</label>
  <br>
  <input type="radio" id="soeq1opt2" value="False">
  <label for ="soeq1opt2">False</label>
  <br>
  <h3> What is the offical color of the School of Engineering?</h3>
  <input type="radio" id="soeq2opt1" value="Yellow">
  <label for="soe2opt1">Yellow</label>
  <br>
  <input type="radio" id="soeq2opt2" value="Green">
  <label for="soeq2opt2">Green</label>
  <br>
  <input type="radio" id="soeq2opt3" value="Blue">
  <label for="soeq2opt3">Blue</label>
  <br>`

  $(".quiz2").append(soeForm);

  let soeSpeech = soe.textL;
  $(".bubble").append(soeSpeech);
  $(".bubble").css("height","480px");

  let soeBtn = soe.buttonL
  let soeNextpg= `<input type="button" id="babtn" value="${soeBtn}" onClick="soePage2()" style="background-color:#CF726B">`
  $(".reachbtn").append(soeNextpg);
  $(".reachbtn").css("display","flex");
  $("#babtn").css("display","flex");


  $(".baans").attr("href","https://www.np.edu.sg/soe/Pages/default.aspx");
  $(".baans").css("color","#793B36")
  let soeLink= soe.link;
  $(".baans").append(soeLink);

  $("#ans").attr("src","photos/schimgs/soeans.PNG");
}
function soePage2(){
  $(".bubble").empty();
  $(".baans").empty();
  $(".reachbtn").empty();
  $(".placename").append("SCHOOL OF ENGINEERING");
  $(".placename").css("margin-right","600px");
  $(".placename").css("display","block");
  $(".imageclue").empty();

  let soeSpeech2 = soe2.textL;
  let soeLink2 = soe2.link;
  let soeButton2 = soe2.buttonL;

  $(".bubble").append(soeSpeech2);
  $(".bubble").css("height","170px");

  let shownewLinksoe = `<u>${soeLink2}</u>`
  $(".baans").append(shownewLinksoe);

  let showHerebtnsoe = `<input type="button" id="babtn" value="${soeButton2}" style="margin-top:20px;" onClick="quizPage()">`
  $(".reachbtn").append(showHerebtnsoe);
  $(".reachbtn").css("display","flex");
  $("#babtn").css("display","flex");

  let soeImgclue= `<img src="photos/schimgs/soesch.png" class= "baclue">`
  $(".imageclue").append(soeImgclue);
  $(".baans").attr("href","#ans");
}



//DESIGN//
function dePage(){
  $(".bubble").empty();
  $(".passcodecontainer").css("display","none");
  $(".reachbtn").empty();
  $(".locationlink").css("display","flex");
  $(".baans").empty();

  $(".schooldropdownmenu").css("display","none");
  $(".quiz2").empty();
  $(".quizT").css("display","none");

  let deForm = `<h3 class="top">What is the place that students in the design school work in? </h3>
  <input type="radio" id="deq1opt1" value="Labs">
  <label for ="soeq1opt1">Labs</label>
  <br>
  <input type="radio" id="deq1opt2" value="Studios">
  <label for ="soeq1opt2">Studios</label>
  <br>
  <input type="radio" id="deq1opt3" value="Classroom">
  <label for="deq1opt3">Classroom</label>
  <br>
  <h3> Which of the following is not a specialisation of the Diploma in Design course?</h3>
  <input type="radio" id="deq2opt1" value="Interior Design">
  <label for="de2opt1">Interior Design </label>
  <br>
  <input type="radio" id="deq2opt2" value="Architecture">
  <label for="deq2opt2">Architecture</label>
  <br>
  <input type="radio" id="deq2opt3" value="Product Design ">
  <label for="deq2opt3">Product Design</label>
  <br>`

  $(".quiz2").append(deForm);

  let deSpeech = de.textL;
  $(".bubble").append(deSpeech);
  $(".bubble").css("height","360px");

  let deBtn = de.buttonL
  let deNextpg= `<input type="button" id="babtn" value="${deBtn}" onClick="dePage2()" style="background-color:#CF726B">`
  $(".reachbtn").append(deNextpg);
  $(".reachbtn").css("display","flex");
  $("#babtn").css("display","flex");


  $(".baans").attr("href","https://www.np.edu.sg/de/Pages/default.aspx");
  $(".baans").css("color","#793B36")
  let deLink= de.link;
  $(".baans").append(deLink);

  $("#ans").attr("src","photos/schimgs/deans.PNG");
}
function dePage2(){
  $(".bubble").empty();
  $(".baans").empty();
  $(".reachbtn").empty();
  $(".placename").append("SCHOOL OF DESIGN & ENVIRONMENT");
  $(".placename").css("margin-right","600px");
  $(".placename").css("display","block");
  $(".imageclue").empty();

  let deSpeech2 =de2.textL;
  let deLink2 = de2.link;
  let deButton2 = de2.buttonL;

  $(".bubble").append(deSpeech2);
  $(".bubble").css("height","170px");

  let shownewLinkde = `<u>${deLink2}</u>`
  $(".baans").append(shownewLinkde);

  let showHerebtnde = `<input type="button" id="babtn" value="${deButton2}" style="margin-top:20px;" onClick="quizPage()">`
  $(".reachbtn").append(showHerebtnde);
  $(".reachbtn").css("display","flex");
  $("#babtn").css("display","flex");

  let deImgclue= `<img src="photos/schimgs/designsch.png" class= "baclue">`
  $(".imageclue").append(deImgclue);
  $(".baans").attr("href","#ans");
}



//FMS//
function fmsPage(){
  $(".bubble").empty();
  $(".passcodecontainer").css("display","none");
  $(".reachbtn").empty();
  $(".locationlink").css("display","flex");
  $(".baans").empty();

  $(".schooldropdownmenu").css("display","none");
  $(".quiz2").empty();
  $(".quizT").css("display","none");

  let fmsForm = `<h3 class="top">Which of the following courses is not available in the School of Film & Media Studies?  </h3>
  <input type="radio" id="fmsq1opt1" value="Film,Sound Video">
  <label for ="fmsq1opt1">Film, Sound & Video</label>
  <br>
  <input type="radio" id="fmsq1opt2" value="Mass Media Mangement">
  <label for ="fmsq1opt2">Mass Media Management</label>
  <br>
  <input type="radio" id= "fmsq1opt3" value="Mass Communication">
  <label for="fmsq1opt3">Mass Communication</label>
  <br>
  <h3> Which of the following is the offical color of the School of Film & Media Studies?  </h3>
  <input type="radio" id="fmsq2opt1" value="Light Purple">
  <label for="fms2opt1">Light Purple </label>
  <br>
  <input type="radio" id="fmsq2opt2" value="Red">
  <label for="fmsq2opt2">Red</label>
  <br>
  <input type="radio" id="fmsq2opt3" value="Dark Purple">
  <label for="fmsq2opt3">Dark Purple</label>
  <br>`

  $(".quiz2").append(fmsForm);

  let fmsSpeech = fms.textL;
  $(".bubble").append(fmsSpeech);
  $(".bubble").css("height","320px");

  let fmsBtn = fms.buttonL
  let fmsNextpg= `<input type="button" id="babtn" value="${fmsBtn}" onClick="fmsPage2()" style="background-color:#CF726B">`
  $(".reachbtn").append(fmsNextpg);
  $(".reachbtn").css("display","flex");
  $("#babtn").css("display","flex");


  $(".baans").attr("href","https://www.np.edu.sg/fms/Pages/default.aspx");
  $(".baans").css("color","#793B36")
  let fmsLink= fms.link;
  $(".baans").append(fmsLink);
  

  $("#ans").attr("src","photos/schimgs/fmsans.PNG");
}
function fmsPage2(){
  $(".bubble").empty();
  $(".baans").empty();
  $(".reachbtn").empty();
  $(".placename").append("SCHOOL OF FILM & MEDIA STUDIES");
  $(".placename").css("margin-right","600px");
  $(".placename").css("display","block");
  $(".imageclue").empty();

  let fmsSpeech2 =fms2.textL;
  let fmsLink2 = fms2.link;
  let fmsButton2 = fms2.buttonL;

  $(".bubble").append(fmsSpeech2);
  $(".bubble").css("height","240px");

  let shownewLinkfms = `<u>${fmsLink2}</u>`
  $(".baans").append(shownewLinkfms);

  let showHerebtnfms = `<input type="button" id="babtn" value="${fmsButton2}" style="margin-top:20px;" onClick="quizPage()">`
  $(".reachbtn").append(showHerebtnfms);
  $(".reachbtn").css("display","flex");
  $("#babtn").css("display","flex");

  let fmsImgclue= `<img src="photos/schimgs/fmssch.png" class= "baclue">`
  $(".imageclue").append(fmsImgclue);
  $(".baans").attr("href","#ans");
}

//HMS//
function hmsPage(){
  $(".bubble").empty();
  $(".passcodecontainer").css("display","none");
  $(".reachbtn").empty();
  $(".locationlink").css("display","flex");
  $(".baans").empty();

  $(".schooldropdownmenu").css("display","none");
  $(".quiz2").empty();
  $(".quizT").css("display","none");

  let hmsForm = `<h3 class="top">What is the tagline for the School of Humanities & Social Sciences</h3>
  <input type="radio" id="hmsq1opt1" value="Community At Our Hands">
  <label for ="hmsq1opt1">Community At Our Hands</label>
  <br>
  <input type="radio" id="hmsq1opt2" value="Think People">
  <label for ="hmsq1opt2">Think People</label>
  <br>
  <input type="radio" id= "hmsq1opt3" value="People Of Passion">
  <label for="hmsq1opt3">People Of Passion</label>
  <br>
  <h3> How many courses are available at the School of Humanities & Social Sciences? </h3>
  <input type="radio" id="hmsq2opt1" value="3">
  <label for="hms2opt1">3 </label>
  <br>
  <input type="radio" id="hmsq2opt2" value="6">
  <label for="hmsq2opt2">6</label>
  <br>
  <input type="radio" id="hmsq2opt3" value="5">
  <label for="hmsq2opt3">5</label>
  <br>`

  $(".quiz2").append(hmsForm);

  let hmsSpeech = hms.textL;
  $(".bubble").append(hmsSpeech);
  $(".bubble").css("height","450px");

  let hmsBtn = hms.buttonL
  let hmsNextpg= `<input type="button" id="babtn" value="${hmsBtn}" onClick="hmsPage2()" style="background-color:#CF726B">`
  $(".reachbtn").append(hmsNextpg);
  $(".reachbtn").css("display","flex");
  $("#babtn").css("display","flex");


  $(".baans").attr("href","https://www.np.edu.sg/hms/Pages/default.aspx");
  $(".baans").css("color","#793B36")
  let hmsLink= hms.link;
  $(".baans").append(hmsLink);

  $("#ans").attr("src","photos/schimgs/hmsans.PNG");
}
function hmsPage2(){
  $(".bubble").empty();
  $(".baans").empty();
  $(".reachbtn").empty();
  $(".placename").append("SCHOOL OF HUMANITIES & SOCIAL SCIENCES");
  $(".placename").css("margin-right","600px");
  $(".placename").css("display","block");
  $(".imageclue").empty();

  let hmsSpeech2 =hms2.textL;
  let hmsLink2 = hms2.link;
  let hmsButton2 = hms2.buttonL;

  $(".bubble").append(hmsSpeech2);
  $(".bubble").css("height","250px");

  let shownewLinkhms = `<u>${hmsLink2}</u>`
  $(".baans").append(shownewLinkhms);

  let showHerebtnhms = `<input type="button" id="babtn" value="${hmsButton2}" style="margin-top:20px;" onClick="quizPage()">`
  $(".reachbtn").append(showHerebtnhms);
  $(".reachbtn").css("display","flex");
  $("#babtn").css("display","flex");

  let hmsImgclue= `<img src="photos/schimgs/hmssch.png" class= "baclue">`
  $(".imageclue").append(hmsImgclue);
  $(".baans").attr("href","#ans");
}


//HEALTH SCIENCES//
function hsPage(){
  $(".bubble").empty();
  $(".passcodecontainer").css("display","none");
  $(".reachbtn").empty();
  $(".locationlink").css("display","flex");
  $(".baans").empty();

  $(".schooldropdownmenu").css("display","none");
  $(".quiz2").empty();
  $(".quizT").css("display","none");

  let hsForm = `<h3 class="top">What is the tagline for the School of Health Sciences</h3>
  <input type="radio" id="hsq1opt1" value="Humanity In Our Hands">
  <label for ="hsq1opt1">Humanity In Our Hands</label>
  <br>
  <input type="radio" id="hsq1opt2" value="Care To Heal">
  <label for ="hsq1opt2">Care To Heal</label>
  <br>
  <input type="radio" id= "hsq1opt3" value="Passion To Touch Lives">
  <label for="hsq1opt3">Passion To Touch Lives</label>
  <br>
  <h3> What is the nearest school to the School of Health Scienes? </h3>
  <input type="radio" id="hsq2opt1" value="School of Business & Accountancy">
  <label for="hs2opt1">School of Business & Accountancy</label>
  <br>
  <input type="radio" id="hsq2opt2" value="School of Life Sciences & Chemical Technology">
  <label for="hsq2opt2">School of Life Sciences & Chemical Technology</label>
  <br>
  <input type="radio" id="hsq2opt3" value="School of Humanities & Social Sciences">
  <label for="hsq2opt3">School of Humanities & Social Sciences</label>
  <br>`

  $(".quiz2").append(hsForm);

  let hsSpeech = hs.textL;
  $(".bubble").append(hsSpeech);
  $(".bubble").css("height","240px");

  let hsBtn = hs.buttonL
  let hsNextpg= `<input type="button" id="babtn" value="${hsBtn}" onClick="hsPage2()" style="background-color:#CF726B">`
  $(".reachbtn").append(hsNextpg);
  $(".reachbtn").css("display","flex");
  $("#babtn").css("display","flex");


  $(".baans").attr("href","https://www.np.edu.sg/hs/Pages/default.aspx");
  $(".baans").css("color","#793B36")
  let hsLink= hs.link;
  $(".baans").append(hsLink);

  $("#ans").attr("src","photos/schimgs/hsans.PNG");
}
function hsPage2(){
  $(".bubble").empty();
  $(".baans").empty();
  $(".reachbtn").empty();
  $(".placename").append("SCHOOL OF HEALTH SCIENCES");
  $(".placename").css("margin-right","600px");
  $(".placename").css("display","block");
  $(".imageclue").empty();

  let hsSpeech2 =hs2.textL;
  let hsLink2 = hs2.link;
  let hsButton2 = hs2.buttonL;

  $(".bubble").append(hsSpeech2);
  $(".bubble").css("height","200px");

  let shownewLinkhs = `<u>${hsLink2}</u>`
  $(".baans").append(shownewLinkhs);

  let showHerebtnhs = `<input type="button" id="babtn" value="${hsButton2}" style="margin-top:20px;" onClick="quizPage()">`
  $(".reachbtn").append(showHerebtnhs);
  $(".reachbtn").css("display","flex");
  $("#babtn").css("display","flex");

  let hsImgclue= `<img src="photos/schimgs/hssch.png" class= "baclue">`
  $(".imageclue").append(hsImgclue);
  $(".baans").attr("href","#ans");
}


//*lIFE SCIENCES & CHEMICAL TECHNOLOGY*//
function lsctPage(){
  $(".bubble").empty();
  $(".passcodecontainer").css("display","none");
  $(".reachbtn").empty();
  $(".locationlink").css("display","flex");
  $(".baans").empty();

  $(".schooldropdownmenu").css("display","none");
  $(".quiz2").empty();
  $(".quizT").css("display","none");

  let lsctForm = `<h3 class="top">How many courses does the School of Life Sciences & Chemical Technology offer? </h3>
  <input type="radio" id="lsctq1opt1" value="5">
  <label for ="lsctq1opt1">5</label>
  <br>
  <input type="radio" id="lsctq1opt2" value="2">
  <label for ="lsctq1opt2">2</label>
  <br>
  <input type="radio" id= "lsctq1opt3" value="6">
  <label for="lsctq1opt3">6</label>
  <br>
  <h3> What is offical color of the School of Life Sciences & Chemical Technology </h3>
  <input type="radio" id="lsctq2opt1" value="Light Green">
  <label for="lsct2opt1">Light Green</label>
  <br>
  <input type="radio" id="lsctq2opt2" value="Dark Green">
  <label for="lsctq2opt2">Dark Green</label>
  <br>
  <input type="radio" id="lsctq2opt3" value="Orange">
  <label for="lsctq2opt3">Orange</label>
  <br>`

  $(".quiz2").append(lsctForm);

  let lsctSpeech = lsct.textL;
  $(".bubble").append(lsctSpeech);
  $(".bubble").css("height","420px");

  let lsctBtn = lsct.buttonL
  let lsctNextpg= `<input type="button" id="babtn" value="${lsctBtn}" onClick="lsctPage2()" style="background-color:#CF726B">`
  $(".reachbtn").append(lsctNextpg);
  $(".reachbtn").css("display","flex");
  $("#babtn").css("display","flex");


  $(".baans").attr("href","https://www.np.edu.sg/lsct/Pages/default.aspx");
  $(".baans").css("color","#793B36")
  let lsctLink= hs.link;
  $(".baans").append(lsctLink);

  $("#ans").attr("src","photos/schimgs/lsctans.PNG");
}
function lsctPage2(){
  $(".bubble").empty();
  $(".baans").empty();
  $(".reachbtn").empty();
  $(".placename").append("SCHOOL OF LIFE SCIENCES & CHEMICAL TECHNOLOGY ");
  $(".placename").css("margin-right","600px");
  $(".placename").css("display","block");
  $(".imageclue").empty();

  let lsctSpeech2 =lsct2.textL;
  let lsctLink2 = lsct2.link;
  let lsctButton2 = lsct2.buttonL;

  $(".bubble").append(lsctSpeech2);
  $(".bubble").css("height","240px");

  let shownewLinklsct = `<u>${lsctLink2}</u>`
  $(".baans").append(shownewLinklsct);

  let showHerebtnlsct = `<input type="button" id="babtn" value="${lsctButton2}" style="margin-top:20px;" onClick="quizPage()">`
  $(".reachbtn").append(showHerebtnlsct);
  $(".reachbtn").css("display","flex");
  $("#babtn").css("display","flex");

  let lsctImgclue= `<img src="photos/schimgs/lsct.png" class= "baclue">`
  $(".imageclue").append(lsctImgclue);
  $(".baans").attr("href","#ans");
}

//makan place location
function refreshPageMakanPlace(){
  
  $(".bubble").empty();
  $(".reachbtn").empty();
  $(".placename").append("MAKAN PLACE");
  $(".placename").css("display","block");
  $(".placename").css("margin-right","460px")
  
  let img = `<img src="photos/mp.png" class="baclue" alt="NP Makan Place">`
  $(".imageclue").append(img);

  let btn = makanPlace.buttonL
  let newBtn = `<input type="button" id="babtn" value="${btn}" style="margin-top:20px;"onClick="quizPage()" >`
  $(".reachbtn").append(newBtn);

  let speech = makanPlace.textL;
  $(".bubble").append(speech);
  $(".bubble").css("height","150px")

  let link = makanPlace.link;
  $(".baans u").append(link);

}


//sports complex location
function refreshPageSports1(){
  $(".bg").css("display","none");
  $(".passcodecontainer").css("display","none");
  $(".quizpopup").css("display","none");
  $(".popupnextbtn").empty();
  $(".popupnextbtn").append(`<input type="button" class="popupbtn" value="Next" onClick="collectItem3()">`)
  $(".bubble").empty();
  $(".reachbtn").empty();
  $(".baans").css("display","flex");

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

  $(".baans").empty();
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

    let newInput = `<input type="button" id="babtn" value="${butt0n}" style="margin-top:20px;"onClick = "quizPage()">`
    $(".reachbtn").append(newInput);

    let newText = `<u>${textL}</u>`
    $(".baans").append(newText);

    
    let newImg = `<img src="photos/SC.jpg" class= "baclue" alt="NP Sports Complex">`
    $(".imageclue").append(newImg)

    $(".placename").append("SPORTS COMPLEX");
    $(".placename").css({"display":"block","margin-right":"390px"});

    $(".cross").css("top","63%")



}



// Atrium location

function refreshPageHangout(){
  $(".popupnextbtn").empty();
  $(".popupnextbtn").append(`<input type="button" class="popupbtn" value="Next" onClick="collectItem4()">`)
  $(".quizpopup").css("display","none");
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
  
  let btnt = hangout2.buttonL

  $(".bubble").append(speechb);
  $(".bubble").css("height","150px");
  
  
  
  $(".baans").css("display","flex");

  let newInput3 = `<input type="button" id="babtn" value="${btnt}" style="margin-top:20px;"  onClick="quizPage()">`
  $(".reachbtn").append(newInput3);
  
  $(".quiz").empty();
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
  

}










//collection of items pages


function collectItem2(){
  $(".bg").css("display","block");
  $(".cross1").css("display","block");
}
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
  let newCross = `<div class="cross1"></div>`
  $(".bg").append(newCross);
  $(".prizeText").empty();
  $(".prizeText").append("YOU HAVE COLLECTED THE CHARGER!");
  $(".cross1").css("display","block");
  $(".itemimg").attr("src","photos/charger.PNG");
  $(".itemimg").css("top","13%")
  $(".bg").css("display","block");
  $(".amt").empty();
  $(".amt").append("4/4");

}





//side nav menu functions
//show checklist
$(".checklist").click(function(numItemsCollected) {
  $(".endbtn").css("display","block");

  $(".CLcontent").css("display","block");
  $(".two").hide();
  $(".three").hide();
  if (localStorage.getItem("userStats") !== null) {

    let userStats = JSON.parse(localStorage.getItem("userStats"));
    let value = userStats.itemsCollected 
    console.log(value)
    
    let j=0;
    while(j < value){
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
 
  $(".two h3").css({"position":"relative",
  "top":"0%","left":"0%"});
  $(".two hr").css({"position":"relative",
  "top":"0%","left":"0%"});
  $(".menuitems").css({"top":"25%"});
  $(".endbtn").css("display","none");
  $("a.endbtn ").css("display","block");
  
  }

//showing map
$(".mapicon").click(function(){
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
  $(".menuitems").css({"top":"0%","position":"absolute"});
  $(".two h3").css({"position":"absolute",
  "top":"80%","left":"65px"});
  $(".two hr").css({"position":"absolute",
  "top":"165%","left":"30px"});

});






// function to check quiz marks
function checkQuizPoints(){
  let userStats = JSON.parse(localStorage.getItem("userStats"));
 
  if(userStats.location==1){
    let inputID = document.querySelector(".quiz2 input").id;
    
    let quizPoints = 0;

    if(inputID == "baq1opt1"){
     
        $(".quiz2 input").each(function(){
          let option = $(this).attr("id") ;
          
          let checkedOption = document.getElementById(option).checked
          if (checkedOption == true){
      
            if (document.getElementById(option).value == "Munch"){
              quizPoints += 5
        
          } else if(document.getElementById(option).value == "6"){
              quizPoints += 5
            } 
    
          }
        });

      } else if(inputID == "ictq1opt1"){
          
          $(".quiz2 input").each(function(){
          let option = $(this).attr("id") ;
          
          let checkedOption = document.getElementById(option).checked
          
          if (checkedOption == true){
            console.log((document.getElementById(option).value));
            if (document.getElementById(option).value == "Studio 27"){
              quizPoints += 5
              console.log("hi")
      
          } else if(document.getElementById(option).value == "Computer Science"){
              quizPoints += 5
          } 
  
        }
      });
  } else if(inputID == "soeq1opt1"){
  
      $(".quiz2 input").each(function(){
        let option = $(this).attr("id") ;
       
        let checkedOption = document.getElementById(option).checked
        if (checkedOption == true){
    
          if (document.getElementById(option).value == "True"){
            quizPoints += 5
      
        } else if(document.getElementById(option).value == "Blue"){
            quizPoints += 5
          } 
  
        }
      });

  }  else if(inputID == "deq1opt1"){
   
      $(".quiz2 input").each(function(){
        let option = $(this).attr("id") ;
      
        let checkedOption = document.getElementById(option).checked
        if (checkedOption == true){
    
          if (document.getElementById(option).value == "Studios"){
            quizPoints += 5
      
        } else if(document.getElementById(option).value == "Interior Design"){
            quizPoints += 5
          } 
  
        }
      });
     
  } else if(inputID == "fmsq1opt1"){
    console.log("hi")
      $(".quiz2 input").each(function(){
        let option = $(this).attr("id") ;
   
        let checkedOption = document.getElementById(option).checked
        if (checkedOption == true){
    
          if (document.getElementById(option).value == "Mass Media Mangement"){
            quizPoints += 5
      
        } else if(document.getElementById(option).value == "Light Purple"){
            quizPoints += 5
          } 
  
        }
      });

  } else if(inputID == "hmsq1opt1"){
    
      $(".quiz2 input").each(function(){
        let option = $(this).attr("id") ;
       
        let checkedOption = document.getElementById(option).checked
        if (checkedOption == true){
    
          if (document.getElementById(option).value == "Think People"){
            quizPoints += 5
      
        } else if(document.getElementById(option).value == "6"){
            quizPoints += 5
          } 
  
        }
      });

  } else if(inputID == "hsq1opt1"){
    
      $(".quiz2 input").each(function(){
        let option = $(this).attr("id") ;
        
        let checkedOption = document.getElementById(option).checked
        if (checkedOption == true){
    
          if (document.getElementById(option).value == "Passion To Touch Lives"){
            quizPoints += 5
      
        } else if(document.getElementById(option).value == "School of Life Sciences & Chemical Technology"){
            quizPoints += 5
          } 
  
        }
      });

  } else if(inputID == "lsctq1opt1"){
   
      $(".quiz2 input").each(function(){
        let option = $(this).attr("id") ;
     
        let checkedOption = document.getElementById(option).checked
        if (checkedOption == true){
    
          if (document.getElementById(option).value == "5"){
            quizPoints += 5
      
        } else if(document.getElementById(option).value == "Orange"){
            quizPoints += 5
          } 
  
        }
      });
  } 

  showPasscode();
  userStats.points += quizPoints ;
  localStorage.setItem("userStats", JSON.stringify(userStats));
  console.log(userStats);
  document.getElementById("quizresult").innerHTML = `${quizPoints}/10`;
  let points4ThisLocation = 15+ quizPoints;
 
  document.getElementById("totalpoints4sect").innerHTML = `${points4ThisLocation}` ;

    
        
  
} 
  else if(userStats.location==2){
      let quizPoints = 0;
 
      $(".quiz input").each(function(){
        let option = $(this).attr("id") ;
      
      let checkedOption = document.getElementById(option).checked
      
      
      if (checkedOption == true){
        
        if (document.getElementById(option).value == "13"){
          quizPoints += 5
          
        } else if(document.getElementById(option).value == "Subway"){
          quizPoints += 5
          
        } 
      
      }
    });
    showPasscode();
    userStats.points += quizPoints ;
    localStorage.setItem("userStats", JSON.stringify(userStats));
    console.log(userStats);
    document.getElementById("quizresult").innerHTML = `${quizPoints}/10`;
    let points4ThisLocation = 15+ quizPoints;
  
    document.getElementById("totalpoints4sect").innerHTML = `${points4ThisLocation}` ;
      
          
    
  } 

  
  
 
  else if(userStats.location==3){
    let quizPoints = 0;
      $(".quiz input").each(function(){
        let option = $(this).attr("id") ;
   
      let checkedOption = document.getElementById(option).checked
      
      
      if (checkedOption == true){
        
        if (document.getElementById(option).value == "yes"){
          quizPoints += 5
         
        } else if(document.getElementById(option).value == "8"){
          quizPoints += 5
         
        } 
        console.log(quizPoints);
      }
    });
    showPasscode();
    userStats.points += quizPoints ;
    localStorage.setItem("userStats", JSON.stringify(userStats));
    console.log(userStats);
    document.getElementById("quizresult").innerHTML = `${quizPoints}/10`
    let points4ThisLocation = 15+ quizPoints;
    document.getElementById("totalpoints4sect").innerHTML = `${points4ThisLocation}` ;

  } 

  else if(userStats.location==4){
    
    let quizPoints = 0;
    $(".quiz input").each(function(){
      let option = $(this).attr("id") ;
    
    let checkedOption = document.getElementById(option).checked
    
    
    if (checkedOption == true){
      if (document.getElementById(option).value == "5"){
        quizPoints += 5
        
      } else if(document.getElementById(option).value == "25"){
        quizPoints += 5
        
      } 
     
    }
  });
  showPasscode();
  
  userStats.points += quizPoints ;
  localStorage.setItem("userStats", JSON.stringify(userStats));
  console.log(userStats);
  document.getElementById("quizresult").innerHTML = `${quizPoints}/10`
  let points4ThisLocation = 15+ quizPoints;
  document.getElementById("totalpoints4sect").innerHTML = `${points4ThisLocation}`

  //putting the final total points in the end page 
  
  
  
} 
 
}


$(".endpgbtn").click(function(){
  $("#scorepopup").css("display","flex");
  });

function lastPage(text){
  this.text=text;
}
let endPg= new lastPage("To show my gratitude for your help, here are some prizes just for you! Please show this screeenshot to a staff at the location below to collect your prizes")

function endPage(){
  $(".bubble").empty();
  $(".scorepopup").empty();
  $(".itemsdisplay").css("display","none");
  $(".nextpg").empty();
  $(".earned").css("display","none");
  $(".itemcollectedtext").css("display","none");
  $(".charger").css("display","none");
  $(".lunchbox").css("display","none");
  $(".bag").css("display","none");

  let endPgbtn = endPg.button;
  let goHomebtn = `<a href="index.html" value="${endPgbtn}" class="endpgbtn" style="color:#FFFBE0">Home</a>`
  $(".nextpg").append(goHomebtn);

  let endPgbubble = endPg.text;
  $(".bubble").append(endPgbubble);
  $(".bubble").css("height","240px")

  $(".location").css("display","block");
  $(".prizestitle").css("display","block");
  $(".prizescollected").css("display","block");
  $(".titleloc").css("display","block");
  $(".footerimg").css("display","flex;")
  
}

