window.addEventListener("load",() =>{
    const sounds =document.querySelectorAll(".sound");
    const pads=document.querySelectorAll(".pads div");
    const visual=document.querySelector(".visual");
    const colors=[
        "#60d394","#d36060","#c060d3","#d3d160","#d36096","#d37b60","#60c2d3","#81757c","#606bd3"
    ];
    // console.log(sounds[1])

//sound
pads.forEach((pad,index) =>{
    pad.addEventListener("click",function(){
        sounds[index].currentTime=0;
        sounds[index].play();
        createBubble(index);

    });
});
//function for bubbles
const createBubble=index=>{
    const bubble=document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor=colors[index];
    bubble.style.animation=`jump 1s ease`;
    bubble.addEventListener("animationend",function(){
        visual.removeChild(this);
    });
};
});
