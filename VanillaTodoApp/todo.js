const toDoList = document.querySelector('.todo-list');
const inputForm = document.querySelector('.input-form');
const input = inputForm.querySelector('input');

const DATA = 'todoData';

let listArr = [];
let idNum = -1;

function makeID() {
  //id번호를 발급하는 함수
  idNum += 1;
  return idNum;
}

function setObject(id, todoWhat) {
  //listArr에 들어갈 객체를 생성하는 메서드
  let todo = {
    id : id,
    what : todoWhat
  };
  return todo;
}

function checkToDoList() {
  //처음에 애플리케이션을 시작했을때에 localstorage에 todoData에 값이 존재유무를 확인하는 메서드
  const data = localStorage.getItem(DATA);
  if(data === null){
    addToList();
  } else {
    listArr = JSON.parse(data);
    listArr.forEach((list) => {
      toDoList.appendChild(makeList(list.what, list.id));
    });
    addToList();
  }
}

function makeList(text, id) {
  //리스트에 들어갈 li를 만드는 함수
  const li = document.createElement("li");
  li.id = id;
  li.classList.add('list-element');
  const span = document.createElement("span");
  span.innerText = text;
  const checkBtn = document.createElement("button");
  const i = document.createElement('i');
  i.classList.add('fas');
  i.classList.add('fa-check-circle');
  i.style.content = '\f058';
  checkBtn.appendChild(i);
  
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
    setListToStorage(listArr);
    input.value = "";
  })
}

function removeToList(checkBtn) {
  //todo-list에 끝난 할일을 삭제하는 함수
  checkBtn.addEventListener('click', (event) => {
    let btn, li, i;

    if(event.toElement.localName === 'i'){
      i = event.toElement;
      btn = i.parentElement;
      li = btn.parentElement;
    }
    else if(event.toElement.localName === 'button'){
      btn = event.toElement;
      li = btn.parentElement;
    }
    
    //listArr에서 데이터를 삭제하는 방법
    const result = listArr.filter((list) => {
      return `${list.id}` !== li.id;
    });

    setListToStorage(result);
    listArr = result;
    toDoList.removeChild(li);
  })
}

function getListFromStorage() {
  //localStorage로부터 list를 가져오는 함수
  const listData = localStorage.getItem(DATA);
  return JSON.parse(listData);
}

function setListToStorage(list) {
  //list에 작성된 list들을 localStorage에 저장하는 함수
  localStorage.setItem(DATA, JSON.stringify(list));
}

function init() {
    checkToDoList();
}

init();

