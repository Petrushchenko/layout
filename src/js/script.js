'use strict'
window.onload = function(){
    const menuBtn = document.querySelector('.header__burger');
    const modal = document.querySelector('.modal');
   
    menuBtn.addEventListener('click', function opening (){
        const nav = document.querySelector('.nav');
        this.style.display = 'none';
        modal.classList.add('opened');
        modal.appendChild(nav);
        
    });
  
    modal.addEventListener('click', closingModal);
}

function closingModal(e){
        const menuBtn = document.querySelector('.header__burger');

        if (e.target.localName === 'a' || e.target.className === 'modal__btn') {
            this.classList.remove('opened');       
            menuBtn.style.display = 'flex';
            
        }
    }


