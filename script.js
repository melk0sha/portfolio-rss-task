window.onload = function () {
    const closeButtonProject1 = document.querySelector('#container-project1__button-back');  
    const closeButtonProject2 = document.querySelector('#container-project2__button-back');
    const resizeButtonProject1 = document.querySelector('#container-project1__button-size');
    const resizeButtonProject2 = document.querySelector('#container-project2__button-size');
  
    // show iframe
    const showFirstProject = () => {
        this.event.preventDefault();
        const wrapper = document.querySelector('.section-iframe__container-prj1');
        wrapper.classList.toggle('container-hidden');
    
        if (window.innerWidth < 641) {
            resizeButtonProject1.classList.add('hideButton');
            resizeButtonProject2.classList.add('hideButton');
        } else {
            resizeButtonProject1.classList.remove('hideButton');
            resizeButtonProject2.classList.remove('hideButton');
            resizeButtonProject1.textContent = "Desktop";
            resizeButtonProject2.textContent = "Desktop";
        }
    }
  
    const showSecondProject = () => {
        this.event.preventDefault();
        const wrapper = document.querySelector('.section-iframe__container-prj2');
        wrapper.classList.toggle('container-hidden');
    
        if (window.innerWidth < 600) {
            resizeButtonProject1.classList.add('hideButton');
            resizeButtonProject2.classList.add('hideButton');
        } else {
            resizeButtonProject1.classList.remove('hideButton');
            resizeButtonProject2.classList.remove('hideButton');
            resizeButtonProject1.textContent = "Desktop";
            resizeButtonProject2.textContent = "Desktop";
        }
    }
  
    // iframe buttons
    const hideiFrame = () => {
        event.target.parentElement.classList.add('container-hidden');
        resizeButtonProject1.textContent = 'Desktop';
        resizeButtonProject2.textContent = 'Desktop';
    
        const iFrame = event.target.parentNode.childNodes[1];
        iFrame.classList.remove('iFrame-desktop');
    };
  
    const showDesktop = () => {
        const iFrame = event.target.parentNode.childNodes[1];
    
        const iFrameListArray = Array.from(iFrame.classList);
        if (iFrameListArray.includes('iFrame-desktop')) {
            event.target.textContent = 'Desktop';
        } else {
            event.target.textContent = 'Mobile';
        }
    
        iFrame.classList.toggle('iFrame-desktop');
    }
  
    closeButtonProject1.addEventListener('click', hideiFrame);
    closeButtonProject2.addEventListener('click', hideiFrame);
  
    resizeButtonProject1.addEventListener('click', showDesktop);
    resizeButtonProject2.addEventListener('click', showDesktop);
  
    // description 
    const showDescription = () => {
        if (window.innerWidth > 500) {
            return;
        }
        const description = document.getElementsByClassName('carousel-caption');
        if (event.target.classList.contains('btn__description')) {
            description[0].classList.toggle('description__hide');
            description[1].classList.toggle('description__hide');
        }
        console.log(description);
    };
  
    const slider = this.document.querySelector('.carousel-inner');
  
    slider.addEventListener('click', showDescription);
  
    slider.addEventListener('click', () => {
        if (event.target.id === 'project1') {
            showFirstProject();
        } else if (event.target.id === 'project2') {
            showSecondProject();
        }
    });
}
  