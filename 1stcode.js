//this way of programming is called modular way of programming
//initial value
let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

//Generate Computer Choice
const GenratedCompChoice = () => {
    let options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3); // Math.random => randomly khud se kuch v lega
    //Math.floor=> integer value dega
    return options[randIdx];
}

//Draw Game
const drawGame = () =>{
    msg.innerText="Game was draw. Play Again!";
    msg.style.backgroundColor="black";
};

//Print Winner
const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
       userScore++;
       userScorePara.innerText=userScore;
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}` ;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lost! ${compChoice} beats ${userChoice}` ;
        msg.style.backgroundColor="red";
    }
};

//Take User Choice
const playGame = (userChoice) =>{
    // console.log("user Choice: ",userChoice);
    //Generate Computer choice
    const compChoice = GenratedCompChoice();
    // console.log("Computer Choice: ",compChoice);

    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice === "rock"){
            //scissors,paper
            userWin=compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //rock,scissors
            userWin=compChoice === "scissors" ? false : true;
        }
        else {
            //paper,rock
            userWin=compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

//Use Event
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
