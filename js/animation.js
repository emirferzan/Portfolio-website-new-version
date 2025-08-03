const text = "I’m Emir, a Computer Science student at the University of Nebraska–Lincolnwith a passion for cybersecurity and software engineering.\nOutside the terminal, you’ll find me exploring new tech, digging into cybersecurity labs, or occasionallyexplaining tofamily why “turning it off and on” really does help.";

const target = document.querySelector('.about__description-text');

let index = 0;

function type() {
  if (index < text.length) {
    target.textContent += text.charAt(index);


    index++;
    setTimeout(type, 25); // typing speed (adjust as you like)
  }
}

// Trigger when scrolled into view
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      type();
      observer.unobserve(entry.target); // only type once
    }
  });
}, { threshold: 0.5 }); // 50% visible

observer.observe(target);
