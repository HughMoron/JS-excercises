let view = document.querySelector("#view");

view.onclick = editAble;

function editAble(){
    area=document.createElement('textarea')
    area.className = 'edit';
    area.value = view.innerHTML;
    area.onkeydown = keyDown;
    function keyDown (event){
        if(event.key == 'Shift'){
            this.blur()
        }
    }
    view.replaceWith(area)
    area.focus() //the focus should come at the end
    area.onblur = editDone;
}

function editDone(){
    view.innerHTML = area.value;
    area.replaceWith(view)
}