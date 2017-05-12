var time = new Date().getHours();

    var messageText;
    var noon = 12;
    var evening = 19;
    var wakeupTime = 7;
    var lunchTime = 1;
    var partyTime = 18;
    var napTime = 15;


// Gets message based on time of day 
var timeEventJS = document.getElementById("timeEvent");

// Gets image based on time of day 
var lolcatJS = document.getElementById("lolcat");


var updateClock = function()
{
    // PARTY TIME
    if (time == partyTime)
    {image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
     messageText = "IZ PARTEE TIME!!";} 

    // NAP TIME
    else if (time == napTime)
    {image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
     messageText = "IZ NAP TIME…";} 

    // LUNCH TIME
    else if (time == lunchTime) 
    {image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
     messageText = "IZ NOM NOM NOM TIME!!";}


    // WAKEUP TIME
    else if (time == wakeupTime) 
    {image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
     messageText = "IZ TIME TO GETTUP.";} 


    // MORNING
    else if (time < noon)
    {image = "http://lolkitten.org/wp-content/uploads/2012/10/funny-cat-lolcat-17-espressos.jpg";
    messageText = "Good morning!";} 

    // AFTERNOON
    else if (time > evening) 
    {image = "http://www.mnn.com/sites/default/files/user-8595/lolcat_main_0.jpg";
    messageText = "Good Evening!";} 

    // EVENING
    else 
    {image = "http://www.felineunderground.com/uploaded_images/lol-wine-cat-708561.jpg";
    messageText = "Good afternoon!";}



// Gets message based on time of day 
timeEventJS.innerText = messageText;

// Gets image based on time of day 
lolcat.src = image;
};



// CLOCK *************************************************************************
// CLOCK *************************************************************************

var showCurrentTime = function()
    {
    // display the string on the webpage
    var clock = document.getElementById("clock");
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) 
    {meridian = "PM";}  
    if (hours > noon) 
    {hours = hours - 12;}
 
    // Set Minutes
    if (minutes < 10)
    {minutes = "0" + minutes;}
 
    // Set Seconds
    if (seconds < 10)
    {seconds = "0" + seconds;}
 
    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
    };

showCurrentTime(); 
updateClock();

var oneSecond = 1000;
setInterval(updateClock, oneSecond);


// Party time button

var partyTimeButton = document.getElementById("partyTimeButton");

var isPartyTime = false;

var partyEvent = function()
  {
   if (isPartyTime == false)  
     {
      isPartyTime = true;
      time = partyTime;
      partyTimeButton.innerText = "Party Over!";
      partyTimeButton.style.background = "#0A8DAB";}
  
    else  
    {
      isPartyTime = false;
      time = new Date().getHours();
      partyTimeButton.innerText = "PARTY TIME!";
      partyTimeButton.style.background = "#222";}
    };

partyTimeButton.addEventListener("click", partyEvent);



// Selectors

var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var wakeUpEvent = function()
    {wakeUpTime = wakeUpTimeSelector.value;};

wakeUpTimeSelector.addEventListener('change', wakeUpEvent);


var lunchTimeSelector =  document.getElementById("lunchTimeSelector");
var lunchTimeEvent = function()
    {lunchTime = lunchTimeSelector.value;};

lunchTimeSelector.addEventListener("change", lunchTimeEvent);



var napTimeSelector =  document.getElementById("napTimeSelector");
var napTimeEvent = function()
    {napTime = napTimeSelector.value;};

napTimeSelector.addEventListener("change", napTimeEvent);


