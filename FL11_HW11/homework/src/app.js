let rootNode = document.getElementById('root');

// Your code goes here
let addButtone = document.getElementById('add_icon');
let taskList = document.getElementById('toDoList');
let addInput = document.getElementById('add_action');
let checkbox = document.querySelectorAll('input[type="checkbox"');

addButtone.onclick = function() {
    if (addInput.value !== '') {
        let item = document.createElement('div');
        item.classList.add('inline-item');
        item.innerHTML = `<div class="deal hidden">
            <input type="text" class="edition">
            <i class="material-icons save">save</i>
        </div>
        <div class='deal edit'>
        <div class='task'>
            <input type="checkbox">
            <li class="list-item">${addInput.value}</li>
            <i class="material-icons edit">create</i>
        </div>
            <i class="material-icons delete">delete</i>
        </div>`;
        taskList.appendChild(item);
        addInput.value = '';
    }
}

document.addEventListener('change', function(e) {
    if (e.target.type === 'checkbox'){
        e.target.disabled = true;
    } 

});


var btns = document.getElementsByClassName('intro__btn');
var par = document.getElementsByClassName('main');
btns[0].onclick = function() {
  par[0].classList.add("main--main-bg");
}
btns[1].onclick = function() {
  par[0].classList.remove("main--main-bg");
}


let editIcon = document.getElementsByClassName('edit_icon');
let editInput = document.getElementsByClassName('edit_input');
let saveE = document.getElementsByClassName('save');
let chek =document.getElementsByClassName('checkbox');
let del = document.getElementsByClassName('delete')
let out=document.getElementsByClassName('out')
editIcon[0].onclick = function() {
  editInput[0].classList.remove("edit");
  saveE[0].classList.remove("edit");
  chek[0].classList.add("edit");
  editIcon[0].classList.add("edit");
  del[0].classList.add("edit");

}
saveE[0].onclick = function(){
editInput[0].classList.add("edit");
  saveE[0].classList.add("edit");
  chek[0].classList.remove("edit");
  editIcon[0].classList.remove("edit");
  del[0].classList.remove("edit");
  out[0].innerHTML=editInput[0];
}


editIcon[1].onclick = function() {
  editInput[1].classList.remove("edit");
  saveE[1].classList.remove("edit");
  chek[1].classList.add("edit");
  editIcon[1].classList.add("edit");
  del[1].classList.add("edit");
}
saveE[1].onclick = function(){
editInput[1].classList.add("edit");
  saveE[1].classList.add("edit");
  chek[1].classList.remove("edit");
  editIcon[1].classList.remove("edit");
  del[1].classList.remove("edit");
}
editIcon[2].onclick = function() {
  editInput[2].classList.remove("edit");
  saveE[2].classList.remove("edit");
  chek[2].classList.add("edit");
  editIcon[2].classList.add("edit");
  del[2].classList.add("edit");
}
saveE[2].onclick = function(){
editInput[2].classList.add("edit");
  saveE[2].classList.add("edit");
  chek[2].classList.remove("edit");
  editIcon[2].classList.remove("edit");
  del[2].classList.remove("edit");
}
editIcon[3].onclick = function() {
  editInput[3].classList.remove("edit");
  saveE[3].classList.remove("edit");
  chek[3].classList.add("edit");
  editIcon[3].classList.add("edit");
  del[3].classList.add("edit");
}
saveE[3].onclick = function(){
editInput[3].classList.add("edit");
  saveE[3].classList.add("edit");
  chek[3].classList.remove("edit");
  editIcon[3].classList.remove("edit");
  del[3].classList.remove("edit");
}
editIcon[4].onclick = function() {
  editInput[4].classList.remove("edit");
  saveE[4].classList.remove("edit");
  chek[4].classList.add("edit");
  editIcon[4].classList.add("edit");
  del[4].classList.add("edit");
}
saveE[4].onclick = function(){
editInput[4].classList.add("edit");
  saveE[4].classList.add("edit");
  chek[4].classList.remove("edit");
  editIcon[4].classList.remove("edit");
  del[4].classList.remove("edit");
}
editIcon[5].onclick = function() {
  editInput[5].classList.remove("edit");
  saveE[5].classList.remove("edit");
  chek[5].classList.add("edit");
  editIcon[5].classList.add("edit");
  del[5].classList.add("edit");
}
saveE[5].onclick = function(){
editInput[5].classList.add("edit");
  saveE[5].classList.add("edit");
  chek[5].classList.remove("edit");
  editIcon[5].classList.remove("edit");
  del[5].classList.remove("edit");
}
editIcon[6].onclick = function() {
  editInput[6].classList.remove("edit");
  saveE[6].classList.remove("edit");
  chek[6].classList.add("edit");
  editIcon[6].classList.add("edit");
  del[6].classList.add("edit");
}
saveE[6].onclick = function(){
editInput[6].classList.add("edit");
  saveE[6].classList.add("edit");
  chek[6].classList.remove("edit");
  editIcon[6].classList.remove("edit");
  del[6].classList.remove("edit");
}
editIcon[7].onclick = function() {
  editInput[7].classList.remove("edit");
  saveE[7].classList.remove("edit");
  chek[7].classList.add("edit");
  editIcon[7].classList.add("edit");
  del[7].classList.add("edit");
}
saveE[7].onclick = function(){
editInput[7].classList.add("edit");
  saveE[7].classList.add("edit");
  chek[7].classList.remove("edit");
  editIcon[7].classList.remove("edit");
  del[7].classList.remove("edit");
}
editIcon[8].onclick = function() {
  editInput[8].classList.remove("edit");
  saveE[8].classList.remove("edit");
  chek[8].classList.add("edit");
  editIcon[8].classList.add("edit");
  del[8].classList.add("edit");
}
saveE[8].onclick = function(){
editInput[8].classList.add("edit");
  saveE[8].classList.add("edit");
  chek[8].classList.remove("edit");
  editIcon[8].classList.remove("edit");
  del[8].classList.remove("edit");
}
editIcon[9].onclick = function() {
  editInput[9].classList.remove("edit");
  saveE[9].classList.remove("edit");
  chek[9].classList.add("edit");
  editIcon[9].classList.add("edit");
  del[9].classList.add("edit");
}
saveE[9].onclick = function(){
editInput[9].classList.add("edit");
  saveE[9].classList.add("edit");
  chek[9].classList.remove("edit");
  editIcon[9].classList.remove("edit");
  del[9].classList.remove("edit");
}