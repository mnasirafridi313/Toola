const menuButton=document.getElementById("menuButton");
const navigation=document.getElementById("navigation");
const search=document.getElementById("search");

if(menuButton){

menuButton.onclick=function(){

if(navigation.style.display==="flex"){

navigation.style.display="none";

}else{

navigation.style.display="flex";

navigation.style.flexDirection="column";

}

};

}

if(search){

search.addEventListener("keyup",function(){

const value=search.value.toLowerCase();

const cards=document.querySelectorAll(".card");

cards.forEach(function(card){

card.style.display=card.innerText.toLowerCase().includes(value)?"block":"none";

});

});

}
const darkModeButton=document.getElementById("darkModeButton");

if(darkModeButton){

darkModeButton.onclick=function(){

document.body.classList.toggle("darkMode");

if(document.body.classList.contains("darkMode")){

darkModeButton.innerHTML="☀";

}else{

darkModeButton.innerHTML="🌙";

}

};

}
// Age Calculator Function

const calculateAge = document.getElementById("calculateAge");

if(calculateAge){

calculateAge.onclick = function(){

let birthDate = new Date(document.getElementById("birthDate").value);

let today = new Date();

let years = today.getFullYear() - birthDate.getFullYear();

let months = today.getMonth() - birthDate.getMonth();

let days = today.getDate() - birthDate.getDate();


if(days < 0){

months--;

days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();

}


if(months < 0){

years--;

months += 12;

}


document.getElementById("ageResult").innerHTML =
"Your Age: " + years + " Years, " + months + " Months, " + days + " Days";

};

   }
