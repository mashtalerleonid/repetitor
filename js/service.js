(() => {
  let shown = false;
  const znoBtn = document.querySelector('[data-dpa-btn]');
  const dpaBtn = document.querySelector('[data-zno-btn]');
  const simpleBtn = document.querySelector('[data-simple-btn]');
  const list = document.querySelector('[data-list]');
  const znoDesc = document.querySelector('[data-zno-description]');
  const dpaDesc = document.querySelector('[data-dpa-description]');
  const simpleDesc = document.querySelector('[data-simple-description]');
  const descCloseBtn = document.querySelector('[data-description-close-btn]');

  znoBtn.addEventListener('click', showZno);
  dpaBtn.addEventListener('click', showDpa);
  simpleBtn.addEventListener('click', showSimple);
  descCloseBtn.addEventListener('click', closeDescription);

  function closeDescription() {
    // list.classList.add('service--open');
    // if (shown == true) {
    // znoDesc.style.opacity = 1;
    // dpaDesc.style.opacity = 0;
    // simpleDesc.style.opacity = 0;
    // } else {
    list.classList.remove('service--open');
    znoBtn.classList.remove('service__button--active');
    dpaBtn.classList.remove('service__button--active');
    simpleBtn.classList.remove('service__button--active');
    // znoDesc.style.opacity = 1;
    // dpaDesc.style.opacity = 0;
    // simpleDesc.style.opacity = 0;
    // }
  }

  function showZno() {
    // list.classList.add('service--open');
    // if (shown == true) {
    // znoDesc.style.opacity = 1;
    // dpaDesc.style.opacity = 0;
    // simpleDesc.style.opacity = 0;
    // } else {
    list.classList.add('service--open');
    znoBtn.classList.add('service__button--active');
    dpaBtn.classList.remove('service__button--active');
    simpleBtn.classList.remove('service__button--active');
    znoDesc.style.opacity = 1;
    dpaDesc.style.opacity = 0;
    simpleDesc.style.opacity = 0;
    // }
  }

  function showDpa() {
    // if (shown == true) {
    //   znoDesc.style.opacity = 0;
    //   dpaDesc.style.opacity = 1;
    //   simpleDesc.style.opacity = 0;
    // } else {
    list.classList.add('service--open');
    znoBtn.classList.remove('service__button--active');
    dpaBtn.classList.add('service__button--active');
    simpleBtn.classList.remove('service__button--active');
    znoDesc.style.opacity = 0;
    dpaDesc.style.opacity = 1;
    simpleDesc.style.opacity = 0;
    // }
  }

  function showSimple() {
    // if (shown == true) {
    //   znoDesc.style.opacity = 0;
    //   dpaDesc.style.opacity = 0;
    //   simpleDesc.style.opacity = 1;
    // } else {
    list.classList.add('service--open');
    znoBtn.classList.remove('service__button--active');
    dpaBtn.classList.remove('service__button--active');
    simpleBtn.classList.add('service__button--active');
    znoDesc.style.opacity = 0;
    dpaDesc.style.opacity = 0;
    simpleDesc.style.opacity = 1;
    // }
  }
})();

let aaa = document.body.clientWidth;
