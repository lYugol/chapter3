const swiper = new Swiper('.sample-slider', {
                     
    pagination: { 
        el: '.swiper-pagination',
    },
   
    on: {
        resize: function enableOnlyMobile(swiper){
            // Disable the slider when the window width is less than or equal to 960
            if(768 < window.innerWidth){
                swiper.disable()
                swiper.el.classList.add('-non-slider')
            }else{
                swiper.enable()
                swiper.el.classList.remove('-non-slider')
            }
        },
    },
    
})

function show() {
    const assideButtonOn = document.getElementById('on');
    const swiperSlides = document.querySelectorAll('.swiper-slide');

    assideButtonOn.addEventListener('click', function(){
        this.classList.toggle('swap');
        if (assideButtonOn.textContent === 'Показать всё') {
            assideButtonOn.textContent = 'Скрыть';
            for (let i = 0; i < swiperSlides.length; i++) {
            swiperSlides[i].classList.add('visible');
        }
        } else {
            assideButtonOn.textContent = 'Показать всё';
            for (let i = 0; i < swiperSlides.length; i++) {
                swiperSlides[i].classList.remove('visible'); 
            }
        }
    })
}

show()
