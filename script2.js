//MENU//
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
  
  let baOne = new newLocation("I'm currently studing at the School of Business & accountancy under the diploma course of Tourism & Resort Managemenet! The School of Business & Accountancy offers 6 different courses; Common Business Programme, Accountancy, Banking & Finance, Business Studies, International Trade & Business and Tourism & Resort Management! <br> I think i left my pen there,let's go retrieve it!!")
  let ba2 = new newLocation("Here are some clues about where the passcode is!<br> 1.It is near the staircase<br> 2. It is pasted on a grey surface <br> 3.It is on a slope","Reveal Answer","I'm Here")
  
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
  
  
  //BUSINESS SCH SECTION//
  function baPage(){
    $(".bubble").empty();
    $(".passcodecontainer").css("display","none");
    $(".reachbtn").css("display","flex");
    $("#babtn").css("display","flex");
    $(".locationlink").css("display","flex");
  
  
  
    $(".schooldropdownmenu").css("display","none");
    $(".quiz").css("display","none");
    $(".quizT").css("display","none");
    $(".quiz").empty();
  
    let baSpeech = baOne.textL;
    $(".bubble").append(baSpeech);
    $(".bubble").css("height","600px;")
  
  }
  
  function baPage2(){
    $(".bubble").empty();
    $(".imageclue").css("display","flex");
    $(".baans").empty();
    $("#babtn").empty();
  
    let baSpeech2=ba2.textL;
    let baButton2 =ba2.buttonL;
    let baLink2 =ba2.link;
  
    $(".bubble").append(baSpeech2).textL;
    $(".bubble").css("height","180px;")
  
    let showPwcontainerba = `<input type="button" id="babtn" value=${baButton2}" style="margin-top:20px;" onClick="bapageQuiz()">`
    $(".reachbtn").append(showPwcontainerba);
  
    let shownewLinkba = `<u>${baLink2}</u>`
    $(".baans").append(shownewLinkba);
  
  }

//ICT SCH SECTION//
function ictPage(){
  $(".bubble").empty();
  $(".passcodecontainer").css("display","none");
  $(".reachbtn").empty();
  $(".locationlink").css("display","flex");
  $(".baans").empty();

  $(".schooldropdownmenu").css("display","none");
  $(".quiz").empty();
  $(".quizT").empty();

  let ictForm = `<h3 class="top"> There is a special studio located in the ict block, what is the name of this studio?</h3>
  <input type="radio" id="ictq1opt1" value="Studio Vibes">
  <label for ="ictq1opt1">Studio Vibes</label>
  <br>
  <input type="radio" id"ictq1opt2" value="Studio 27">
  <label for ="ictq1opt2">Studio 27</label>
  <br>
  <input type="radio" id-"ictq1opt3" value="The Space">
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

  $(".quiz").append(ictForm);

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

  let showHerebtnict = `<input type="button" id="babtn" value="${ictButton2}" style="margin-top:20px;" onClick="ictQuizpage()">`
  $(".reachbtn").append(showHerebtnict);
  $(".reachbtn").css("display","flex");
  $("#babtn").css("display","flex");

  let ictImgclue= `<img src="photos/ictsch.png" class= "baclue">`
  $(".imageclue").append(ictImgclue);

}
function ictQuizpage(){
  $(".bubble").empty();
  $(".imageclue").empty();
  $(".reachbtn").empty();
  $(".placename").empty();

  $(".quiz").css("display","block");
  $(".quizT").css("display","block");

  let ictQuizbubble = quizTemplate.textL;
  let ictQuizbtn = quizTemplate.buttonL;

  $(".bubble").append(ictQuizbubble);
  $(".bubble").css("height","140px");

  let showPasscodeict = `<input type="button" id="babtn" value="${ictQuizbtn}" style="margin-top:20px" onClick="showPasscode()" >`
  $(".reachbtn").append(showPasscodeict);
  $(".reachbtn").css("display","flex");
  $("#babtn").css("display","flex");
}


//ENGINEERING//
function soePage(){
  $(".bubble").empty();
  $(".passcodecontainer").css("display","none");
  $(".reachbtn").empty();
  $(".locationlink").css("display","flex");
  $(".baans").empty();

  $(".schooldropdownmenu").css("display","none");
  $(".quiz").empty();
  $(".quizT").empty();

  let soeForm = `<h3 class="top"> True/ False: The School of Engineering is the school which offers the most amount courses amongst all schools in NP. </h3>
  <input type="radio" id="soeq1opt1" value="True">
  <label for ="soeq1opt1">True</label>
  <br>
  <input type="radio" id"soeq1opt2" value="False">
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

  $(".quiz").append(soeForm);

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

  let showHerebtnsoe = `<input type="button" id="babtn" value="${soeButton2}" style="margin-top:20px;" onClick="soeQuizpage()">`
  $(".reachbtn").append(showHerebtnsoe);
  $(".reachbtn").css("display","flex");
  $("#babtn").css("display","flex");

  let soeImgclue= `<img src="photos/soesch.png" class= "baclue">`
  $(".imageclue").append(soeImgclue);
}
function soeQuizpage(){
  $(".bubble").empty();
  $(".imageclue").empty();
  $(".reachbtn").empty();
  $(".placename").empty();

  $(".quiz").css("display","block");
  $(".quizT").css("display","block");

  let soeQuizbubble = quizTemplate.textL;
  let soeQuizbtn = quizTemplate.buttonL;

  $(".bubble").append(soeQuizbubble);
  $(".bubble").css("height","140px");

  let showPasscodesoe = `<input type="button" id="babtn" value="${soeQuizbtn}" style="margin-top:20px" onClick="showPasscode()" >`
  $(".reachbtn").append(showPasscodesoe);
  $(".reachbtn").css("display","flex");
  $("#babtn").css("display","flex");
}


