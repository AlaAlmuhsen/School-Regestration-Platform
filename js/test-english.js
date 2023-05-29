let signOutButton=document.querySelector(".signup__button");
let testContainer=document.querySelector(".test__container");
let timerContainer=document.querySelector(".timer__container");
let startButton=document.getElementById("start-button");

//check if user is signed in 
if(sessionStorage.getItem("userActive") === null )
{
location.href = "index.html";
}

//actions when signing out
signOutButton.onclick = function () {
  sessionStorage.setItem("userActive", "false");
  location.href = "index.html";
};


//Save report about the information related to the user tests
var allUserTestInfo=JSON.parse(localStorage.getItem("userData"));//array of objects
var userTestInfo=allUserTestInfo[parseInt(sessionStorage.getItem("userID"))-1];//element = object of the current logged in user
//any changes on userTestInfo will be altered in allUserTestInfo without pushing(using the push function) in the alterations in the array of objects 

//changeSignOutIcon(): Change the content of the buttons to icons when the screen width is below 576 pixels.
function changeSignOutIcon(){
    if (screen.width < 576){
        signOutButton.innerHTML=`<img style="width: 100%; height: 60%; filter: invert(100%); " src="img/logout.svg" alt="signOut">`;
    }else{
        signOutButton.innerHTML="Sign Out";
    }
    
}



window.addEventListener("resize", function(){
  changeSignOutIcon()
});

