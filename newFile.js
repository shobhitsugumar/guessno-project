'use strict';
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'Enter a Value ';
  } else if (guess === secretNum) {
    document.querySelector('.message').textContent = 'Correct Answer';
  } else {
    if (guess > secretNum) {
      document.querySelector('.message').textContent = 'The Value is too High';
    } else if (guess < secretNum) {
      document.querySelector('.message').textContent = 'The value is too Low';
    } else {
      document.querySelector('.message').textContent = 'Correct Answer';
    }
  }
});
