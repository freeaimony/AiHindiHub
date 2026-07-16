// ==========================
// AIHindiHub Professional JS
// ==========================

// Live Search

const searchInput = document.getElementById("searchInput");

if (searchInput) {

searchInput.addEventListener("keyup", function () {

let filter = searchInput.value.toLowerCase();

let cards = document.querySelectorAll(".article-card");

cards.forEach(function(card){

let text = card.innerText.toLowerCase();

if(text.indexOf(filter) > -1){

card.style.display = "";

}else{

card.style.display = "none";

}

});

});

}

// Back To Top Button

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.right="20px";
topBtn.style.bottom="20px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#2563eb";
topBtn.style.color="#fff";
topBtn.style.fontSize="20px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.boxShadow="0 5px 15px rgba(0,0,0,.2)";

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

};

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// Fade Animation

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll(".feature-card,.article-card").forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition="0.6s";

observer.observe(el);

});

console.log("AIHindiHub Professional Loaded");
