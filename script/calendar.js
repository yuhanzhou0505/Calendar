var today = new Date();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function loadCalendar() {
    document.getElementById("daysBody").innerHTML = "";
    var numDays = calculateNumberOfDaysInMonth();
    var startPos = new Date(currentYear, currentMonth, 0).getDay();
    //add empty day space before startPos
    for (var i = 0; i <= startPos; i++) {
        var emptyDiv = document.createElement("div");
        emptyDiv.classList.add("day");
        emptyDiv.classList.add("empty");
        document.getElementById("daysBody").appendChild(emptyDiv);
    }
    //add days in month div to calender
    for (var i = 0; i < numDays; i++) {
        var dayDiv = document.createElement("div");
        dayDiv.classList.add("day");
        dayDiv.classList.add("label");
        dayDiv.innerHTML = i + 1;
        document.getElementById("daysBody").appendChild(dayDiv);
    }
    document.getElementById("top").innerHTML = "";
    document.getElementById("top").innerHTML = months[currentMonth] + " " + currentYear;
    
}

function calculateNumberOfDaysInMonth() {
    return new Date(currentYear, currentMonth+1, 0).getDate();
}

function showNextMonth() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    loadCalendar();
}

function showPreviousMonth() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    loadCalendar();
}

