
//Make a variable for a timer


var timer;



//Make a var for each question with properties and values of answers,correct answers,image or gifs
// Going to need a place to link the gifs for the correct and wrong gifs
var gameQuestions=[
    {
question:"What is Gabe's Middle Name?",
answer:["Sam","Susan","Seth","Sharon"],
correctAnswer:"Susan",
Image: "../images/gabe.jpeg",

    },

    {
question:"Who is the Office Notary?",
answer:["Toby","Angela","Dwight","Oscar"],
correctAnswer:"Dwight",
Image: "../images/accountants.png"

    },

    {
question:"What are Oscars brain foods?",
answer:["Sushi & Craft Beer", "Thai Food & Spanish Reds", "Empandas & Guacamole", "Pizza Rolls and Celery"],
correctAnswer:"Thai Food & Spanish Reds",
Image: "../images/oscar.jpeg"

    },

    {
question:"What is the name of Toby's True Crime Podcast?",
answer:["Toby Tells All", "My Name is George", "The Flederson Files", "Stolen Innocence: The Scraton Strangler"],
correctAnswer:"The Flederson Files",
Image: "../images/Toby.jpeg"

    },

    {
question:"In Threat Level Midnight'how many times does Michael Scran say he is going to toss the coin to determine whether he take the mission from the president?'",
answer:["15", "Brushing his teeth", "7" , "22"],
correctAnswer:"7",
Image: "../images/Threat-Level-Midnight.jpg"

    },

    {
question:"What ingredient should one undercook to make the perfect Malone chili?",
answer:["The Hamburger Meat", "The Tomatoes", "The Stock", "The Onions"],
correctAnswer:"The Onions",
Image:"../images/Kevin.png"

    },

    {
question:"Dwight Schrute plays which of the following musical instruments?",
answer:["Harpschord", "Piano","Banjo", "Recorder"],
correctAnswer:"Recorder",
Image: "../images/Dwight.jpg"

    },

    {
question:"Which character is NOT chosen for Michael's basketball team in their match against the warehouse?",
answer:["Stanley","Phyllis","Ryan","Oscar"],
correctAnswer:"Oscar",
Image: "../images/MSbacketball.jpg"

    },

    {
question:"What is the name of the Scanton Strangler?",
answer:["Charles Walter Fink", "Douglas Lyle Goggins","George Howard Skub", "Albert Henry DeSalvo"],
correctAnswer:"George Howard Skub",
Image: "../images/Toby2.jpg"

    },
    
    {
question:"What is the number of Kevin invents to compensate for his accounting errors?",
answer:["Thirtween","Slevin","Keleven","Dundereight"],
correctAnswer:"Keleven",
Image: "../images/KevinMalone.jpg"

    }
]


///Startup HW!!!!! Eric Hosted
var game={
    question:gameQuestions,
    counter: 10,
    correct: 0,
    incorrect: 0,
    currentQuestion:0,
    //#3 on notes start up game notes(creating the game for the startup)
    //going to need comma and function() and commas


    //Going to need a timer for each question for about 20-30 seconds

countdown: function(){
    //decrement counter like -- for timer to go down from 30
    game.counter--;
    //display timer calling function to display counter
    $("#timer").text(game.counter);
    //check if timer is done
    if (game.counter === 0) {
          //run timeUp function(or make one)  
        clearInterval(timer);
       //i think i need to put more code here so it can pop up thats wrong statements and show the gif and the prompting the next question
       game.nextQuestion();
    }
    
},

loadQuestion: function(){
    //make sure we are clicking thr button
    console.log("start clicked")
    //setinterval that actually calls the countdown
    timer = setInterval(game.countdown, 1000);
    //show the question
    $("#game").html("<h2>"+ gameQuestions[game.currentQuestion].question + "</h2>");
    //loop over questions and display one on the pg
    for (var i = 0; i < gameQuestions[game.currentQuestion].answer.length; i++) {
        // going to neeed to make the buttons when clicked to do something
       $("#game").append("<button class='answerBtn' data="+gameQuestions[game.currentQuestion].answer[i]+">"+ gameQuestions[game.currentQuestion].answer[i]+"</button>")

       
       //how will it know when that one is clicked it is the right one?
       //if statements? 
        
    }

},
nextQuestion: function(){
    game.counter=10;
    $("#timer").text(game.counter);
    game.currentQuestion++;
    game.loadQuestion();
},
timeUp: function(){
clearTimeout();

},
results: function(){

},
clicked: function(){
  //  $("button").click(function(){

},
answerCorrectly: function(){

},
answerInCorrectly: function(){

},
reset: function(){

},

}
//game.countdown();
// setInterval(game.countdown, 1000);
//$(document).on("click,") //that calls to reset
//$(document).on("click,")//that calls the clicked function
$(document).on("click",".start", game.loadQuestion) // that calls the loadQuestion function



//HW SESSION END

//var userResults;
//needs to be a number not a string
// Need a variable to track the users correct and wrong answers


// String will pop up if user gets question right ot wrong\
//var thatsRight ="That's what she said"
//var thatsWrong ="That's not what she said"

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

