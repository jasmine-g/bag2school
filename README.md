# bag2school
BAG2SCHOOL
----------
This website's main aim is to create an interactive experience for those visiting Ngee Ann Polytechnic (NP) for the first time as well as for 
those who wants to know more about NP's facilities. Users would go on a "scavenger hunt" around the campus to collect items and at the same time 
explore wherever the website brings them to. This website would also gives information on the location users are at to help them learn about the place more. Lastly, users get to gain points throughout this "scavenger hunt" and this points will help them win prizes.

 

design process
----------------
As site owners, we want my users to feel happy, welcomed and excited while using our website. Hence, our group used a bright color yellow, as the main color of our website. As site owners we also want to leave a lasting impression of NP on our users. Therefore, we used the campus as our background and also used the different school icons so that it is easier for user to identify and remember. We included many links ,information and quizes to help users learn more about NP and we made the website more interactive (elaborated below) so that the users would enjoy themselves throughout the process, giving them a lasting impression as well.

As external users, I want to explore and find out more about NP through a fun and interactive way. We made our website into something similar to a scavenger hunt where users would have to find passcodes pasted on posters to collect the item. We also have quizes about the location they are at. This encourages users to explore the campus while trying to collect items and finding the answers to the quiz, making it a lot more interactive as compared to just giving information about NP. We also created a scenario where there is a 3d character named Janice who needs to collect her items on campus and invites the user to come along. This also contributes to the interactivity of our website as it feels like the user is interacting with someone. 

Features
----------
-Existing Features 
    -Friends Option 
        - this allows users to play with their friends and allow them to complete the quiz together. At the start of the game they are required to key in their friend's username which allows the game to display a scoreboard showing the different rankings of the user and their friends 
    - Dropdown menu to choose school
        - the user would be able to choose the school which they are most keen to visit for their first location, allowing them to explore their most desiered course and give them some creative freedom in the game. 
    -Page to let users know more about the location they are heading to
        - before heading to the location, the users will come across a page which the 3d character, Janice, would give them more infomation about the location that they are heading to next. This provides more infomation about the next location to the user to let the user better know the school. 
    -The Clues of where to find the poster at the location & revlation of answer(location of the poster)
        - after the user is told more infomation about the location, a page will pop up telling the user some clues about where the poster is pasted at the respective locations. They woudld then have to find the poster, making them explore the school/location more. However if they are unable to find the location of the poster, we have included a "Reveal Answer" function in which users can click on it to reveal the location of where the poster is pasted. 
    - Quiz and Keying in of secret passcode 
        - At the location the users would need to key in the secret passcode which could be found on a poster at the respective locations. In addition the users can choose to answer the quiz questions about the respective location. 
    -Quiz score and points- after keying in the secret passcode
        - the user would be presented with a page showing the score they have attained for the quiz as well as the amount of points that they have collected. 
    - Menu
        -The menu can be access  through the hamburger menu icon at the top right hand corner of every page. It contains 3 main optons:
            -Checklist: The checklist is used for when users want to check how many items they have collected. Once the user has collected one of the items, the checklist would reflect that by placing a tick at the box beside the said item. 
            -Map: the map function is applied through the use of API, the map function allows users to use the map to navigate around the campus should they need extra assistance. 
            - Scoreboard: the scoreboard function is implemented mainly for the purpose of those playing with friends. Those playing with friends would be able to see their ranking along with their friend's rankings in the scoreboard which shows their username as well as the amount of points that they have collected. For those playing alone, the scoreboard would mainly serve the purpose of informing them of the amount of points that they have accumulated in the game thus far. 
            -End Game : The end game button is available in the menu should the user want to cut short the game and end it early. 
    - Total points & items collected 
        - At the end of the game, after collectiing the last item/ clicking the end game button in the menu, the user will be brought to a page displaying all the different items the user has collected as well as the total points that they have attained throughout the game. 
    -End of game scoreboard
        -After clicking the next button on the total points & items collected page, a scoreboard will popup showing the user's rankings amongst their friends. 
    -End Page
        -When the next button is clicked on the end of game scoreboard page, the user will be brought to the last page of the website. It would display the location that the user can proceeed to to collect their prize as well as the prizes that they are eligible to collect. When done they can click the "Home" button which would bring them back to the start of the game. 


