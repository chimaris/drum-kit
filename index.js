let audio;
const numberOfButtons = document.querySelectorAll(".drum").length;

for(let i = 0; i < numberOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", clickHandle);
}

function clickHandle() {
    let pressedButton = this.innerHTML;

    if(pressedButton === "w") {
        audio = new Audio('sounds/tom-1.mp3').play();
    }else if(pressedButton === "a"){
        audio = new Audio('sounds/tom-2.mp3').play();
    }else if(pressedButton === "s"){
        audio = new Audio('sounds/tom-3.mp3').play();
    }else if(pressedButton === "d"){
        audio = new Audio('sounds/tom-4.mp3').play();
    }else if(pressedButton === "j"){
        audio = new Audio('sounds/snare.mp3').play();
    }else if(pressedButton === "k"){
        audio = new Audio('sounds/crash.mp3').play();
    }else if(pressedButton === "l"){
        audio = new Audio('sounds/kick-bass.mp3').play();
    }else {
        console.log(pressedButton)
    }

    buttonAnimation(pressedButton);

}

// Playing with keyboard
document.addEventListener("keydown", function(event) {
    let pressedKey = event.key.toLowerCase();

    switch (pressedKey) {
        case "w":
            audio = new Audio('sounds/tom-1.mp3').play();
            break;
        case "a":
            audio = new Audio('sounds/tom-2.mp3').play();
            break;
        case "s":
            audio = new Audio('sounds/tom-3.mp3').play();
            break;
        case "d":
            audio = new Audio('sounds/tom-4.mp3').play();
            break;
        case "j":
            audio = new Audio('sounds/snare.mp3').play();
            break;
        case "k":
            audio = new Audio('sounds/crash.mp3').play();
            break;
        case "l":
            audio = new Audio('sounds/kick-bass.mp3').play();
            break
        default:
            console.log(pressedKey);
            break;
    }
         buttonAnimation(pressedKey);

})

function buttonAnimation(currentKey) {
    const keys = ["w","a","s","j","k","l"];
    if(keys.includes(currentKey)){
        let activeButton = document.querySelector("." + currentKey);
        activeButton.classList.add("pressed");

        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100)
    }
    
}