let questions = [
    {
      question: "Which sentence contains a subject-verb agreement error?",
      options: [
        "She run to the store.",
        "They is going to the park.",
        "He plays tennis every day.",
        "I don't have any money."
      ],
      answer: 1 //index of options array
    },
    {
      question: "Choose the correct form of the verb to complete the sentence: They ________ to the party last night.",
      options: ["goes", "go", "going", "went"],
      answer: 3
    },
    {
      question: "Select the sentence that uses the correct punctuation:",
      options: [
        "I went to the store and bought milk, bread, and eggs.",
        "I went to the store and bought milk bread and eggs.",
        "I went to the store and bought milk, bread and eggs.",
        "I went to the store and bought milk, bread and, eggs."
      ],
      answer: 0
    },
    {
      question: "Identify the sentence with correct subject-verb agreement:",
      options: [
        "The books belongs on the shelf.",
        "The books belong on the shelf.",
        "The books is on the shelf.",
        "The books are on the shelf."
      ],
      answer: 3
    },
    {
      question: "Which sentence is grammatically correct?",
      options: [
        "Me and my friend are going to the movies.",
        "Me and my friend is going to the movies.",
        "I and my friend are going to the movies.",
        "My friend and I are going to the movies."
      ],
      answer: 3
    },
    {
      question: "Select the sentence that uses the correct verb tense:",
      options: [
        "He will goes to the party tonight.",
        "He will go to the party tonight.",
        "He will going to the party tonight.",
        "He will gone to the party tonight."
      ],
      answer: 1
    },
    {
      question: "Choose the correct pronoun to complete the sentence: ________ is a doctor.",
      options: ["She", "I", "Them", "We"],
      answer: 0
    },
    {
      question: "Identify the sentence with correct capitalization:",
      options: [
        "i enjoy playing soccer with my friends.",
        "I enjoy playing soccer with my friends.",
        "i enjoy playing soccer with my Friends.",
        "i enjoy playing Soccer with my friends."
      ],
      answer: 1
    },
    {
      question: "Which sentence is written in the active voice?",
      options: [
        "The cake was baked by Mary.",
        "Mary baked the cake.",
        "The cake had been baked by Mary.",
        "The cake will be baked by Mary."
      ],
      answer: 1
    },
    {
      question: "Choose the correct form of the adjective to complete the sentence: She is a ________ girl.",
      options: ["good", "better", "best", "gooder"],
      answer: 0
    },
    {
      question: "Select the sentence with correct word order:",
      options: [
        "Yesterday I went to the park.",
        "Went I to the park yesterday.",
        "I to the park went yesterday.",
        "Yesterday went I to the park."
      ],
      answer: 0
    },
    {
      question: "Identify the sentence with correct use of possessive pronouns:",
      options: [
        "Your welcome to join us.",
        "You're welcome to join us.",
        "Their welcome to join us.",
        "There welcome to join us."
      ],
      answer: 0
    },
    {
      question: "Choose the correct form of the verb to complete the sentence: She ________ the dishes every day.",
      options: ["wash", "washes", "washing", "washed"],
      answer: 1
    },
    {
      question: "Select the sentence that uses the correct comparative adjective:",
      options: [
        "She is more taller than me.",
        "She is taller than me.",
        "She is tall than me.",
        "She is tallester than me."
      ],
      answer: 1
    },
    {
      question: "Which sentence contains a pronoun-antecedent agreement error?",
      options: [
        "Everyone brought their own lunch.",
        "Everyone brought his own lunch.",
        "Everyone brought her own lunch.",
        "Everyone brought there own lunch."
      ],
      answer: 0
    },
    {
      question: "Choose the correct form of the verb to complete the sentence: They ________ basketball every Saturday.",
      options: ["plays", "play", "playing", "played"],
      answer: 1
    },
    {
      question: "Identify the sentence with correct use of apostrophe:",
      options: [
        "The dog's are barking.",
        "The dogs are barking.",
        "The dogs' are barking.",
        "The dogs is barking."
      ],
      answer: 1
    },
    {
      question: "Which sentence is grammatically correct?",
      options: [
        "It's raining, but I forgot my umbrella.",
        "Its raining, but I forgot my umbrella.",
        "It's raining, but I forgot my umbrella.",
        "Its raining but I forgot my umbrella."
      ],
      answer: 2
    },
    {
      question: "Select the sentence with correct use of articles:",
      options: [
        "I saw a elephant at the zoo.",
        "I saw an elephant at the zoo.",
        "I saw the elephant at the zoo.",
        "I saw elephant at the zoo."
      ],
      answer: 1
    },
    {
      question: "Choose the correct form of the verb to complete the sentence: We ________ to the beach last summer.",
      options: ["goes", "go", "going", "went"],
      answer: 3
    },
    {
      question: "Identify the sentence with correct use of capitalization:",
      options: [
        "My brother is studying biology at university.",
        "My brother is studying Biology at university.",
        "My brother is studying biology at University.",
        "My brother is studying Biology at University."
      ],
      answer: 0
    },
    {
      question: "Which sentence is written in the passive voice?",
      options: [
        "John will buy the groceries.",
        "The groceries were bought by John.",
        "The groceries have been bought by John.",
        "The groceries will be bought by John."
      ],
      answer: 1
    },
    {
      question: "Choose the correct pronoun to complete the sentence: ________ are going to the party.",
      options: ["She", "I", "Them", "We"],
      answer: 3
    },
    {
      question: "Select the sentence that uses the correct verb tense:",
      options: [
        "They are traveled to Europe last year.",
        "They traveled to Europe last year.",
        "They have been traveled to Europe last year.",
        "They will traveling to Europe last year."
      ],
      answer: 1
    },
    {
      question: "Identify the sentence with correct subject-verb agreement:",
      options: [
        "The dogs is barking.",
        "The dogs are barking.",
        "The dogs am barking.",
        "The dogs be barking."
      ],
      answer: 1
    },
    {
      question: "Which sentence contains a verb tense error?",
      options: [
        "I have seen that movie last night.",
        "I saw that movie last night.",
        "I will see that movie last night.",
        "I had seen that movie last night."
      ],
      answer: 0
    },
    {
      question: "Choose the correct form of the adjective to complete the sentence: It was the ________ day of my life.",
      options: ["good", "better", "best", "gooder"],
      answer: 2
    },
    {
      question: "Select the sentence with correct word order:",
      options: [
        "I usually take the bus to work.",
        "Take I usually the bus to work.",
        "I take usually the bus to work.",
        "I usually the bus take to work."
      ],
      answer: 0
    },
    {
      question: "Identify the sentence with correct use of possessive pronouns:",
      options: [
        "Your welcome to join us.",
        "You're welcome to join us.",
        "Their welcome to join us.",
        "There welcome to join us."
      ],
      answer: 1
    },
    {
      question: "Choose the correct form of the verb to complete the sentence: They ________ soccer every weekend.",
      options: ["plays", "play", "playing", "played"],
      answer: 1
    }
  ];
  


//shuffleArray : shuffle questions array to display questions to the user in a random order.
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
// questions=shuffleArray(questions).slice(0,15);

var counter=0;

seconds=20*60; //20min
userAnswers=[]

//choseAnswer: save the user answers in an Array(userAnswers).
function chooseAnswer(button){//button refers to radio input that was chosen
    index = parseInt(button.parentNode.parentNode.id);//get the id of the chosen option
    userAnswers[index]=button.value;
    userTestInfo["userEnglishAnswers"] = userAnswers;
    localStorage.setItem("userData",JSON.stringify(allUserTestInfo));
}

