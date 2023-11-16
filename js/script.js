const navbar = document.querySelector(".navbar-nav");
const menu = document.querySelector("#menu");

// Event untuk menampilkan sidebar menu
menu.addEventListener("click", function(){
    navbar.classList.toggle("active");
})

// Event untuk menghilangkan sidebar menu selain klik hamburger menu
document.addEventListener("click", function(e){
    if(!menu.contains(e.target) && !navbar.contains(e.target)){
        navbar.classList.remove("active");
    }
})