const btn = document.getElementById('toggleMode');
const bkgnd = document.getElementById('background');
btn.addEventListener('click', () => {
    bkgnd.classList.toggle("dm")
    btn.classList.toggle("btn-dm")  
  }
);