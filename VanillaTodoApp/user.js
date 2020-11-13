const inputNameForm = document.querySelector('.input-name');
const name = inputNameForm.querySelector('.name');
const h1 = document.querySelector('h1');
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
    }
  });
}

function setUserNameToTitle(user, exist) {
  h1.innerText = `${user}의 `+h1.innerText;
  inputNameForm.hidden = exist;
}

function init() {
  checkUserName();
}

init();