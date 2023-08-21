// document.querySelectorAll("button")[0].addEventListener("click",function (){
//     var audio = new Audio('sounds/crash.mp3');
//     audio.play();
//     ="white";
// });

// document.querySelectorAll("button")[1].addEventListener("click",function (){
//     var audio = new Audio('sounds/kick-bass.mp3');
//     audio.play();
//     ="white";
// });

// document.querySelectorAll("button")[2].addEventListener("click",function (){
//     var audio = new Audio('sounds/tom-1.mp3');
//     audio.play();
//     ="white";
// });

// document.querySelectorAll("button")[3].addEventListener("click",function (){
//     var audio = new Audio('sounds/tom-2.mp3');
//     audio.play();
//     ="white";
// });

// document.querySelectorAll("button")[4].addEventListener("click",function (){
//     var audio = new Audio('sounds/tom-3.mp3');
//     audio.play();
//     ="white";
// });

// document.querySelectorAll("button")[5].addEventListener("click",function (){
//     var audio = new Audio('sounds/tom-4.mp3');
//     audio.play();
//     ="white";
// });

// document.querySelectorAll("button")[6].addEventListener("click",function (){
//     var audio = new Audio('sounds/snare.mp3');
//     audio.play();
//     ="white"; 
// });


// or you can do this by using anonymus function defining the function in the document

// or you can do this by switch case create an array for every idx and take its inner html

// adding event listener to keyboard

// document.addEventListener("keypress",function(event){
//     var key=event.key;
// switch(key){
//     case "w":
//         var audio = new Audio('sounds/crash.mp3');
//         audio.play();
//         ="white";  
//         break;

//     case "a":
//         var audio = new Audio('sounds/kick-bass.mp3');
//         audio.play();
//         ="white";
    
//     case "s":
//         var audio = new Audio('sounds/tom-1.mp3');
//         audio.play();
//         ="white";
//     case "d":
//         var audio = new Audio('sounds/tom-2.mp3');
//         audio.play();
//         ="white";
    
//     case "j":
//         var audio = new Audio('sounds/tom-3.mp3');
//         audio.play();
//         ="white";
//     case "k":
//          var audio = new Audio('sounds/tom-4.mp3');
//          audio.play();
//          ="white";
//     case "l":  
//     var audio = new Audio('sounds/snare.mp3');
//     audio.play();
//     ="white"; 
        
//     default : console.log(event); 
// }
// });

var length=document.querySelectorAll("button").length;

for(let i=0;i<length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       
        playsound(this.innerHTML);

        // but i also want an animation
        buttonAnimation(this.innerHTML);
    });


}

document.addEventListener("keypress",function(event){
    playsound(event.key);
    buttonAnimation(event.key);
});


function playsound(key){
    switch(key){
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            
            break;
    
        case "a":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        
        case "s":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        
        case "j":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "k":
             var audio = new Audio('sounds/tom-4.mp3');
             audio.play();
             break;
        case "l":  
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
        break;
            
        default : console.log(key); 
    }
}

function buttonAnimation(key){
document.querySelector("."+key).classList.add("pressed");
setTimeout(() => {
    document.querySelector("."+key).classList.remove("pressed");  
}, 50);
}


