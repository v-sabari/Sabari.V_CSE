/* ========= LOADER ========= */
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.style.opacity = '0';
    loader.style.pointerEvents = 'none';
    setTimeout(()=> loader.remove(), 600);
  }, 900);
});

/* ========= AOS Init ========= */
AOS && AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' });

/* ========= VanillaTilt for 3D profile ========= */
if (typeof VanillaTilt !== 'undefined') {
  const tiltEl = document.querySelector('[data-tilt]');
  if (tiltEl) {
    VanillaTilt.init(tiltEl, {
      max: 12,
      speed: 600,
      glare: true,
      'max-glare': 0.25,
      scale: 1.02
    });
  }
}

/* ========= Typing Effect ========= */
const typingEl = document.getElementById('typing');
const words = ["Web Developer", "CSE Student", "Software Tester", "Tech Learner"];
let wIndex = 0, cIndex = 0, deleting = false;

function doType() {
  const current = words[wIndex];
  if (!deleting) {
    cIndex++;
    typingEl.textContent = current.substring(0, cIndex);
    if (cIndex === current.length) {
      deleting = true;
      setTimeout(doType, 1000);
      return;
    }
  } else {
    cIndex--;
    typingEl.textContent = current.substring(0, cIndex);
    if (cIndex === 0) {
      deleting = false;
      wIndex = (wIndex + 1) % words.length;
    }
  }
  setTimeout(doType, deleting ? 60 : 120);
}
doType();

/* ========= Nav Menu Toggle ========= */
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

function toggleMenu(){
  navLinks.classList.toggle('open');
}
menuBtn.addEventListener('click', toggleMenu);

/* Close mobile menu on link click */
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    if (navLinks.classList.contains('open')) navLinks.classList.remove('open');
  });
});

/* ========= Theme Toggle (prefers) ========= */
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

function setTheme(dark){
  if(dark){
    document.documentElement.style.setProperty('--bg','#05060a');
    themeIcon.className = 'fa-solid fa-sun';
    localStorage.setItem('darkTheme','1');
  } else {
    document.documentElement.style.setProperty('--bg','#ffffff');
    themeIcon.className = 'fa-solid fa-moon';
    localStorage.removeItem('darkTheme');
  }
}

themeToggle && themeToggle.addEventListener('click', () => {
  const isDark = localStorage.getItem('darkTheme') === '1';
  setTheme(!isDark);
});

/* Set from storage on load */
if(localStorage.getItem('darkTheme') === '1') setTheme(true);

/* ========= Scroll reveal (fallback) ========= */
const revealEls = document.querySelectorAll('.fade-up');
function revealOnScroll(){
  revealEls.forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

/* ========= Contact Form -> Firestore ========= */
const contactForm = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');

if(contactForm){
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if(!name || !email || !message){
      statusEl.textContent = 'Please fill all fields.';
      return;
    }

    statusEl.textContent = 'Sending...';

    try {
      // write to Firestore collection "contacts"
      await db.collection('contacts').add({
        name, email, message, createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      statusEl.textContent = 'Message sent — thank you!';
      contactForm.reset();
    } catch (err) {
      console.error(err);
      statusEl.textContent = 'Error sending message. Check firebase.js is configured.';
    }
  });
}
