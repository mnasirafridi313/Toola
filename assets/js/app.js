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
