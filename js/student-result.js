var allUserTestInfo = JSON.parse(localStorage.getItem("userData"));
var userTestInfo =
  allUserTestInfo[parseInt(sessionStorage.getItem("userID")) - 1];
let signout = document.getElementById("sign_out");

if (
  sessionStorage.getItem("userActive") == null ||
  sessionStorage.getItem("userActive") == "false"
) {
  location.href = "index.html";
}
if (
  userTestInfo["userFormComplete"] === false &&
  userTestInfo["userFinishEnglishTest"] === false &&
  userTestInfo["userFinishMathTest"] === false
) {
  location.href = "student-dashboard.html";
}
function changeSignOutIcon() {
  if (screen.width < 576) {
    signout.innerHTML = `<img style="width: 100%; height: 60%; filter: invert(100%); " src="img/logout.svg" alt="signOut">`;
  } else {
    signout.innerHTML = "Sign Out";
  }
}
window.addEventListener("resize", function () {
  changeSignOutIcon();
});
signout.onclick = function () {
  sessionStorage.setItem("userActive", "false");
  location.href = "index.html";
};

// store the score of english test , Math result
let englishresult = document.getElementById("englishresult");
englishresult.innerHTML = `English Score : ${userTestInfo.userEnglishTestScore} / ${userTestInfo.englishTestQuestions.length} `;

let mathresult = document.getElementById("mathresult");
mathresult.innerHTML = `Math Score : ${userTestInfo.userMathTestScore} / ${userTestInfo.mathTestQuestions.length} `;

// Access the first table
let table = document.getElementById("table");

// Access the table body of 1st Table
let tbody = table.querySelector("tbody");

// Loop in English test
for (let i = 0; i < userTestInfo.englishTestQuestions.length; i++) {
  let row = document.createElement("tr");

  let numberQuestion = document.createElement("th");
  numberQuestion.textContent = i + 1;

  // Create the question
  let question = document.createElement("td");
  question.textContent =
    userTestInfo.englishTestQuestions[i] || "Not Answered."; // add the or to check if the user answer null , add "not answered "

  // Create the answer
  let answer = document.createElement("td");
  answer.textContent = userTestInfo.userEnglishAnswers[i] || "Not Answered.";

  // Append  coulumns into the  ( tr)
  row.appendChild(numberQuestion);
  row.appendChild(question);
  row.appendChild(answer);

  // Append the row to the table body
  tbody.appendChild(row);
}

// Access the 2nd table
let tabletwo = document.getElementById("tabletwo");
let tbody_tabletwo = tabletwo.querySelector("tbody");

// Loop through the data and create table rows with question and answer cells for Math test
for (let i = 0; i < userTestInfo.mathTestQuestions.length; i++) {
  let row = document.createElement("tr");

  let numberQuestion = document.createElement("th");
  numberQuestion.textContent = i + 1;

  let question = document.createElement("td");
  question.textContent = userTestInfo.mathTestQuestions[i] || "Not Answered.";

  let answer = document.createElement("td");
  answer.textContent = userTestInfo.userMathAnswers[i] || "Not Answered.";

  row.appendChild(numberQuestion);
  row.appendChild(question);
  row.appendChild(answer);

  // Append the row to the table body
  tbody_tabletwo.appendChild(row);
}
