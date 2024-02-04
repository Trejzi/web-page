window.addEventListener('DOMContentLoaded', function(){
    const postList = document.querySelectorAll('.post');
    const buttonContainer = document.querySelector('.button-container');
   
    let currentPage = 1;
    let limit = 9;


    function listButtons(page){
        var previousBtn = document.createElement('button');
        previousBtn.innerText = "< Previous";
        previousBtn.addEventListener('click', function(){
            if(currentPage > 1){
            postList.forEach(function(e){
                e.style.display="none";                
            })
            currentPage--;
            displayList(currentPage,postList);
        }
    });
        buttonContainer.appendChild(previousBtn);


        numberButtons=postList.length/limit;
        for(i=0;i<numberButtons;i++){
            let newBtn=document.createElement('button');
            newBtn.innerText = (i+1);
            newBtn.addEventListener('click', function () {
                postList.forEach(function(e){
                    e.style.display="none";                
                });
                currentPage= newBtn.innerText;
               displayList(currentPage,postList);
            });
            console.log("Current page "+ currentPage);
          
            buttonContainer.appendChild(newBtn);
        }
    

        var nextBtn = document.createElement('button');
        nextBtn.innerText = "Next >";
        nextBtn.addEventListener('click', function(){
            if(currentPage <(postList.length/limit)){
            postList.forEach(function(e){
                e.style.display="none";                
            })
            currentPage++;
            displayList(currentPage,postList);
        }});
        buttonContainer.appendChild(nextBtn);

    }
    
    function displayList(page,list){
        let loopStart = limit*(page-1);
        for(i=loopStart;i<loopStart+limit;i++){
            if(list[i]){
            list[i].style.display = "initial";
        }
    }
    }

    
    listButtons(currentPage);
    displayList(currentPage,postList);

});
    