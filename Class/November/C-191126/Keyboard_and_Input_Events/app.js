const form = document.querySelector("form");
const taskInput = document.getElementById(`task`);
const heading = document.querySelector(`h5`);
const select = document.querySelector("select");


// Clear Input
taskInput.value = ``;

//Submit
//form.addEventListener(`submit`, runEvent);

//Keydown
//taskInput.addEventListener(`keydown`,runEvent)

//Keypress
//taskInput.addEventListener(`keypress`,runEvent);

//Focus
//taskInput.addEventListener(`focus`,runEvent);

//Blur
//taskInput.addEventListener(`blur`,runEvent);

//Change
select.addEventListener("change",runEvent);

// Event Handler
function runEvent(e){
       console.log(`EVENT TYPE: ${e.type} Value: ${e.target.value}`);
       //heading.innerText = e.target.children[0].innerText;
       //e.preventDefault();
    }


