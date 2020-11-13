const toDoList = document.querySelector('.todo-list');
const inputForm = document.querySelector('.input-form');
const input = inputForm.querySelector('input');

let listArr = [];

function setListObject() {
  //배열에 들어갈 객체를 생성하는 함수
  
}

function makeList(text) {
  //리스트에 들어갈 li를 만드는 함수
  const li = document.createElement("li");
  li.id

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
    toDoList.appendChild(makeList(input.value));
    input.value = "";
  })
}

function removeToList(checkBtn) {
  //todo-list에 끝난 할일을 삭제하는 함수
  checkBtn.addEventListener('click', (event) => {
    
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