//DESIGN//
function dePage(){
  $(".bubble").empty();
  $(".passcodecontainer").css("display","none");
  $(".reachbtn").empty();
  $(".locationlink").css("display","flex");
  $(".baans").empty();

  $(".schooldropdownmenu").css("display","none");
  $(".quiz").empty();
  $(".quizT").empty();

  let deForm = `<h3 class="top">What is the place that students in the design school work in? </h3>
  <input type="radio" id="deq1opt1" value="Labs">
  <label for ="soeq1opt1">Labs</label>
  <br>
  <input type="radio" id"deq1opt2" value="Studios">
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

  $(".quiz").append(deForm);

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

  let showHerebtnde = `<input type="button" id="babtn" value="${deButton2}" style="margin-top:20px;" onClick="deQuizpage()">`
  $(".reachbtn").append(showHerebtnde);
  $(".reachbtn").css("display","flex");
  $("#babtn").css("display","flex");

  let deImgclue= `<img src="photos/designsch.png" class= "baclue">`
  $(".imageclue").append(deImgclue);
}
function deQuizpage(){
  $(".bubble").empty();
  $(".imageclue").empty();
  $(".reachbtn").empty();
  $(".placename").empty();

  $(".quiz").css("display","block");
  $(".quizT").css("display","block");

  let deQuizbubble = quizTemplate.textL;
  let deQuizbtn = quizTemplate.buttonL;

  $(".bubble").append(deQuizbubble);
  $(".bubble").css("height","140px");

  let showPasscodede = `<input type="button" id="babtn" value="${deQuizbtn}" style="margin-top:20px" onClick="showPasscode()" >`
  $(".reachbtn").append(showPasscodede);
  $(".reachbtn").css("display","flex");
  $("#babtn").css("display","flex");
}



//FMS//
function fmsPage(){
  $(".bubble").empty();
  $(".passcodecontainer").css("display","none");
  $(".reachbtn").empty();
  $(".locationlink").css("display","flex");
  $(".baans").empty();

  $(".schooldropdownmenu").css("display","none");
  $(".quiz").empty();
  $(".quizT").empty();

  let fmsForm = `<h3 class="top">Which of the following courses is not available in the School of Film & Media Studies?  </h3>
  <input type="radio" id="fmsq1opt1" value="Film,Sound Video">
  <label for ="fmsq1opt1">Film, Sound & Video</label>
  <br>
  <input type="radio" id"fmsq1opt2" value="Mass Media Mangement">
  <label for ="fmsq1opt2">Mass Media Management</label>
  <br>
  <input type="radio" id= "fmsq1opt3" value="Mass Communication">
  <label for="fmsq1opt3">Mass Communication</label>
  <br>
  <h3> Which of the following is the offical color of the School of Film & Media Studies? </h3>
  <input type="radio" id="fmsq2opt1" value="Light Purple">
  <label for="fms2opt1">Light Purple </label>
  <br>
  <input type="radio" id="fmsq2opt2" value="Red">
  <label for="fmsq2opt2">Red</label>
  <br>
  <input type="radio" id="fmsq2opt3" value="Dark Purple">
  <label for="fmsq2opt3">Dark Purple</label>
  <br>`

  $(".quiz").append(fmsForm);

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

  let showHerebtnfms = `<input type="button" id="babtn" value="${fmsButton2}" style="margin-top:20px;" onClick="fmsQuizpage()">`
  $(".reachbtn").append(showHerebtnfms);
  $(".reachbtn").css("display","flex");
  $("#babtn").css("display","flex");

  let fmsImgclue= `<img src="photos/fmssch.png" class= "baclue">`
  $(".imageclue").append(fmsImgclue);
}
function fmsQuizpage(){
  $(".bubble").empty();
  $(".imageclue").empty();
  $(".reachbtn").empty();
  $(".placename").empty();

  $(".quiz").css("display","block");
  $(".quizT").css("display","block");

  let fmsQuizbubble = quizTemplate.textL;
  let fmsQuizbtn = quizTemplate.buttonL;

  $(".bubble").append(fmsQuizbubble);
  $(".bubble").css("height","140px");

  let showPasscodefms = `<input type="button" id="babtn" value="${fmsQuizbtn}" style="margin-top:20px" onClick="showPasscode()" >`
  $(".reachbtn").append(showPasscodefms);
  $(".reachbtn").css("display","flex");
  $("#babtn").css("display","flex");
}


//HMS//
function hmsPage(){
  $(".bubble").empty();
  $(".passcodecontainer").css("display","none");
  $(".reachbtn").empty();
  $(".locationlink").css("display","flex");
  $(".baans").empty();

  $(".schooldropdownmenu").css("display","none");
  $(".quiz").empty();
  $(".quizT").empty();

  let hmsForm = `<h3 class="top">What is the tagline for the School of Humanities & Social Sciences</h3>
  <input type="radio" id="hmsq1opt1" value="Community At Our Hands">
  <label for ="hmsq1opt1">Community At Our Hands</label>
  <br>
  <input type="radio" id"hmsq1opt2" value="Think People">
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

  $(".quiz").append(hmsForm);

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

  let showHerebtnhms = `<input type="button" id="babtn" value="${hmsButton2}" style="margin-top:20px;" onClick="hmsQuizpage()">`
  $(".reachbtn").append(showHerebtnhms);
  $(".reachbtn").css("display","flex");
  $("#babtn").css("display","flex");

  let hmsImgclue= `<img src="photos/hmssch.png" class= "baclue">`
  $(".imageclue").append(hmsImgclue);
}
function hmsQuizpage(){
  $(".bubble").empty();
  $(".imageclue").empty();
  $(".reachbtn").empty();
  $(".placename").empty();

  $(".quiz").css("display","block");
  $(".quizT").css("display","block");

  let hmsQuizbubble = quizTemplate.textL;
  let hmsQuizbtn = quizTemplate.buttonL;

  $(".bubble").append(hmsQuizbubble);
  $(".bubble").css("height","140px");

  let showPasscodehms = `<input type="button" id="babtn" value="${hmsQuizbtn}" style="margin-top:20px" onClick="showPasscode()" >`
  $(".reachbtn").append(showPasscodehms);
  $(".reachbtn").css("display","flex");
  $("#babtn").css("display","flex");
}


