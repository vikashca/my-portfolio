// =============================== typing animation ===============================
var typed = new Typed(".typing", {
  strings: ["", "Web Designer", "web Developer", "UI/UX Designer", "Coder"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true
})


// ===== portfolio tab =====
function openTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  document.getElementById(tabId).classList.add('active');
  event.target.classList.add('active');
}



// ===== menu items active & inactive =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav a, .mobile-top-nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 130;
    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// ===== scroll pr header hide & show =====
let lastScroll = 0;
const header = document.querySelector(".mobile-top-nav");
const scrollOffset = 15; // kitna scroll hone par react kare

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  // niche scroll
  if (currentScroll > lastScroll + scrollOffset && currentScroll > 100) {
    header.classList.add("hide");
  }
  // upar scroll
  else if (currentScroll < lastScroll - scrollOffset) {
    header.classList.remove("hide");
  }

  lastScroll = currentScroll;
});


    //// floting button  
    const scrollBtn = document.getElementById("scrollTopBtn");
const progressCircle = scrollBtn.querySelector(".progress");
const circumference = 2 * Math.PI * 22;

progressCircle.style.strokeDasharray = circumference;
progressCircle.style.strokeDashoffset = circumference;

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;

    const offset = circumference - scrollPercent * circumference;
    progressCircle.style.strokeDashoffset = offset;

    if (scrollTop > 200) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});




