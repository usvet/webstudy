"use strict"
const animItems = document.querySelectorAll('._anim-items');


if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index ++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 3;
      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
       animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      
      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active');
      } else {
        if (!animItem.classList.contains('_anim-no-hide')) {
          animItem.classList.remove('_active');
        }
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  
  setTimeout(() => {
    animOnScroll();
  }, 300);
}


let h = document.querySelector(".hour");
let m = document.querySelector(".min");
let s = document.querySelector(".sec");

  setInterval(clock, 1000);
  
  function clock() {
    let date = new Date();
    let hh = (date.getHours() + (1/60)*date.getMinutes()) * 30;
    let mm = date.getMinutes() * 6;
    let ss = date.getSeconds() * 6;
    h.style.transform = `rotate(${hh}deg)`;
    m.style.transform = `rotate(${mm}deg)`;
    s.style.transform = `rotate(${ss}deg)`;
  }
  