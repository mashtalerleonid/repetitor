const subjectsSelect = document.querySelector('#calc-form-subjects');

let k = 0;

const calculatorForm = document.querySelector('.calc-form');
const button = document.querySelector('.calc-form__button');

button.addEventListener('click', function (event) {
  event.preventDefault();
  k = 0;
  const howMuch = document.querySelector(
    '#calc-form__radio-container input:checked',
  );
  const subjectsValue = extractPriceFromValue(subjectsSelect.value);
  const howMuchValue = convertMuchToPrice(howMuch.value);
  const totalSum = subjectsValue * howMuchValue * 4;
  renderSum(totalSum);
});

function extractPriceFromValue(str) {
  const price = str.match(/:\d+/);
  if (price) {
    return Number(price[0].slice(1)) || 0;
  }
  return 0;
}

function convertMuchToPrice(option) {
  if (option === 'two') {
    return 2;
  } else if (option === 'three') {
    return 3;
  }
  return 1;
}

function renderSum(sum) {
  const costElement = document.querySelector('.calc-form__total');
  costElement.textContent = 'Підрахунок';
  setTimeout(function () {
    setTimeout(function () {
      setTimeout(function () {
        costElement.textContent = sum + ' грн/міс';
      }, 300);
      costElement.textContent = 'Підрахунок...';
    }, 300);
    costElement.textContent = 'Підрахунок..';
  }, 300);
  costElement.textContent = 'Підрахунок.';
}
