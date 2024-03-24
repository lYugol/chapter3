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
    let assideButtonOn = document.getElementById('on');
    let assideButtonOff = document.getElementById('off');
    let swiperSlides = document.querySelectorAll('.swiper-slide');
    let swiperShow = [];
    for (let i = 0; i < swiperSlides.length; i++) {
        swiperShow = swiperSlides[i].style.display
    }
    assideButtonOn.addEventListener('click', function(){
        for(let i= 0; i < swiperSlides.length; i++){
        swiperSlides[i].style.display = 'block'
        }
        assideButtonOn.style.display = 'none';
        assideButtonOff.style.display= 'block'
    })
    assideButtonOff.addEventListener('click', function(){
        for(let i = 0; i < swiperSlides.length ; i++){
            swiperSlides[i].style.display = swiperShow
        }
        assideButtonOff.style.display = 'none'
        assideButtonOn.style.display = 'block'
    })
}

show()
