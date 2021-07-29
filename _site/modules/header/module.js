console.log('hello world');

const textWrapper = document.querySelector('.js-text-wrapper');

function changeItUp() {
  console.log(`it's time to change something radical`);
  textWrapper.classList.toggle('color-red');
  textWrapper.classList.toggle('color-blue');
}
