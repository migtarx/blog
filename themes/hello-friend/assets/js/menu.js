const container = document.querySelector(".container");
const menu = document.querySelector(".menu");
const mobileMenuTrigger = document.querySelector(".menu-trigger");
const desktopMenu = document.querySelector(".menu__inner--desktop");
const desktopMenuTrigger = document.querySelector(".menu__sub-inner-more-trigger");
const menuMore = document.querySelector(".menu__sub-inner-more");
const currentPath = window.location.pathname;
const enLinks = document.getElementById('en-lang');
const esLinks = document.getElementById('es-lang');
const mobileQuery = getComputedStyle(document.body).getPropertyValue("--phoneWidth");
const isMobile = () => true;
const isMobileMenu = () => {
  mobileMenuTrigger && mobileMenuTrigger.classList.toggle("hidden", !isMobile());
  menu && menu.classList.toggle("hidden", isMobile());
  menuMore && menuMore.classList.toggle("hidden", !isMobile());
};

// Common
isMobileMenu();

if (currentPath.startsWith('/es')) {
  esLinks.classList.add('menu-selected-lang');
  enLinks.classList.remove('menu-selected-lang');
} else {
  enLinks.classList.add('menu-selected-lang');
  esLinks.classList.remove('menu-selected-lang');
}

document.body.addEventListener("click", () => {
  if (!isMobile() && menuMore && !menuMore.classList.contains("hidden")) {
    menuMore.classList.add("hidden");
  } else if (isMobile() && !menu.classList.contains("hidden")) {
    menu.classList.add("hidden");
  }
});

document.addEventListener('click', function(event) {
  if (event.target.classList.contains('langChange')) {
    if (currentPath.startsWith('/es')) {
      const newPath = currentPath.replace('/es', '');
      window.location.href = window.location.origin + newPath;
    } else {
      const newPath = '/es' + currentPath;
      window.location.href = window.location.origin + newPath;
    }
  }
});


window.addEventListener("resize", isMobileMenu);

// Mobile menu

mobileMenuTrigger &&
  mobileMenuTrigger.addEventListener("click", e => {
    e.stopPropagation();
    menu && menu.classList.toggle("hidden");
  });

// Desktop menu

desktopMenuTrigger &&
  desktopMenuTrigger.addEventListener("click", e => {
    e.stopPropagation();
    menuMore && menuMore.classList.toggle("hidden");

    if (
      menuMore &&
      menuMore.getBoundingClientRect().right > container.getBoundingClientRect().right
    ) {
      menuMore.style.left = "auto";
      menuMore.style.right = 0;
    }
  });
