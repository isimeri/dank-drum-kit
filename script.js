document.addEventListener("DOMContentLoaded", function(){

    const buttons = document.querySelectorAll(".btn");
    const sounds = document.querySelectorAll("audio");
    buttons.forEach(button => {
        button.addEventListener("click", function(){
            let btnId = button.getAttribute("data-id");
            buttonClick(btnId);
        });
        button.addEventListener("transitionend", function(){
            button.classList.remove("clicked");
        });
    });


    document.addEventListener("keydown", function(e){
        buttonClick(e.code);
    });

    function buttonClick(id){
        
        for(let i=0; i<sounds.length; i++){
            let soundId = sounds[i].getAttribute("data-id");
            let btnId = buttons[i].getAttribute("data-id");
            if(soundId == id){
                sounds[i].play();
            }
            if(btnId == id){
                buttons[i].classList.add("clicked");
            }
        }
    }
});