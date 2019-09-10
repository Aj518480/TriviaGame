
//Make a variable for a timer


var timer;


//Make a var for each question with properties and values of answers,correct answers,image or gifs
// Going to need a place to link the gifs for the correct and wrong gifs
var questions=[
    {
question1:"What is Gabe's Middle Name?",
answer:["Sam","Susan","Seth","Sharon"],
correctAnswer:"Susan",
Image: url=("../images/gabe.jpeg"),

    },

    {
question2:"Who is the Office Notary?",
answer:["Toby","Angela","Dwight,Oscar"],
correctAnswer:"Dwight",
Image: URL("../images/accountants.png")

    },

    {
question3:"What are Oscars brain foods?",
answer:["Sushi & Craft Beer", "Thai Food & Spanish Reds", "Empandas & Guacamole", "Pizza Rolls and Celery"],
correctAnswer:"Thai Food & Spanish Reds",
Image: URL("../images/oscar.jpeg")

    },

    {
question4:"What is the name of Toby's True Crime Podcast?",
answer:["Toby Tells All", "My Name is George", "The Flederson Files", "Stolen Innocence: The Scraton Strangler"],
correctAnswer:"The Flederson Files",
Image: URL("../images/Toby.jpeg")

    },

    {
question5:"In Threat Level Midnight'how many times does Michael Scran say he is going to toss the coin to determine whether he take the mission from the president?'",
answer:["15", "Brushing his teeth", "7" , "22"],
correctAnswer:"7",
Image: URL("../images/Threat-Level-Midnight.jpg")

    },

    {
question6:"What ingredient should one undercook to make the perfect Malone chili?",
answer:["The Hamburger Meat", "The Tomatoes", "The Stock", "The Onions"],
correctAnswer:"The Onions",
Image: URL("../images/Kevin.png")

    },

    {
question7:"Dwight Schrute plays which of the following musical instruments?",
answer:["Harpschord", "Piano","Banjo", "Recorder"],
correctAnswer:"Recorder",
Image: URL("../images/Dwight.jpg")

    },

    {
question8:"Which character is NOT chosen for Michael's basketball team in their match against the warehouse?",
answer:["Stanley","Phyllis","Ryan","Oscar"],
correctAnswer:"Oscar",
Image: URL("../images/MSbacketball.jpg")

    },

    {
question9:"What is the name of the Scanton Strangler?",
answer:["Charles Walter Fink", "Douglas Lyle Goggins","George Howard Skub", "Albert Henry DeSalvo"],
correctAnswer:"George Howard Skub",
Image: URL("../images/Toby2.jpg")

    },
    
    {
question10:"What is the number of Kevin invents to compensate for his accounting errors?",
answer:["Thirtween","Slevin","Keleven","Dundereight"],
correctAnswer:"Keleven",
Image: URL("../images/KevinMalone.jpg")

    }
]


//var userResults;
//needs to be a number not a string
// Need a variable to track the users correct and wrong answers





// String will pop up if user gets question right ot wrong\
//var thatsRight ="That's what she said"
//var thatsWrong ="That's not what she said"


///Startup HW!!!!! Eric Hosted
var game={
    question:questions,
    counter: countStartNumber,
    correct: 0,
    incorrect: 0,

    //#3 on notes start up game notes(creating the game for the startup)
    //going to need comma and function() and commas


    //Going to need a timer for each question for about 20-30 seconds

countdown: function(){
    //decrement counter like -- for timer to go down from 30
    
    
    var secondsLeft = 30;
    //display timer calling function to display counter
    gameCounter(){
        $("#userTimer").text(secondsLeft) 
    }
    
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (secondsLeft == 0) {
          //run timeUp function(or make one)  on erics notes 
        clearTimeout(timerId);
       //i think i need to put more code here so it can pop up thats wrong statements and show the gif and the prompting the next question
      } else {
        timeLeft--;
        gameCounter();
      }
    }


},

loadQuestion: function(){

},
nextQuestion: function(){

},
timeUp: function(){


},
results: function(){

},
clicked: function(){

},
answerCorrectly: function(){

},
answerInCorrectly: function(){

},
reset: function(){

},

}

$(document).on("click,") //that calls to reset
$(document).on("click,")//that calls the clicked function
$(document).on("click,") // that calls the loadQuestion function



//HW SESSION END


//Going to need a timer for each question for about 20-30 seconds

//NOTES TO SELF
//<button onclick="setTimeout(myFunction, 3000)*5);"></button> (MIGHT BE GOOD TO USE FOR THE CHOICES THE USER HAS)
//clearTimeout(myVar) (GOOD TO USE ONCE THE USER CLICKS THE RIGHT ANSWER)
//myVar = setTimeout(myFunction, 30000) (SETS A NORMAL TIMER FOR 30 SECONDS)


//Need to make an onclick function for when the user clicks on the buttons with if statements of === or not !==
//make sure it is including the user is === to put including the gif make thats right! is within the timers time frame. results with go up 1

//$().on("click",function(){}
//$().on("click",function(){}
//$().on("click",function(){}
//$().on("click",function(){}




//Question1 "What is Gabe's Middle Name?"
//Question2 "Who is the Office Notary?"
//Question3 "What are Oscars brain foods?"
//Question4 "What is the name of Toby's True Crime Podcast?"
//Question5 "In Threat Level Midnight'how many times does Michael Scran say he is going to toss the coin to determine whether he take the mission from the president?'"
//Question6 "What ingredient should one undercook to make the perfect Malone chili?"
//Question7 "Dwight Schrute plays which of the following musical instruments?"
//Question8 "Which character is NOT chosen for Michael's basketball team in their match against the warehouse?"
//Question9 "What is the name of the Scanton Strangler?"
//Question10 "What is the number of Kevin invents to compensate for his accounting errors?"

//ChoicesQ1: Sam,Susan,Seth,Sharon Correct Answer:Susan
//ChoicesQ2: Toby,Angela,Dwight,Oscar Correct Answer:Dwight
//ChoicesQ3: Sushi & Craft Beer, Thai Food & Spanish Reds, Empandas & Guacamole, Pizza Rolls and Celery Correct Answer: Thai Food & Spanish Reds
//ChoicesQ4: Toby Tells All, My Name is George, The Flederson Files, Stolen Innocence:The Scraton Strangler Correct Answer: The Flederson Files
//ChoicesQ5: 15, Brushing his teeth, 7 , 22 Correct Answer: 7
//ChoicesQ6: The Hamburger Meat, The Tomatoes, The Stock, The Onions Correct Answer: The Onions
//ChoicesQ7: Harpschord, Piano,Banjo, Recorder Correct Answer: Recorder
//ChoicesQ8: Stanley,Phyllis,Ryan,Oscar Correct Answer: Oscar
//ChoicesQ9: Charles Walter Fink, Douglas Lyle Goggins,George Howard Skub, Albert Henry DeSalvo Correct Answer: George Howard Skub
//ChoicesQ10: Thirtween,Slevin,Keleven,Dundereight Correct Answer: Keleven

//if the user answers the wrong answer display a timer for 20 seconds


//Going to need link Jquery to Html for the paragrah for the questions and to the buttons for the answers
//function triviaBoard() {
       
   // $().text();
   // $().text();
   // $().text();
    //$().text();
    //$("#questions").text();
    //$("userTimer").text(userTimer);
    //$("imagesOrGifs").text(imagesOrGifs);
// Going to need a place to link the gifs for the correct and wrong gifs
//};
//triviaBoard();