-features left to implement

    - API google street view (to help users to navigate around the school)
    -street navigation API (to get user's current location and give them directions to where they want to go)
    - Scores of friends in Leaderboard 
    - Spin the wheel (at the end of the game users can recieve extra prizes by spinning the wheel)

Technologies Used
-----------------
1.MapBox API
    -It was used for the map feature in our side menu which purpose is to help users navigate around the campus
    https://www.mapbox.com/ 
    
2.JQuery 
  https://jquery.com/ 
  -We used JQuery to simplify DOM manipulation and shorten our code.

3.w3shools
   We used this website to help with html/css codes, We are not sure about or want more information/examples on.
   https://www.w3schools.com/ 

4.LottieAnimation
    it was used for our home page to make the homepage look more interesting
    https://lottiefiles.com/search?q=loading&category=animations&animations-page=2

Testing
-------
1.Point System
  We went through different scenarios by answering the quizes differently when going throught the website as well as ending the game at different points of the "scavenger hunt" to see if the end points at the end page and the points on the quiz popup was accumulated correctly. We met some errors along the way, we realised that the points was not appearing on the intended page though there was no error in the console. After researching on stack overflow, we realised that we called the function on a page different then where we intended for the points to appear.

2.Checklist in side menu 
  We opened the checklist feature at different points of the "scavenger hunt" to see if the checklist was updated correctly.
  
3.Scoreboard
    we used different names and used different number of friend usernames to see if the scoreboard updated accrodingly.
    
4.User experience of website
    we asked our family memebers to use the website and give feedback on how we can improve it. One of the feedback we got was that the location was not clear in the images so we added text on top to say what the location is. 

    
    

Problems faced
1.Local Storage unable to set
    The local storage was unable to set due to the different keys was used
2.Collaboration 
    The guest user of the live share is unable to run the code making it hard to effectively collaborate on the project. In the end we chose to code on our own and put the codes together- this also caused some issues as come codes overwrote each other
3.Scoreboard
    The points were hard to get from the local storage
4.Alignment 
    some elements of the website were not able to be properly aligned causing us to use up much of our time to make sure it was in alignment- especially the media query portion where the image display section was hard to align due to the different sizes of the images and making sure that it matches the stands that it was supposed to be sitting on. 
Credits
---------
MEDIA
-Campus Images
    -Makan Place
    https://www.google.com/url?sa=i&url=http%3A%2F%2Fscoop.coop%2Fpoly-guide-top-5-meals-in-poly%2F&psig=AOvVaw3hJe4tc8T4kIk_BSt-By5y&ust=1645606050971000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCJDM07X2kvYCFQAAAAAdAAAAABAD 
    
    https://www.google.com/url?sa=i&url=https%3A%2F%2Fsg.openrice.com%2Fen%2Fsingapore%2Fr-ban-mian-fish-soup-makan-place-clementi-singaporean-chinese-chinese-noodles-r9129&psig=AOvVaw3hJe4tc8T4kIk_BSt-By5y&ust=1645606050971000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCJDM07X2kvYCFQAAAAAdAAAAABAK
    
    -Rest of images screenshotted from NP 360 tour 
        https://www1.np.edu.sg/corpcomm/vtour/tour.html 
        
-confetti background img
https://www.pngarts.com/explore/155624 
    

-Content
  -Quiz content and information on location adapted from NP website and 360 Tour
  https://www.np.edu.sg/Pages/default.aspx
  https://www1.np.edu.sg/corpcomm/vtour/tour.html 
  

-Acknowledgements