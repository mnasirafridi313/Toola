// ==============================
// Toola v0.2 JavaScript
// ==============================

const menuButton=document.getElementById("menuButton");
const navigation=document.getElementById("navigation");
const search=document.getElementById("search");
const darkModeButton=document.getElementById("darkModeButton");

if(menuButton&&navigation){

menuButton.addEventListener("click",function(){

if(navigation.style.display==="flex"){

navigation.style.display="none";

}else{

navigation.style.display="flex";
navigation.style.flexDirection="column";

}

});

}

if(search){

search.addEventListener("keyup",function(){

const value=search.value.toLowerCase();

document.querySelectorAll(".card").forEach(function(card){

card.style.display=card.innerText.toLowerCase().includes(value)?"block":"none";

});

});

}

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

const calculateAge=document.getElementById("calculateAge");

if(calculateAge){

calculateAge.addEventListener("click",function(){

const input=document.getElementById("birthDate").value;

const result=document.getElementById("ageResult");

if(input===""){

result.innerHTML="Please select your birth date.";

return;

}

const birth=new Date(input);
const today=new Date();

if(birth>today){

result.innerHTML="Birth date cannot be in the future.";

return;

}

let years=today.getFullYear()-birth.getFullYear();
let months=today.getMonth()-birth.getMonth();
let days=today.getDate()-birth.getDate();

if(days<0){

months--;

days+=new Date(today.getFullYear(),today.getMonth(),0).getDate();

}

if(months<0){

years--;

months+=12;

}

result.innerHTML="Your Age: <strong>"+years+"</strong> Years <strong>"+months+"</strong> Months <strong>"+days+"</strong> Days";

});

}

const copyAge=document.getElementById("copyAge");

if(copyAge){

copyAge.addEventListener("click",function(){

const text=document.getElementById("ageResult").innerText;

navigator.clipboard.writeText(text);

copyAge.textContent="Copied!";

setTimeout(function(){

copyAge.textContent="Copy Result";

},2000);

});

  }
