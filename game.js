let gameSeq=[];
let userSeq=[];
let numbers=[];

let btns= ["red","yellow","green","purple"]

let started=false;
let level=0;

let h2 = document.querySelector("h2");
let h3= document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("key pressed game started");
        started=true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText= `level ${level}`;

    //choosing random colour
    let randIdx =Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn =document.querySelector(`.${randColor}`);
    console.log(randBtn);
    

    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(idx){
    //let idx = level-1;

    if(userSeq[idx]=== gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
            }
    }
    else{
        h2.innerText = `GAME OVER! Your score was ${gameSeq.length-1} \n Press any to start.`;

        numbers.push(gameSeq.length-1);
        let higSc=Math.max(...numbers);
        h3.innerText =`HIGEST SCORE : ${higSc}`;

        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        }, 150);

        reset();

        



    }
}

function btnPress(){
    //console.log(this);
    let btn=this;
    btnFlash(btn);//to flash the button click by user

    userColor =btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length-1);

}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}


