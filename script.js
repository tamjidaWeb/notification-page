const markBtn = document.getElementById('mark-all-btn');
const redDot = document.querySelectorAll('.red-dot');
const bg= document.querySelectorAll('.bg');
const number = document.getElementById('number');

markBtn.addEventListener('click', ()=>{

   redDot.forEach(dot=>dot.style.display='none');
    bg.forEach(el => {
        el.classList.remove('bg-[#F3F8FC]');
    });
number.innerText = '0'
markBtn.classList.add('text-blue-800');
markBtn.classList.remove('font-semibold')
})