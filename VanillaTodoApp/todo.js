const toDoList = document.querySelector('.todo-list');
const inputForm = document.querySelector('.input-form');
const input = inputForm.querySelector('input');

let listArr = [];
let idNum = -1;

function makeID() {
  idNum += 1;
  return idNum;
}

function setObject(id, todoWhat) {
  let todo = {
    id : id,
    what : todoWhat
  };
  return todo;
}

function makeList(text, id) {
  //리스트에 들어갈 li를 만드는 함수
  const li = document.createElement("li");
  li.id = id;

  const span = document.createElement("span");
  span.innerText = text;

  const checkBtn = document.createElement("button");
  checkBtn.innerText = "완료";
  removeToList(checkBtn);

  li.appendChild(checkBtn);
  li.appendChild(span);

  return li;
}

function addToList() {
  //todo-list에 할 일 목록을 저장하는 함수
  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const id = makeID();
    toDoList.appendChild(makeList(input.value, id));
    listArr.push(setObject(id, input.value));
    input.value = "";
  })
}

function removeToList(checkBtn) {
  //todo-list에 끝난 할일을 삭제하는 함수
  checkBtn.addEventListener('click', (event) => {
    const btn = event.toElement;
    const li = btn.parentElement;
    const index = listArr.findIndex((list) => {
      return li.id === `${list.id}`
    });
    listArr.splice(index, index);
    toDoList.removeChild(li);
  })
}

function getListFromStorage() {
  //localStorage로부터 list를 가져오는 함수
  
}

function removeListFromStorage() {
  //list에서 삭제된 리스트를 localstorage에서 삭제하는 함수
}

function setListToStorage() {
  //list에 작성된 list들을 localStorage에 저장하는 함수
  
}

function init() {
    addToList();
}

init();

