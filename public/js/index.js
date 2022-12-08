const headerUserNameElement = document.querySelector('.user');
const userNameElement = document.querySelector('#name');

const localUserName = localStorage.getItem('userName');

const setUserNameInnerHtml = (name) => {
  headerUserNameElement.innerHTML = '${name} <span>님</span>';
  userNameElement.textContent = name;
};

if (localUserName) {
  setUserNameInnerHtml(localUserName);
}

userNameElement.onclick = () => {
  const userName = prompt('이름을 입력해 주세요');
  localStorage.setItem('userName', userName);

  setUserNameInnerHtml(userName);
};

const userEmailElement = document.querySelector('#email');
const localUserEmail = localStorage.getItem('userEmail');

const userNumberElement = document.querySelector('#number');
const localUserNumber = localStorage.getItem('userNumber');

const setUserEmailInnerHtml = (email) => {
  userEmailElement.textContent = email;
};

if (localUserEmail) {
  setUserEmailInnerHtml(localUserEmail);
}

userEmailElement.onclick = () => {
  const userEmail = prompt('이메일 주소를 입력해 주세요');
  localStorage.setItem('userEmail', userEmail);

  setUserEmailInnerHtml(userEmail);
};

const setUserNumberInnerHtml = (number) => {
  userNumberElement.textContent = number;
};

if (localUserNumber) {
  setUserNumberInnerHtml(localUserNumber);
}

userNumberElement.onclick = () => {
  const userNumber = prompt('학번을 입력해 주세요');
  localStorage.setItem('userNumber', userNumber);

  setUserNumberInnerHtml(userNumber);
};