//getQuestion: display the question with options for the user to choose between.
function getQuestion(value){ //value is a parameter that is an object that contains answer, options, and the right option
//If it's the last question then the next button is converted to finish.
  nextButton=`<button class="next__button btn mt-3" id="next-button" onclick="nextQuestions()">Next</button>`;
  finishButton=`<button class="finish__button btn mt-3" id="finish-button" onclick="startFinishProcess()">Finish</button>`;
  rightButton="";
  if(counter==14){//counter starts from 0, if last question let the right button finishButton
    rightButton=finishButton;
  }else{
    rightButton=nextButton;
  }

    testContainer.innerHTML=`          <div class="question__container container-fluid mt-1 px-5">
    <h3 class="text-center pb-5 pt-3 text-white">Q${counter+1}: ${value.question}</h3>
</div>
<div class="options__container card container shadow col-12 col-sm-10 col-md-8 col-lg-6 mb-3">
    <div class="options d-flex flex-column gap-1 w-100" id="${counter}">
        <div class="option w-75 mx-auto">
            <input class="option" type="radio" name="option" id="option1" value="${value.options[0]}" onclick="chooseAnswer(this)">
            <label class="option__label ps-3 py-2" for="option1"><span style="font-weight:bold;">A.</span> ${value.options[0]}</label>
        </div>
        <div class="option w-75 mx-auto">
            <input class="option" type="radio" name="option" id="option2" value="${value.options[1]}" onclick="chooseAnswer(this)">
            <label class="option__label ps-3 py-2" for="option2"><span style="font-weight:bold;">B.</span> ${value.options[1]}</label>
        </div>
        <div class="option w-75 mx-auto">
            <input class="option" type="radio" name="option" id="option3" value="${value.options[2]}" onclick="chooseAnswer(this)">
            <label class="option__label ps-3 py-2" for="option3"><span style="font-weight:bold;">C.</span> ${value.options[2]}</label>
        </div>
        <div class="option w-75 mx-auto">
            <input class="option" type="radio" name="option" id="option4" value="${value.options[3]}" onclick="chooseAnswer(this)">
            <label class="option__label ps-3 py-2" for="option4"><span style="font-weight:bold;">D.</span> ${value.options[3]}</label>
        </div>
    </div>
</div>

    <div class="nav__buttons d-flex justify-content-around flex-wrap my-3 w-75 mx-auto">
        <button class="previous__button btn mt-3" id="prev-button" onclick="previousQuestions()">Previous</button>
        <div class="questions__nav col-5 d-flex flex-wrap justify-content-center align-content-center gap-1 mt-4">
            <div class="question__screen" onclick="displayQuestion(this)">1</div>
            <div class="question__screen" onclick="displayQuestion(this)">2</div>
            <div class="question__screen" onclick="displayQuestion(this)">3</div>
            <div class="question__screen" onclick="displayQuestion(this)">4</div>
            <div class="question__screen" onclick="displayQuestion(this)">5</div>
            <div class="question__screen" onclick="displayQuestion(this)">6</div>
            <div class="question__screen" onclick="displayQuestion(this)">7</div>
            <div class="question__screen" onclick="displayQuestion(this)">8</div>
            <div class="question__screen" onclick="displayQuestion(this)">9</div>
            <div class="question__screen" onclick="displayQuestion(this)">10</div>
            <div class="question__screen" onclick="displayQuestion(this)">11</div>
            <div class="question__screen" onclick="displayQuestion(this)">12</div>
            <div class="question__screen" onclick="displayQuestion(this)">13</div>
            <div class="question__screen" onclick="displayQuestion(this)">14</div>
            <div class="question__screen" onclick="displayQuestion(this)">15</div>
        </div>
        ${rightButton}

    </div>`;

//Make sure that the user chosen option is checked when the question is displayed.
//when clicking on the circles display the queston with the choosen answer highlighted.
let chosenOption=document.querySelectorAll(".option");
for(let i of chosenOption){
  answers=userAnswers;
  if (answers[counter]==i.value){//i.value --> all options of the question
    i.checked=true;
  }
}


//display the question number in red in the numbers navigator.
let questionScreen=document.querySelectorAll(".question__screen");
questionScreen[counter].style.background="#ff6551";
questionScreen[counter].style.color="white";
}
// end of get question function 

questions=shuffleArray(questions).slice(0,15);
allQuestions=[]
for(let i of questions){
  allQuestions.push(i.question);
}


