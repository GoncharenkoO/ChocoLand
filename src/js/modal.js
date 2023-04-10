document.querySelectorAll('[data-modal-open]').forEach(button => {
  const id = button.dataset.modalOpen;
  const modal = document.querySelector(`[data-modal="${id}"]`);
  if(modal){
    button.addEventListener('click', () => {
      modal.showModal();
    });
    const closeButton = modal.querySelector('.close');
    if(closeButton){
      closeButton.addEventListener('click', () => {
        modal.close();
      });
    }
  }
});