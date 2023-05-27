if (
    sessionStorage.getItem("adminActive") == null ||
    sessionStorage.getItem("adminActive") == "false"
) {
    location.href = "index.html";
}




let numberOfUsers = document.getElementById("number-of-users");
let numberOfCompleted = document.getElementById("number-of-completed");
let numberOfPending = document.getElementById("number-of-pending");
let arrayOfUsers = JSON.parse(window.localStorage.getItem("userData"));
let table = document.getElementById("users-table");




window.addEventListener("load", () => {
    getUsersFormsStatusAndFillStatusCards();
});






//loping throw the array to get the application that completed and pending
function getUsersFormsStatusAndFillStatusCards(){
    var completedForms = 0;
    var pendingForms = 0;
    arrayOfUsers.forEach((user) => {
        if(user.regestrationCompleted){
            completedForms++;
        }
        else {
            pendingForms++;
        }
        // console.log(user);       
        fillTableWithUsersData(user);
    })
    numberOfCompleted.innerHTML = completedForms;
    numberOfPending.innerHTML = pendingForms;
    numberOfUsers.innerHTML = arrayOfUsers.length;
}


function fillTableWithUsersData (user) {
    let tr = document.createElement("tr");
    let status;
    if(user.regestrationCompleted){
        status = "completed";
    }
    else {
        status = "pending";
    }
    tr.innerHTML = `
        <td>${user.userId}</td>
        <td>${user.userForm["firstName"]}</td>
        <td>${user.userForm["lastName"]}</td>
        <td>${user.email}</td>
        <td>${user.userEnglishTestScore}</td>
        <td>${user.userMathTestScore}</td>
        <td class ="${status}">${status}</td>
        <td><button type="button" class="btn btn-primary signin-btn"><i class="fa-regular fa-eye"></i></button></td>
    `;
    console.log(tr);
    table.appendChild(tr);
    
}
