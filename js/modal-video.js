(() => {
  const openModalBtn = document.querySelector('[data-modal-open]');
  const closeModalBtn = document.querySelector('[data-modal-close]');
  const backdrop = document.querySelector('[data-backdrop]');
 
  openModalBtn.addEventListener('click', toggleModal);
  closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal--is-open');
    backdrop.classList.toggle('backdrop--is-hidden');
    const video = document.querySelector('[data-video]');
    if (video) {
      video.pause();
    }
  }
})();
