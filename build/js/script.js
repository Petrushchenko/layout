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

    const select = document.querySelector('.selectric');
    let toAppendChildren = true;

    select.addEventListener('click', function(e) {
        
        const selectricList = document.querySelector('.selectric-items');
        selectricList.classList.add('nano');
        const selectricItems =selectricList.querySelector('.selectric-scroll');
        selectricItems.classList.add("nano-content");

        let pane = document.createElement('div');
        pane.className = "nano-pane";

        let slider = document.createElement('div');
        slider.className = "nano-slider";

        if(toAppendChildren) {
            pane.appendChild(slider);
            selectricList.appendChild(pane);
            toAppendChildren= false;
        } 

    });
   

}

function closingModal(e){
        const menuBtn = document.querySelector('.header__burger');

        if (e.target.localName === 'a' || e.target.className === 'modal__btn') {
            this.classList.remove('opened');       
            menuBtn.style.display = 'flex';
            
        }
    }


