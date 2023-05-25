let signOutButton=document.querySelector(".signup__button");
let testContainer=document.querySelector(".test__container");
let timerContainer=document.querySelector(".timer__container");
let startButton=document.getElementById("start-button");

//Save report about the information related to the user tests
let userTestInfo;
if (localStorage.getItem(`userTestReportID${sessionStorage.getItem("userID")}`) != null){
  userTestInfo=JSON.parse(localStorage.getItem(`userTestReportID${sessionStorage.getItem("userID")}`));
  console.log(userTestInfo)
}else{
  userTestInfo={
    userID:sessionStorage.getItem("userID"),
    username:sessionStorage.getItem("username"),
    userFinishEnglishTest:null,
    userEnglishTestScore:null,
    userEnglishAnswers:[],
    userFinishMathTest:null,
    userMathTestScore:null,
    userMathAnswers:[]
  }
  console.log(userTestInfo)
}
localStorage.setItem(`userTestReportID${sessionStorage.getItem("userID")}`,JSON.stringify(userTestInfo));

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
      question: "What is the sum of 5 + 3?",
      options: ["7", "8", "9", "10"],
      answer: 1
    },
    {
      question: "How many sides does a triangle have?",
      options: ["2", "3", "4", "5"],
      answer: 1
    },
    {
      question: "What is 7 multiplied by 4?",
      options: ["21", "24", "28", "32"],
      answer: 2
    },
    {
      question: "If you have 10 cookies and you eat 3, how many cookies do you have left?",
      options: ["4", "6", "7", "10"],
      answer: 2
    },
    {
      question: "Which number comes next in the sequence: 1, 3, 5, 7, __?",
      options: ["8", "9", "10", "11"],
      answer: 1
    },
    {
      question: "How many inches are in a foot?",
      options: ["6", "10", "12", "16"],
      answer: 2
    },
    {
      question: "What is the value of 2 + 2 x 3?",
      options: ["8", "10", "12", "16"],
      answer: 0
    },
    {
      question: "How many sides does a square have?",
      options: ["2", "3", "4", "5"],
      answer: 2
    },
    {
      question: "What is 15 divided by 3?",
      options: ["3", "5", "10", "15"],
      answer: 1
    },
    {
      question: "Which number is the smallest: 17, 22, 10, or 8?",
      options: ["17", "22", "10", "8"],
      answer: 3
    },
    {
      question: "What is the value of 3 squared?",
      options: ["3", "6", "9", "12"],
      answer: 2
    },
    {
      question: "How many minutes are there in an hour?",
      options: ["10", "30", "60", "100"],
      answer: 2
    },
    {
      question: "If you have 8 apples and you give away 3, how many apples do you have left?",
      options: ["2", "3", "5", "8"],
      answer: 2
    },
    {
      question: "What is the value of 7 + 3 x 2?",
      options: ["10", "13", "16", "20"],
      answer: 1
    },
    {
      question: "Which number comes next in the sequence: 2, 4, 6, 8, __?",
      options: ["10", "11", "12", "14"],
      answer: 0
    },
    {
      question: "How many days are there in a week?",
      options: ["5", "6", "7", "8"],
      answer: 2
    },
    {
      question: "What is the value of 4 x 4 - 2?",
      options: ["10", "14", "16", "18"],
      answer: 1
    },
    {
      question: "How many sides does a hexagon have?",
      options: ["4", "5", "6", "7"],
      answer: 2
    },
    {
      question: "What is the result of 12 divided by 4?",
      options: ["2", "3", "4", "6"],
      answer: 1
    },
    {
      question: "Which number is larger: 25 or 15?",
      options: ["25", "15", "Equal", "Not comparable"],
      answer: 0
    },
    {
      question: "What is the value of 8 - 3 x 2?",
      options: ["2", "5", "8", "10"],
      answer: 0
    },
    {
      question: "How many months are in a year?",
      options: ["6", "8", "10", "12"],
      answer: 3
    },
    {
      question: "What is the value of 5 squared?",
      options: ["5", "10", "25", "30"],
      answer: 2
    },
    {
      question: "How many legs does a dog have?",
      options: ["2", "4", "6", "8"],
      answer: 1
    },
    {
      question: "What is the sum of 15 + 20?",
      options: ["25", "30", "35", "40"],
      answer: 2
    },
    {
      question: "What is the value of 10 divided by 2?",
      options: ["2", "5", "8", "10"],
      answer: 1
    },
    {
      question: "How many colors are there in a rainbow?",
      options: ["4", "6", "7", "8"],
      answer: 2
    },
    {
      question: "What is the result of 3 x 4 + 2?",
      options: ["10", "14", "16", "18"],
      answer: 1
    },
    {
      question: "How many fingers are there on one hand?",
      options: ["2", "4", "5", "10"],
      answer: 2
    },
    {
      question: "Which number is greater: 12 or 8?",
      options: ["12", "8", "Equal", "Not comparable"],
      answer: 0
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

seconds=10*60;
userMathAnswers=[]

//choseAnswer: save the the user answers in an Array(userMathAnswers).
function chooseAnswer(button){
    index = parseInt(button.parentNode.parentNode.id);
    userMathAnswers[index]=button.value;
    userTestInfo["userMathAnswers"]=userMathAnswers;
    localStorage.setItem(`userTestReportID${sessionStorage.getItem("userID")}`,JSON.stringify(userTestInfo));
    
}

//getQuestion: display the question with options for the user to choose between.
function getQuestion(value){
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

        </div>
        <button class="next__button btn mt-3" id="next-button" onclick="nextQuestions()">Next</button>

    </div>`;

//Make sure that the user chosen option is checked when the question is displayed.
let chosenOption=document.querySelectorAll(".option");
for(let i of chosenOption){
  answers=userMathAnswers;
  if (answers[counter]==i.value){
    i.checked=true;
  }
}


//display the question number in red in the numbers navigator.
let questionScreen=document.querySelectorAll(".question__screen");
questionScreen[counter].style.background="#ff6551";
questionScreen[counter].style.color="white";
}
questions=shuffleArray(questions).slice(0,10);

//startButton: Starts the quiz.
startButton.addEventListener("click",function(){
    window.onbeforeunload = function () {
      userTestInfo["userMathTestScore"]=0;
      userTestInfo["userFinishMathTest"]=true;
      localStorage.setItem(`userTestReportID${sessionStorage.getItem("userID")}`,JSON.stringify(userTestInfo));
      return "leave";
    }
    if(userTestInfo["userFinishMathTest"]==true){
      finish();
    }else{

    
    getQuestion(questions[0]);
      let startTestTime=new Date().getTime();
      let endTestTime;
    //updateTimer: Start a timer when the quiz is started and force the quiz to finish when it ends.
    function updateTimer(){
        endTestTime=new Date().getTime();        
        if (seconds!=0){
            // seconds--
            Timer=seconds-parseInt((endTestTime-startTestTime)/1000)
            let minutes=Math.floor(Timer/60)
            let remainingSeconds=Timer%60 
            timerContainer.innerHTML=`<div class="timer rounded mx-auto p-1">${minutes.toString()}:${remainingSeconds.toString().padStart(2,'0')}</div>`
        }else{
            clearInterval(interval)
            finish()
        }
        }
    const interval = setInterval(updateTimer, 1000)
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
    window.addEventListener("resize", function(){
       changeNextPrevIcon()
    });


  }
})

//nextQuestions(called by the next button): Display the next question for the user as long as it's not the last question.
//If it's the last question then the next button is converted to finish.
function nextQuestions(){
    if (counter == 9){
        counter++;
        testContainer.innerHTML=`<div class="question__container container-fluid mt-1 px-5">
        <h2 class="text-center pb-5 pt-3 text-white">Are you sure you want to finish?</h2>
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

        </div>
        <button class="finish__button btn mt-3" id="finish-button" onclick="finish()">Finish</button>

    </div>`;
    }else{
        counter++;

        getQuestion(questions[counter])

    }

    
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
  window.onbeforeunload = null;
    score=0

    
    if(userTestInfo["userFinishMathTest"]!=true){
    let answers=userTestInfo["userMathAnswers"];
    for(let i in answers){
        if(answers[i]==questions[i].options[questions[i].answer]){
            score++
        }

    }
    userTestInfo["userMathTestScore"]=score;
    userTestInfo["userFinishMathTest"]=true;
    localStorage.setItem(`userTestReportID${sessionStorage.getItem("userID")}`,JSON.stringify(userTestInfo));
  }

    testContainer.innerHTML=`<div class="question__container container-fluid mt-1 px-5">
    <h2 class="text-center pb-5 pt-3 text-white">You scored ${userTestInfo["userMathTestScore"]} out of 10</h2>
</div>
<div class="rtn__button__container d-flex w-100 justify-content-center">
<a href="student-dashboard.html"><button class="return__button my-3" id="start-button">RETURN</button></a>
</div>`;
let main=document.getElementById("main");
main.removeChild(main.children[1]);



}
//displayQuestion (called by the question navigator): Display the question to the user based on the number chosen.
function displayQuestion(button){
    counter=button.innerHTML-1;
    getQuestion(questions[button.innerHTML-1]);

}



