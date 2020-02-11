let hero = {
    top: 77,
    left: 47
};

let score = 0;

let missiles = [];

let invaders = [{
        top: 10,
        left: 33
    },
    {
        top: 10,
        left: 40
    },
    {
        top: 10,
        left: 47
    },
    {
        top: 10,
        left: 54
    },
    {
        top: 10,
        left: 61
    },
    {
        top: 17,
        left: 33
    },
    {
        top: 17,
        left: 40
    },
    {
        top: 17,
        left: 47
    },
    {
        top: 17,
        left: 54
    },
    {
        top: 17,
        left: 61
    },
    {
        top: 24,
        left: 33
    },
    {
        top: 24,
        left: 40
    },
    {
        top: 24,
        left: 47
    },
    {
        top: 24,
        left: 54
    },
    {
        top: 24,
        left: 61
    },
    {
        top: 31,
        left: 33
    },
    {
        top: 31,
        left: 40
    },
    {
        top: 31,
        left: 47
    },
    {
        top: 31,
        left: 54
    },
    {
        top: 31,
        left: 61
    },
]

document.onkeydown = (e) => {
    // keycode left = 37 right = 39
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
            left: hero.left - 8.5,
            top: hero.top - 14
        })
        drawMissiles()
    }
}

// MOVE HERO
function moveHero() {
    document.getElementById("hero").style.left = hero.left + "vw";
}

// DRAW MISSILES
function drawMissiles() {
    // alert("No");
    document.getElementById("missiles").innerHTML = ""
    for (let missile = 0; missile < missiles.length; missile++) {
        document.getElementById("missiles").innerHTML += `<div><p class='missile' style='left:${missiles[missile].left}vw ; top:${missiles[missile].top}vh;'>code</p></div>`;
    }
}
//  MOVE MISSILES
function moveMissiles() {
    for (let missile = 0; missile < missiles.length; missile++) {
        missiles[missile].top -= 1;
    }
}
//  DRAW INVADERS
function drawInvaders() {
    // alert("No");
    document.getElementById("invaders").innerHTML = ""
    for (let invader = 0; invader < invaders.length; invader++) {
        let invaderElement = document.createElement("img");
        invaderElement.classList = "invader";
        invaderElement.src = `IMG/Invaders/i${invader}.png`
        invaderElement.style.left = `${invaders[invader].left}vw`
        invaderElement.style.top = `${invaders[invader].top}vw`  
        invaderElement.id = `${invader}`

        document.getElementById("invaders").appendChild(invaderElement);
        // document.getElementById("invaders").innerHTML += `<img src="IMG/Invaders/i${invader}.png" class='invader' style='left:${invaders[invader].left}vw ; top:${invaders[invader].top}vh;'>`;
    }
}


//  MOVE INVADERS
function moveInvaders() {
    for (let invader = 0; invader < invaders.length; invader++) {
        // invaders[invader].top += 0.05;   
}
}

//  HIT @ INVADER
function hitDetectionInvader() {
    for (let invader = 0; invader < invaders.length; invader++) {
        for (let missile = 0; missile < missiles.length; missile++) {  
            if(missiles[missile].top === invaders[invader].top){ 
                if(missiles[missile].left>=invaders[invader].left||missiles[missile].left<=invaders[invader].left+1){
                console.log(invaders[invader])
                console.log(missiles[missile])
                invaders.splice(invader,1);
                // document.getElementById(`${invader}`).remove()
                // document.getElementById("invader").classList.add("hit")

                missiles.splice(missile,1);
                score += 10
                console.log(score)
            }  
        }
        }
    }
}


// GAME LOOP
function gameLoop() {
    setTimeout(gameLoop, 150)
    moveMissiles();
    drawMissiles();
    drawInvaders();  
    moveInvaders();
    hitDetectionInvader();
}

gameLoop()