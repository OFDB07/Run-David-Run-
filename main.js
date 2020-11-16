var david = document.getElementById("david");
var block = document.getElementById("block");
var counter=0; 
var currentBlocks = [];

function jump(){
    if(david.classList != "animate"){
    david.classList.add("animate");
    }
    setTimeout(function(){
        david.classList.remove("animate");
    },500);
}

var checkDead = setInterval(function() {
    let davidTop = parseInt(window.getComputedStyle(david).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && davidTop>=130){
        block.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);
