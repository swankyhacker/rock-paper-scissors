// Insults,pictures
document.addEventListener("DOMContentLoaded", () => {

    let user = 0;
    let comp = 0;
    const userScore = document.getElementById("userScore");
    const compScore = document.getElementById("compScore");
    const resultMessage = document.getElementById("resultMessage");
    const actionMessage = document.getElementById("actionMessage");
    const divPaper = document.getElementById("paper");
    const divRock = document.getElementById("rock");
    const divScissors = document.getElementById("scissors");

    moves = {
        "s": "Scissors",
        "r": "Rock",
        "p": "Paper"
    }

    divPaper.addEventListener("click", () => {
        game("p", compTurn());
    })

    divRock.addEventListener("click", () => {
        game("r", compTurn());
    })

    divScissors.addEventListener("click", () => {
        game("s", compTurn());
    })

    function compTurn() {
        const choices = ["s", "r", "p"];
        const randomNum = Math.floor(Math.random() * 3);
        return choices[randomNum];
    }

    function game(userChoice, compChoice) {
        switch (userChoice + compChoice) {

            case "rs":
            case "pr":
            case "sp":
                win(userChoice, compChoice);
                break;
            case "sr":
            case "rp":
            case "ps":
                lose(userChoice, compChoice);
                break;
            default:
                draw(userChoice, compChoice);
                break;
        }
    }

    function win(userChoice, compChoice) {
        user += 1;
        userScore.innerHTML = user;
        resultMessage.innerHTML = `Dayam!! ${moves[userChoice]} beat ${moves[compChoice]}!! You won!!`;
        actionMessage.innerHTML = ("Once more,cocky hoe!");
        document.getElementById(moves[userChoice].toLowerCase()).classList.add("green-glow");
        setTimeout(() => {
            document.getElementById(moves[userChoice].toLowerCase()).classList.remove("green-glow")
        }, 300);
    }

    function lose(userChoice, compChoice) {
        comp += 1;
        compScore.innerHTML = comp;
        resultMessage.innerHTML = `Poof!! ${moves[compChoice]} beat ${moves[userChoice]}!! You lost!!`;
        actionMessage.innerHTML = ("See, your waifu ain't real!");
        document.getElementById(moves[userChoice].toLowerCase()).classList.add("red-glow");
        setTimeout(() => {
            document.getElementById(moves[userChoice].toLowerCase()).classList.remove("red-glow")
        }, 300);
    }

    function draw(userChoice, compChoice) {
        resultMessage.innerHTML = "Go home! Draw!!";
        actionMessage.innerHTML = ("Jo mama!");
        document.getElementById(moves[userChoice].toLowerCase()).classList.add("grey-glow");
        setTimeout(() => {
            document.getElementById(moves[userChoice].toLowerCase()).classList.remove("grey-glow")
        }, 300);
    }
})