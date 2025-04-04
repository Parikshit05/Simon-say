let gameseq=[];
let userseq=[];
let started = false;
let level = 0;
let btns = ["purple","blue","pink","yellow"];


let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started==false){
        started = true;
        levelUp();
    }
})

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}

function levelUp() {
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIndex = Math.floor(Math.random()*3);
    let randColor = btns[randIndex];
    let randbtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    btnFlash(randbtn);
}

function checkAns(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp,800);
        }
                   
    }
    else{
        h2.innerHTML = `Game Over! Your Score Was <b>${level}</b> <br>Press Any Key To Start`; 
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();
    }
}

function btnPressed(){
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPressed); 
}

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}