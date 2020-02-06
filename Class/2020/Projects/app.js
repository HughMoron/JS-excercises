let hero = {
    top: 77,
    left: 47
};

let missiles = [];

document.onkeydown = (e) => {
    // keycode left = 37 right = 39
    console.log(e.key)
    // Move left
    if (e.key === "ArrowLeft") {
        hero.left -= 1;
        moveHero()
        // Move right
    } else if (e.key === "ArrowRight") {
        hero.left += 1;
        moveHero()
    }
    // Shoot
    else if (e.key === " ") {
        missiles.push({
            left: hero.left-9,
            top: hero.top-8
        })
        console.log(missiles)
        drawMissiles()
    }
}

// MOVE HERO
function moveHero() {
    document.getElementById("hero").style.left = hero.left + "vw";
}

// DRAW MISSILES
function drawMissiles(){
    // alert("No");
    document.getElementById("missiles").innerHTML = ""
    for(let missile = 0; missile < missiles.length; missile++){
        document.getElementById("missiles").innerHTML += `<div><p class='missile' style='left:${missiles[missile].left}vw ; top:${missiles[missile].top}vh;'>code</p></div>`;
    }
}

function moveMissiles(){
    for(let missile = 0; missile < missiles.length; missile++){
        missiles[missile].top -= 5; 
    }
}


// GAME LOOP
function gameLoop(){
    setTimeout(gameLoop,100)
    moveMissiles();
    drawMissiles()
}

gameLoop()