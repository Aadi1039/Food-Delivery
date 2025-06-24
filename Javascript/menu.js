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

  // Add to Cart functionality
  let cartCount = 0;
  const cartBtn = document.querySelector('.floating-cart');
  document.querySelectorAll('.order-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      cartCount++;
      btn.textContent = "✔️ Added!";
      setTimeout(() => {
        btn.textContent = "Order Now";
      }, 1200);
      if (cartBtn) {
        cartBtn.innerHTML = `🛒 Cart (${cartCount})`;
      }
    });
  });
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