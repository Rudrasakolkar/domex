const cl = console.log;


// ========================================
// 1. Single Selection
// ========================================

let title = document.querySelector("#mainTitle");

cl(title);

title.style.color = "purple";
title.style.fontWeight = "900";


// ========================================
// 2. Select First LI
// ========================================

let firstLi = document.querySelector("li");

cl(firstLi);

firstLi.style.backgroundColor = "lightblue";
firstLi.style.color = "darkblue";
firstLi.style.fontWeight = "bold";
firstLi.style.padding = "15px";


// ========================================
// 3. Select Specific Child
// ========================================

let frontendSecond = document.querySelector("#frontend li:nth-child(2)");

cl(frontendSecond);

frontendSecond.style.backgroundColor = "lavender";
frontendSecond.style.color = "purple";
frontendSecond.style.borderLeft = "6px solid purple";


// ========================================
// 4. Select Third Child
// ========================================

let backendThird = document.querySelector("#backend li:nth-child(3)");

cl(backendThird);

backendThird.style.backgroundColor = "lightyellow";
backendThird.style.color = "brown";
backendThird.style.fontWeight = "bold";


// ========================================
// 5. querySelectorAll()
// ========================================

let allLists = document.querySelectorAll("li");

cl(allLists);


// ========================================
// 6. Add Bootstrap Classes
// ========================================

allLists.forEach(function (element) {

    element.classList.add("py-3");  //py-3 is a Bootstrap spacing class. 

    element.classList.add("fw-bold");       //fw-bold is a Bootstrap class used to make text bold.
                                     
});


// ========================================
// 7. Convert HTMLCollection to Array
// ========================================

let skills = Array.from( document.getElementsByClassName("list-group-item"));

cl(skills);


// ========================================
// 8. Add Border to All Items
// ========================================

skills.forEach(function (element) {

    element.style.borderBottom = "2px solid #ddd";

});


// ========================================
// 9. Change Frontend Items
// ========================================

let frontendSkills = document.querySelectorAll( "#frontend li");

frontendSkills.forEach(function (element) {

    element.style.color = "blue";
    element.style.backgroundColor = "#eef4ff";

});


// ========================================
// 10. Change Backend Items
// ========================================

let backendSkills = document.querySelectorAll("#backend li");

backendSkills.forEach(function (element) {

    element.style.color = "darkgreen";
    element.style.backgroundColor = "#edfff0";

});


// ========================================
// 11. Box Styling
// ========================================

let titleBox = document.querySelector("#titleBox");

titleBox.style.backgroundColor = "#f3e8ff";
titleBox.style.border = "3px solid purple";


// ========================================
// 12. Change Text using innerHTML
// ========================================

let subTitle = document.querySelector("#subTitle");

subTitle.innerHTML ="Learning <strong>DOM</strong> with JavaScript";


// ========================================
// 13. Add Class using classList
// ========================================

titleBox.classList.add("shadow-lg"); //Adds a large shadow.
titleBox.classList.add("rounded-4"); //Makes the corners rounded.


// ========================================
// 14. Select First Backend Item
// ========================================

let firstBackend = document.querySelector( "#backend li:first-child");

cl(firstBackend);

firstBackend.style.backgroundColor = "#212529";
firstBackend.style.color = "white";


// ========================================
// 15. Select Last Frontend Item
// ========================================

let lastFrontend = document.querySelector("#frontend li:last-child");

cl(lastFrontend);

lastFrontend.style.backgroundColor = "#fff0f6";
lastFrontend.style.color = "deeppink";