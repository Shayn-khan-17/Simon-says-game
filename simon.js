let gamesseq=[]; 
let usersq=[];
 
let btns=[ "red","yellow","green","purple"];
 
let started=false;
let level=0;

let h2=document.querySelector("h2");


document.addEventListener("keypress",function(){
   if(started==false){
    console.log("Game is started");
    started=true;

    levelup();
   }
});

function levelup(){
    usersq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randidx=Math.floor(Math.random()*3);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`);

    gamesseq.push(randcolor);
    console.log(gamesseq);
    gameflash(randbtn);

    gameflash(randbtn);
}

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300);
}
function checkans(idx){
    
    if(usersq[idx]===gamesseq[idx]){
        if(usersq.length==gamesseq.length){
           setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`Game Over!Your score was <b> ${level}</b> <Br>Press any key to restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },350)
        reset();
    }
}

function btnpress(){

    let btn=this;
    userflash(btn);

    usercolor=btn.getAttribute("id");
    usersq.push(usercolor);
    checkans(usersq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    gamesseq=[];
    usersq=[];
    level=0;
}