//HEALTH SCIENCES//
function hsPage(){
  $(".bubble").empty();
  $(".passcodecontainer").css("display","none");
  $(".reachbtn").empty();
  $(".locationlink").css("display","flex");
  $(".baans").empty();

  $(".schooldropdownmenu").css("display","none");
  $(".quiz").empty();
  $(".quizT").empty();

  let hsForm = `<h3 class="top">What is the tagline for the School of Health Sciences</h3>
  <input type="radio" id="hsq1opt1" value="Humanity In Our Hands">
  <label for ="hsq1opt1">Humanity In Our Hands</label>
  <br>
  <input type="radio" id"hsq1opt2" value="Care To Heal">
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

  $(".quiz").append(hsForm);

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

  let showHerebtnhs = `<input type="button" id="babtn" value="${hsButton2}" style="margin-top:20px;" onClick="hsQuizpage()">`
  $(".reachbtn").append(showHerebtnhs);
  $(".reachbtn").css("display","flex");
  $("#babtn").css("display","flex");

  let hsImgclue= `<img src="photos/hssch.png" class= "baclue">`
  $(".imageclue").append(hsImgclue);
}
function hsQuizpage(){
  $(".bubble").empty();
  $(".imageclue").empty();
  $(".reachbtn").empty();
  $(".placename").empty();

  $(".quiz").css("display","block");
  $(".quizT").css("display","block");

  let hsQuizbubble = quizTemplate.textL;
  let hsQuizbtn = quizTemplate.buttonL;

  $(".bubble").append(hsQuizbubble);
  $(".bubble").css("height","140px");

  let showPasscodehs = `<input type="button" id="babtn" value="${hsQuizbtn}" style="margin-top:20px" onClick="showPasscode()" >`
  $(".reachbtn").append(showPasscodehs);
  $(".reachbtn").css("display","flex");
  $("#babtn").css("display","flex");
}


//*lIFE SCIENCES & CHEMICAL TECHNOLOGY*//
function lsctPage(){
  $(".bubble").empty();
  $(".passcodecontainer").css("display","none");
  $(".reachbtn").empty();
  $(".locationlink").css("display","flex");
  $(".baans").empty();

  $(".schooldropdownmenu").css("display","none");
  $(".quiz").empty();
  $(".quizT").empty();

  let lsctForm = `<h3 class="top">How many courses does the School of Life Sciences & Chemical Technology offer? </h3>
  <input type="radio" id="lsctq1opt1" value="5">
  <label for ="lsctq1opt1">5</label>
  <br>
  <input type="radio" id"lsctq1opt2" value="2">
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

  $(".quiz").append(lsctForm);

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

  let showHerebtnlsct = `<input type="button" id="babtn" value="${lsctButton2}" style="margin-top:20px;" onClick="lsctQuizpage()">`
  $(".reachbtn").append(showHerebtnlsct);
  $(".reachbtn").css("display","flex");
  $("#babtn").css("display","flex");

  let lsctImgclue= `<img src="photos/lsct.png" class= "baclue">`
  $(".imageclue").append(lsctImgclue);
}
function lsctQuizpage(){
  $(".bubble").empty();
  $(".imageclue").empty();
  $(".reachbtn").empty();
  $(".placename").empty();

  $(".quiz").css("display","block");
  $(".quizT").css("display","block");

  let lsctQuizbubble = quizTemplate.textL;
  let lsctQuizbtn = quizTemplate.buttonL;

  $(".bubble").append(lsctQuizbubble);
  $(".bubble").css("height","140px");

  let showPasscodehs = `<input type="button" id="babtn" value="${lsctQuizbtn}" style="margin-top:20px" onClick="showPasscode()" >`
  $(".reachbtn").append(showPasscodehs);
  $(".reachbtn").css("display","flex");
  $("#babtn").css("display","flex");
}


//SCH DROPDOWN//
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
//ENDPAGE//
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
  $(".footerimg").css("display","flex");
  
}