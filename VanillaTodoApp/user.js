const inputNameForm = document.querySelector('.input-name');
const name = inputNameForm.querySelector('.name');
const h1 = document.querySelector('h1');
const wrap = document.querySelector('.wrap');

const USER = 'currentUser';
const USER_EXIST = 'exist';

function checkUserName() {
  const userName = localStorage.getItem(USER);
  const userExist = localStorage.getItem(USER_EXIST);
  if(userName === null && (userExist === false || userExist === null)){
    setUserName();
  }
  else {
    setUserNameToTitle(userName, userExist);
  }
}

function setUserName() {
  wrap.removeChild(inputForm);
  inputNameForm.addEventListener('submit', (event) => {
    event.preventDefault();
    localStorage.setItem(USER, name.value);
    localStorage.setItem(USER_EXIST, true);

    const user = localStorage.getItem(USER);
    const exist = localStorage.getItem(USER_EXIST);
    if (user === null && (exist === false || exist === null)) {
      alert('유저 정보를 저장하던 중에 오류발생!!');
    }
    else {
      setUserNameToTitle(user, exist);
      wrap.removeChild(inputNameForm);
      wrap.appendChild(inputForm);
    }
  });
}

function setUserNameToTitle(user, exist) {
  h1.innerText = `${user}의 `+h1.innerText;
  inputNameForm.hidden = exist;
  wrap.removeChild(inputNameForm);
  wrap.appendChild(inputForm);
}

function init() {
  checkUserName();
  checkToDoList();
}

init();