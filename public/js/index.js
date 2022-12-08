const headerUserNameElement = document.querySelector('.user');
const userNameElement = document.querySelector('.user-name');

const localUserName = localStorage.getItem('userName');

if (localUserName) {
  userNameElement.innerHTML = '${locatUserName} <span>님</span>';
  headerUserNameElement.innerHTML = '${localUserName} <span>님</span>';
}
userNameElement.onclick = () => {
  const userName = prompt('이름을 입력해 주세요');
  localStorage.setItem('userName', userName);

  headerUserNameElement.innerHTML = '${userName} <span>님</span>';
  userNameElement.innerHTML = '${userName} <span>님</span>';
};

