let menu=document.querySelector(".menu-icon");
let sidebar=document.querySelector(".side-bar");
let container=document.querySelector(".container");

menu.onclick=function(){
   sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}

