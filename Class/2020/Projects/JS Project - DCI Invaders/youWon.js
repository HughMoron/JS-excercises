document.querySelector(".highscore").addEventListener("click", highscore)

document.getElementById("submit").addEventListener("click", storeLocal)

document.querySelector(".restart").addEventListener("click", ()=> location.reload())

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


function highscore() {
    document.getElementById("youWon").remove()
    let legend = document.getElementById("legend")
    legend.style.display = "flex";

    event.preventDefault()
    let div = document.createElement("div");
    div.id = "score";
    let tn = document.createTextNode(`Your Score was: ${score} Points! Enter your Name to become a DCI Legend!`)
    div.appendChild(tn)
    // console.log(legend.childNodes)
    legend.insertBefore(div, legend.childNodes[1])

}

function storeLocal() {
    // localStorage.clear()
    
    const legend = {
        name: document.getElementById("legendName").value,
        score: score}
    let highscores;
    
    if (localStorage.getItem("highscores") === null) {
        highscores = [];
    } else {
        highscores = JSON.parse(localStorage.getItem("highscores"))
    }
    
    highscores.push(legend)
    highscores.sort((a,b) => b.score - a.score)
    highscores.splice(3)
    
    
    localStorage.setItem("highscores",JSON.stringify(highscores))
    
    const highScoreList = document.querySelector(".highScoreList")
    
    highScoreList.innerHTML = 
    highscores.map(leg =>{
      return  `<li>${leg.name}: ${leg.score}</li>`
    }).join("");
    
    console.log(highScoreList)
    console.log(highscores)
    
    document.getElementById("legend").remove()
    document.getElementById("highscores").style.display = "flex"
    event.preventDefault()
}