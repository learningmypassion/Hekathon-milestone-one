"use strict";
let edubtn = document.getElementById("edubtn");
let expbtn = document.getElementById("expbtn");
let skibtn = document.getElementById("skibtn");
let edusection = document.getElementById("edusection");
let Experience = document.getElementById("Experience");
let Skills = document.getElementById("Skills");
edubtn?.addEventListener("click", () => {
    if (edusection.style.display == "block") {
        edusection.style.display = "none";
    }
    else {
        edusection.style.display = "block";
    }
});
expbtn?.addEventListener("click", () => {
    if (Experience.style.display == "block") {
        Experience.style.display = "none";
    }
    else {
        Experience.style.display = "block";
    }
});
skibtn?.addEventListener("click", () => {
    if (Skills.style.display == "block") {
        Skills.style.display = "none";
    }
    else {
        Skills.style.display = "block";
    }
});
