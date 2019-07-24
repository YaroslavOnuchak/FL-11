let rootNode = document.getElementById('root');
let newAction = document.getElementById('newAction')
let list = document.getElementById('list_main')
let add = document.getElementById('bth_plus')
let delBtn = document.querySelectorAll('.delete')
let editBtns = document.querySelectorAll('.edit')
let elements = document.querySelectorAll('#list_main .list_li');
let checkBtns = document.querySelectorAll('.checkbox')


function createItem(value){
  let li = document.createElement('li')
  let labelChek = document.createElement('label')
  let checkBox =document.createElement('input')
  let checkboxStyl = document.createElement('div')
  let saveBtn = document.createElement('i')  
  let span = document.createElement('span')
  let editBtn = document.createElement('i')
  let delBtn  = document.createElement('i')
  let editInput = document.createElement('input')
  
  li.className = 'list_li'
  li.draggable = true
  labelChek.className = 'labelChek'
  checkBox.type = 'checkbox'
  checkBox.className = 'checkbox'
  checkboxStyl.className = 'checkbox_styl'
  editInput.type = 'text'
  editInput.className = 'hide'
  saveBtn.className = 'material-icons btn_icon save hide'
  saveBtn.innerText = 'save'
  editBtn.className = 'material-icons btn_icon edit'
  editBtn.innerText = 'edit'
  delBtn.className = 'material-icons btn_icon delete'
  delBtn.innerText = 'delete'
  span.innerText = value

  li.addEventListener('drop', drop);
  li.addEventListener('dragstart', dragStart);
  li.addEventListener('dragover', dragOver);
  checkBox.addEventListener('click', checkChek)
  delBtn.addEventListener('click', delRows)
  editBtn.addEventListener('click', editRows)

  li.appendChild(labelChek)
  labelChek.appendChild(checkBox)
  labelChek.appendChild(checkboxStyl)
  li.appendChild(editInput)
  li.appendChild(saveBtn)
  li.appendChild(span)
  li.appendChild(editBtn)
  li.appendChild(delBtn)
  return li 
}
function addRows() {  
  messageFull()
  let text = newAction.value
  let newLi = createItem(text)
  list.appendChild(newLi)
  newAction.value = ''
  inputChek()
}
function maxRows() {
  const controlLength = 9
  let li = document.querySelectorAll('li')
  if(li.length === controlLength ) {
    document.querySelector('.header').removeChild(document.querySelector('.temp'))
    newAction.disabled = false
    add.disabled = false
  } 
}
function editRows(){
  let item = this.parentNode;
  let savBtn = item.querySelector('.save')
  let editInput = item.querySelector('input[type=text]')
  let span = item.querySelector('span')
  let editBtn = item.querySelector('.edit')
  editInput.classList.remove('hide')
  savBtn.classList.remove('hide')
  span.classList.add('hide')
  editBtn.classList.add('hide')
  savBtn.addEventListener('click', saveChang)
  editInput.value = span.innerText

  function saveChang () {
    span.innerText = editInput.value
    editInput.classList.add('hide')
    savBtn.classList.add('hide')
    span.classList.remove('hide')
    editBtn.classList.remove('hide')
  }
}

function delRows () {
  list.removeChild(this.parentNode)
  maxRows()
}

function checkChek () {
  if(this.checked){
    this.disabled = true
  }
}

function inputChek() {
  if(newAction.value === '') {
    add.disabled = true
  } else { 
    add.disabled = false;
  }
}
function messageFull() {
  const maxRow = 9
  let li = document.querySelectorAll('li')
  let p = document.createElement(`p`)
  let parent = document.querySelector('h3').nextElementSibling
  
  p.innerText = `Maximum item per list are created`
    
  if(li.length === maxRow ) {
    newAction.disabled = true
    add.disabled = true
    parent.parentNode.insertBefore(p, parent )
  } 
}

let itemDrag = null;
function dragStart(e) {
    itemDrag = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.outerHTML);
}

function dragOver(e) {
    e.preventDefault();
    this.classList.add('over');
}
function dragEnter(e) {
  e.preventDefault();
  return false
}


function drop(e) {
    if (itemDrag !== this) {
        this.parentNode.removeChild(itemDrag);
        let dropHTML = e.dataTransfer.getData('text/html');
        this.insertAdjacentHTML('beforebegin', dropHTML);
        let dropItem = this.previousSibling;
        dropItem.addEventListener('dragstart', dragStart);
        dropItem.addEventListener('dragover', dragOver);
        dropItem.addEventListener('drop', drop);
    }
    this.classList.remove('over');
    return false;
}
newAction.addEventListener('input', inputChek)
add.addEventListener('click', addRows)
editBtns.forEach( function(item) {
    item.addEventListener('click', editRows)
  }
)
checkBtns.forEach( function(item) {
  item.addEventListener('click', checkChek)
  }
)

delBtn.forEach( function(item) {
  item.addEventListener('click', delRows)
 }
)

elements.forEach(function(item){
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragover', dragOver);
  item.addEventListener('drop', drop);
  }
);