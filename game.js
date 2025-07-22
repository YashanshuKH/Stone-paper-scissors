let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#userscore");
const compscorepara = document.querySelector("#computerscore");

const getcompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawgame = () => {
    msg.innerText = "Game was a draw. Play again!";
    msg.style.backgroundColor = "#081b31";
};

const showwinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerscore++;
        compscorepara.innerText = computerscore;
        msg.innerText = `You lost! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userchoice) => {
    const compchoice = getcompchoice();

    if (userchoice === compchoice) {
        drawgame();
    } else {
        let userwin = false;

        if (
            (userchoice === "rock" && compchoice === "scissors") ||
            (userchoice === "paper" && compchoice === "rock") ||
            (userchoice === "scissors" && compchoice === "paper")
        ) {
            userwin = true;
        }

        showwinner(userwin, userchoice, compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
