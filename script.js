const flipper = document.querySelectorAll('.flipper');
for(let i=0;i<flipper.length;i++){
  flipper[i].addEventListener('click',function(){flipper[i].classList.toggle('is-flipped')})
}

