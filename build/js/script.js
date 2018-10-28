'use strict'
window.onload = function(){
    const welcome = document.querySelector('.welcome');
    let labels = welcome.querySelectorAll('label');
    let slides = welcome.querySelectorAll('.slider__item');
    let position = 0;
    let currentIndex =0;
    

    let shownSlide;
    labels.forEach((label, i) => label.addEventListener('click', function(e) {
        console.log(this, i);
        let width = slides[currentIndex].offsetWidth;
        if (i > currentIndex) {

            position = Math.max(4, 5);
        } else {}
        labels[currentIndex]
    }));

 
   

}
    /*labels.forEach((label, i) =>  label.addEventListener('click', (e) => {


        if (i > currentIndex) {
        console.log(i, shownSlide);
            
            shownSlide.classList.add('removePrev');
            //shownSlide.classList.remove('shown');

            shownSlide.addEventListener('transitionend', (e) => this.classList.remove(removePrev));
       

            slides[i].classList.add('showNext');
            slides[i].classList.add('shown');
            slides[i].addEventListener('transitionend', () => this.classList.remove(showNext));
            shownSlide = slides[i];
            //shownSlide.classList.add('shown');
            currentIndex = i;

            colorLabel(labels, currentIndex);


        } else {
            shownSlide.classList.add('removeNext');
            
            shownSlide = slides[i];
            
            shownSlide.classList.add('shown');

            currentIndex = i;
            colorLabel(labels, currentIndex);

        }
        })        
    );
   
        /*let prev = Array.prototype.filter.call(slides, (slide) => {
       
         (i != 0 && slide.dataset.input === this.htmlFor)? console.log(this.previousElementSibling) : console.log(this.parentElement.lastChild);
       // return (i != 0 && slide.dataset.input === this.htmlFor)? this.previousElementSibling : this.parent;
    });
    

}

/*function colorLabel (nodeList, i) {
    nodeList.forEach((label, j) => j == i ? label.style.opacity = 1 : label.style.opacity = 0.5);

}*/


