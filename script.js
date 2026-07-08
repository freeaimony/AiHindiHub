function toggleDarkMode(){
document.body.classList.toggle("dark");
}

function searchSite(){
let q=document.getElementById("searchInput").value.toLowerCase();

if(q.includes("chatgpt")){
alert("ChatGPT article coming soon!");
}else if(q.includes("gemini")){
alert("Google Gemini article coming soon!");
}else{
alert("More articles will be added soon.");
}
}
