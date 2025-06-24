
document.addEventListener("DOMContentLoaded", () => {
  const animatedEls = document.querySelectorAll('.animate');
  const showOnScroll = () => {
    animatedEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add('visible');
      }
    });
  };
  showOnScroll();
  window.addEventListener('scroll', showOnScroll);
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


const scrollBtn = document.getElementById('scrollTopBtn');
if (scrollBtn) {
  window.onscroll = function() {
    if (window.scrollY > 200) scrollBtn.style.display = "block";
    else scrollBtn.style.display = "none";
  };
  scrollBtn.onclick = () => window.scrollTo({top:0, behavior:'smooth'});
}


document.querySelectorAll('.order-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Order placed! (Demo action)');
  });
});