//startButton: Starts the quiz.
startButton.addEventListener("click",function(){
  //This event allows you to display a message in a confirmation dialog box to inform the user whether he/she wants to stay or leave the current page.
    window.onbeforeunload = function () {
      userTestInfo["userEnglishTestScore"]=0;
      userTestInfo["userFinishEnglishTest"]=true;
      localStorage.setItem("userData",JSON.stringify(allUserTestInfo));

      return "leave";//flag, like a comment
    }
    if(userTestInfo["userFinishEnglishTest"]==true){
      finish();//call function finish()
    }else{

    
    getQuestion(questions[0]);
      let startTestTime=new Date().getTime();//real time 
      let endTestTime;
    //updateTimer: Start a timer when the quiz is started and force the quiz to finish when it ends.
    Timer=100;
    function updateTimer(){
        endTestTime=new Date().getTime();
        
        if (Timer!=0){
            // seconds--
            Timer=seconds-parseInt((endTestTime-startTestTime)/1000)
            let minutes=Math.floor(Timer/60)
            let remainingSeconds=Timer%60 
            timerContainer.innerHTML=`<div class="timer rounded mx-auto p-1">${minutes.toString()}:${remainingSeconds.toString().padStart(2,'0')}</div>`
        }else{
          //when the timer finishes 
            clearInterval(interval)//stops the timer 
            finish()
        }
        }
        //setInterval built-in functions (asynchronous function)
    const interval = setInterval(updateTimer, 1000)//call updateTimer function every 1 second = 1000 milisecond

    function changeNextPrevIcon(){
        let previousButton=document.getElementById("prev-button");
        let nextButton=document.getElementById("next-button");
        if (screen.width < 576){
            previousButton.innerHTML=`<img style="width: 20px; height: 100%; filter: invert();" src="img/left-arrow-1-svgrepo-com.svg" alt="">`;
            nextButton.innerHTML=`<img style="width: 20px; height: 100%; filter: invert();" src="img/right-arrow-1-svgrepo-com.svg" alt="">`;
        }else{
            previousButton.innerHTML="Previous";
            nextButton.innerHTML="Next";
        }
    }
//end of changeNextPrevIcon function

    window.addEventListener("resize", function(){
       changeNextPrevIcon()
    });

  }
}) //end of startButton click function

//nextQuestions(called by the next button): Display the next question for the user as long as it's not the last question.

function nextQuestions(){
        counter++;
        getQuestion(questions[counter])
}

//previousQuestions(called by the previous button): Display the previous question for the user as long as it's not the first question.
function previousQuestions(){
    if(counter!=0){
        counter--;

        getQuestion(questions[counter])
    }
}

//finish (called by the finish button or when the timer ends): Display the user score and finish the quiz.
function finish(){
  window.onbeforeunload = null;//to turn off the alert window because once it is activated it will not deactivate until I give it a null value
    score=0

    
    if(userTestInfo["userFinishEnglishTest"]!=true){
    let answers=userTestInfo["userEnglishAnswers"];
    for(let i in answers){
        if(answers[i]==questions[i].options[questions[i].answer]){//check questions array to understand
            score++
        }

    }
    userTestInfo["englishTestQuestions"]=allQuestions
    userTestInfo["userEnglishTestScore"]=score;
    userTestInfo["userFinishEnglishTest"]=true;
    localStorage.setItem("userData",JSON.stringify(allUserTestInfo));
  }


    testContainer.innerHTML=`<div class="question__container container-fluid mt-1 px-5">
    <h2 class="text-center pb-5 pt-3 text-white">You scored ${userTestInfo["userEnglishTestScore"]} out of 15</h2>
</div>
<div class="rtn__button__container d-flex w-100 justify-content-center">
<a href="student-dashboard.html"><button class="return__button my-3" id="start-button">RETURN</button></a>
</div>`;
//remove timer when viewing the result. main contains everything and the timer is the second child 
let main=document.getElementById("main");
main.removeChild(main.children[1]);
}// end of finish function

//the numbered circles 
//displayQuestion (called by the question navigator): Display the question to the user based on the number chosen.
function displayQuestion(button){
    counter=button.innerHTML-1;
    getQuestion(questions[button.innerHTML-1]);

}


//confirm finishing the test
function myConfirmBox(message) {
    let element = document.createElement("div");
    element.classList.add("box-background");
    element.innerHTML = `<div class="box">
                            ${message}
                            <div>
                                <button id="trueButton" class="alert__button yesAnswer">Yes</button> <!-- Set Id for both buttons -->
                                <button id="falseButton" class="alert__button noAnswer">No</button>
                            </div>
                        </div>`;
    document.body.appendChild(element);

    return new Promise(function (resolve, reject) {
        document.getElementById("trueButton").addEventListener("click", function () {
            resolve(true);
            finish();
            document.body.removeChild(element);
        });
        document.getElementById("falseButton").addEventListener("click", function () {
            resolve(false);
            document.body.removeChild(element);
        });
    })
}

// Using the confirm box
//finish button calls startFinishProcess function then the alert box appears then after clicking on yes finish function runs
function startFinishProcess(){
    myConfirmBox("Are you sure you want to finish this test?").then(response=>{
        console.log(response); // true or false response from the user
    })
}
