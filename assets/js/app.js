// ==============================
// Toola v0.2 JavaScript
// ==============================

const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");
const search = document.getElementById("search");
const darkModeButton = document.getElementById("darkModeButton");
const calculateAge = document.getElementById("calculateAge");
const copyAge = document.getElementById("copyAge");

// Mobile Menu
if(menuButton && navigation){

menuButton.addEventListener("click",function(){

if(navigation.style.display==="flex"){

navigation.style.display="none";

}else{

navigation.style.display="flex";
navigation.style.flexDirection="column";

}

});

}

// Live Search
if(search){

search.addEventListener("keyup",function(){

const value=search.value.toLowerCase();

document.querySelectorAll(".card").forEach(function(card){

card.style.display=card.innerText.toLowerCase().includes(value) ? "" : "none";

});

});

}

// Dark Mode
if(darkModeButton){

if(localStorage.getItem("theme")==="dark"){

document.body.classList.add("darkMode");
darkModeButton.textContent="☀";

}

darkModeButton.addEventListener("click",function(){

document.body.classList.toggle("darkMode");

if(document.body.classList.contains("darkMode")){

localStorage.setItem("theme","dark");
darkModeButton.textContent="☀";

}else{

localStorage.setItem("theme","light");
darkModeButton.textContent="🌙";

}

});

}

// Age Calculator
if(calculateAge){

calculateAge.addEventListener("click",function(){

const birthInput=document.getElementById("birthDate");
const result=document.getElementById("ageResult");

if(!birthInput || !result){

alert("Age Calculator HTML is missing.");
return;

}

if(birthInput.value===""){

result.innerHTML="Please select your birth date.";
return;

}

const birth=new Date(birthInput.value);
const today=new Date();

if(isNaN(birth.getTime())){

result.innerHTML="Invalid date.";
return;

}

if(birth>today){

result.innerHTML="Birth date cannot be in the future.";
return;

}

let years=today.getFullYear()-birth.getFullYear();
let months=today.getMonth()-birth.getMonth();
let days=today.getDate()-birth.getDate();

if(days<0){

months--;

const lastMonth=new Date(today.getFullYear(),today.getMonth(),0);
days+=lastMonth.getDate();

}

if(months<0){

years--;
months+=12;

}

result.innerHTML="<strong>Your Age</strong><br><br>"+years+" Years<br>"+months+" Months<br>"+days+" Days";

});

}

// Copy Result
if(copyAge){

copyAge.addEventListener("click",function(){

const result=document.getElementById("ageResult").innerText;

if(result==="") return;

navigator.clipboard.writeText(result);

copyAge.textContent="Copied ✓";

setTimeout(function(){

copyAge.textContent="Copy Result";

},2000);

});

}
