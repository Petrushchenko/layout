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

    // customize select scrollbar
    let toAppendChildren = true;
    customizeScroll(toAppendChildren);

    //click on button
    const Btn = hendleButton();
    let submit = new Btn('button[type=submit]');
    submit.eventClick();
}

function closingModal(e){
        const menuBtn = document.querySelector('.header__burger');

        if (e.target.localName === 'a' || e.target.className === 'modal__btn') {
            this.classList.remove('opened');       
            menuBtn.style.display = 'flex';
            
        }
    }

function customizeScroll(indicator) {
    const select = document.querySelector('.selectric');

    select.addEventListener('click', function(e) {
  
        const selectricList = document.querySelector('.selectric-items');
        selectricList.classList.add('nano');

        const selectricItems =selectricList.querySelector('.selectric-scroll');
        selectricItems.classList.add("nano-content");

        let pane = document.createElement('div');
        pane.className = "nano-pane";

        let slider = document.createElement('div');
        slider.className = "nano-slider";

        if(indicator) {
            pane.appendChild(slider);
            selectricList.appendChild(pane);
            indicator= false;
        } 

    });
}

function hendleButton(){
    class SubmitButton {
      constructor(selector){
        this.button = document.querySelector(selector)
      }

        eventClick() {
            this.button.addEventListener('click', checkForm);
            
        }
    }
    return SubmitButton;
}

function checkForm(e) {
    e.preventDefault();

    const form = this.parentElement;
    const emailContent = form.querySelector('input[name=email]').value;
    const password = form.querySelector('input[name=email]').textContent.length;

    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    if (!reg.test(emailContent)) {
        swal("Attention!", "Your email-adress is incorrect", "error");
    } else {
        console.log(password);

    }
}

 function debounce(func, wait = 20, immediate = true) {
      let timeout;
      return function() {
        // var context = this, args = arguments;
        let later = function() {
          timeout = null;
          if (!immediate) func.apply(this, arguments);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(this, arguments);
      };
    };

    const sliderImages = document.querySelectorAll('.main__img');

    function checkSlide() {
        sliderImages.forEach(sliderImage => {
        // half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        // bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
          sliderImage.classList.add('active');
        } else {
          sliderImage.classList.remove('active');
        }
      });
    }

    window.addEventListener('scroll', debounce(checkSlide));
