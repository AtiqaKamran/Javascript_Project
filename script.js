var themeBtn = document.getElementById("themeBtn");
var changeTextBtn = document.getElementById("changeTextBtn");
var heroText = document.getElementById("heroText");
var toggleBtn = document.getElementById("toggleBtn");
var movieContainer = document.querySelector(".movieContainer");
var navLinks = document.querySelectorAll("nav ul li a");

/* THEME SWITCH USING CLASS */
themeBtn.addEventListener("click", function(){
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeBtn.innerText = "Dark Mode";
    } 
    else{
        themeBtn.innerText = "Light Mode";
    }
});

/* HERO TEXT CHANGE */
changeTextBtn.addEventListener("click", function(){
    heroText.innerText = "Enjoy Watching on Netflix!";
});

/* SHOW / HIDE MOVIES */
toggleBtn.addEventListener("click", function(){
    if(movieContainer.style.display === "none"){
        movieContainer.style.display = "grid";
        toggleBtn.innerText = "Hide Movies";
    }
    else{
        movieContainer.style.display = "none";
        toggleBtn.innerText = "Show Movies";
    }
});

/* ACTIVE NAVBAR */
for(var i = 0; i < navLinks.length; i++){
    navLinks[i].addEventListener("click", function(){
        for(var j = 0; j < navLinks.length; j++){
            navLinks[j].classList.remove("active");
        }
        this.classList.add("active");
    });
}