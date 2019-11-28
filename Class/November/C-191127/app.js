/////////////////
// C-191127
/////////////////

///////////
// Click-Background
///////////

const clickItem = document.querySelectorAll('li');

clickItem.forEach(function (item) {
    item.addEventListener("click", (s) => {
        item.style.backgroundColor = "white";
        event.target.style.backgroundColor = "green";
        s.preventDefault();
    });
    item.addEventListener("dblclick", (s) => {
        item.style.backgroundColor = "white";
        s.preventDefault();
    });
});