document.addEventListener("DOMContentLoaded", () => {
  const animatedEls = document.querySelectorAll('.animate');
  const animateOnScroll = () => {
    animatedEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        el.classList.add('visible');
      }
    });
  };
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);
});

const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');
if (loginBtn && loginModal && closeModal) {
  loginBtn.onclick = (e) => {
    e.preventDefault();
    loginModal.style.display = 'flex';
  };
  closeModal.onclick = () => loginModal.style.display = 'none';
  window.onclick = (e) => {
        if (e.target === loginModal) loginModal.style.display = 'none';
      };
    }