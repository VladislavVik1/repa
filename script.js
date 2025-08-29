

const modal = document.getElementById('orderModal');
const openers = document.querySelectorAll('.js-open');
const closeBtn = modal.querySelector('.close');

const openModal = () => {
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}
const closeModal = () => {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

openers.forEach(btn => btn.addEventListener('click', openModal));
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e)=>{ if(e.target === modal) closeModal(); });
window.closeModal = closeModal; // for form handler
