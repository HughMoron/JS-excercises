let audioplayer = document.querySelector(".audioplayer")

console.log(audioplayer)
audioplayer.addEventListener("click",(e)=>{
    console.log(e.target)
    let song = document.getElementById("song")
    if(e.target.id=="play"){
        e.target.classList = "playerButton fas fa-pause";
        e.target.id = "stop"
        song.autoplay = true
        song.load()
    }
    else if(e.target.id=="stop"){
        e.target.classList = "playerButton fas fa-play";
        e.target.id = "play"
        song.autoplay = false
        song.load()
    }
})