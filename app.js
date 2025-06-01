let gameSeq=[];
let userSeq=[];
let h2=document.querySelector("h2");
let btns = [ "red","yellow","green","purple"];
let h3=document.querySelector("h3");

let started=false;
let level=0;
document.addEventListener("keypress", function(){
    if(started === false){
        console.log("game started");
        started=true;
        levelUp();
    }
     
})

 function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let highlvl=level;
    h3.innerText=`Highest Score: ${highlvl}`;
    

    let randIdx=Math.floor(Math.random() * 4);
let randColor=btns[randIdx];
let randBtn=document.querySelector(`.${randColor}`);

  gameSeq.push(randColor);
  console.log(gameSeq);
    btnFlash(randBtn);
 }

 function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },100);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp(),1000);
        }
    }
    else{
        h2.innerHTML=`Game over ! <b>Your score was ${level}</b> <br>Press any key to start again`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor="rgb(9, 93, 122)";
        },150);
        reset();
    }
}

function btnPress(){
    console.log(this);
    let btn=this;
    btnFlash(btn);
    let userColor =btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);

}

let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    level=0;
    started=false;
    userSeq=[];
    gameSeq=[];
}  

