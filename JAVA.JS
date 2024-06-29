let yourscore=0;
let compscore=0;
let msg=document.querySelector(".msg")
let you=document.querySelector(".yourscore")
let comp=document.querySelector(".compscore")
let getComputerChoice=()=>{
    let options=["rock", "paper", "scissors"]
    const randomIdx=Math.floor(Math.random()*3)
    return options[randomIdx]
}
const drawgame=()=>{
  console.log("game was a draw")
  msg.innerText="Game was Draw"
   msg.style.backgroundColor="#081b31";
}
const playgame=(userchoice)=>{
    console.log("user choice=", userchoice);
    let compchoice=getComputerChoice();
    console.log("comp choice=",compchoice);

    if(userchoice===compchoice){
        drawgame()
    }else {
      let userwin=true;
      if(userchoice==="rock"){
        userwin =compchoice === "paper" ? false:true;
      }else if (userchoice ==="paper"){
        userwin=compchoice === "scissors" ? false:true;
      }else {
            userwin=compchoice === "rock" ? false:true;
    }
    showwinner(userwin,userchoice,compchoice)
}
}
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
      yourscore++;
      you.innerText=yourscore;
        msg.innerText=`you win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green"
    }else{
      compscore++;
      comp.innerText=compscore;
       msg.innerText=`you lose! ${compchoice} beats your ${userchoice} `;
        msg.style.backgroundColor="red"
    }
}
let choices=document.querySelectorAll(".r")
choices.forEach((r)=>{
     r.addEventListener("click",()=>{
      let userchoice=r.getAttribute("id");
      playgame(userchoice);
     })
})