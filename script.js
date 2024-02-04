window.addEventListener('DOMContentLoaded', function(){
    
const navBtn = document.querySelector("#navButton");

navBtn.addEventListener("click", function(){
    const mainMenu = document.querySelector("#mainMenu");
    const mainMenuContainer =document.querySelector(".expandable");

    const mainMenuRect = mainMenu.getBoundingClientRect();
    mainMenuContainer.style.height= mainMenuRect.height + 'px';
    navBtn.innerHTML = "X";

});

window.addEventListener('click', function(event){
   const listElements = event.target.closest('#mainMenu');
   let pageWidth = document.documentElement.clientWidth;

    if(pageWidth < 1000){
        if(! listElements){
            const mainMenuContainer=document.querySelector(".expandable");

            if (mainMenuContainer.offsetHeight !== 0) {
                mainMenuContainer.style.height = '0px';
                navBtn.innerHTML = "☰";
            }
            
        }
    }


});
    
});