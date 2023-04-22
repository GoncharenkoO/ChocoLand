(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();


function checkForSpam(message) {
  let result;
  // Change code below this line
result = message.toLowerCase().includes("spam") ||  message.toLowerCase().includes("sale");
  // Change code above this line
  return result;
}
