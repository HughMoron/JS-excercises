function youWon() {
    if (score == 20) {
        document.getElementById("game").remove();
        document.getElementById("go").remove();
        document.getElementById("youWon").style.display = "flex"

        // MUSICPLAYER
        song.pause()
        song2.play();
    }
}

document.querySelector(".highscore").addEventListener("click", highscore)

function highscore() {
    document.getElementById("youWon").remove()
    let legend = document.getElementById("legend")
    legend.style.display = "flex";
    
    event.preventDefault()
    let div = document.createElement("div");
    div.id = "score";
    let tn = document.createTextNode(`Your Score was: ${score} Points! Enter your Name to become a DCI Legend!`)
    div.appendChild(tn)
    console.log(legend.childNodes)
    legend.insertBefore(div,legend.childNodes[1])
    
}
    