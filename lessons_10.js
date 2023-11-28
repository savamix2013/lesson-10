const prompt = require('prompt-sync')();

function printMessage(message) {
  console.log(message);
}

function scheduleMessage() {
  const delay1 = prompt('Введіть час затримки для першого повідомлення (у мілісекундах): ');
  const secondWord = prompt('Введіть друге слово: ');

  setTimeout(() => {
    printMessage(secondWord);
  }, parseInt(delay1, 10));
}

scheduleMessage();
