//  1st CHOICE 
document.querySelector(".enter").addEventListener("click", whoWillYouChoose)

function whoWillYouChoose(e) {
    e.target.remove();

    document.querySelector("#playerPick").style.display = "flex";
    e.preventDefault()
}

//  PLAYER PICK
// document.getElementById("playerPick").addEventListener("click",letsGo)

function letsGo(e) {
    // Display change    
    document.getElementById("playerPick").remove()
    document.getElementById("game").style.display = "block";

    // Music start
    let audioplayer = document.getElementById("play")
    audioplayer.classList = "playerButton fas fa-pause";
        audioplayer.id = "stop"
        song.autoplay = true
        song.load()

    // PLAYERS
    // Saf-1 
    if (e.id === "p1") {
        document.getElementById("picked").innerHTML = `<img src="IMG/Invaders/Saf1.png" id="hero" alt="">`
    }
    // DCI
    else if (e.id === "p2") {
        document.getElementById("picked").innerHTML = `<img src="IMG/Invaders/dci.png" id="hero" alt="">`
    }
    // A-Matt
    else if (e.id === "p3") {
        document.getElementById("picked").innerHTML = `<img src="IMG/Invaders/Ahmad.png" id="hero" alt="">`
    }
    event.preventDefault()
}