$(document).ready(()=>{
    
    $('.spinner').fadeOut(1000,()=>{
        $('#loading').slideUp(1500)
    })

    let typed = new Typed('#Sentence', {
        strings: ['<span class="fw-bolder" style="font-size:1.9rem;">Funlearn</span> <span class="fw-bolder" style="font-size:1.3rem;">: The Best Kindergarten For Your Child.</span>', ''],
        typeSpeed: 150, // Speed of typing
        backSpeed: 150, // Speed of backspacing
        backDelay: 50, // Delay before starting backspacing
        startDelay: 50, // Delay before typing starts
        loop: true, 
    });

    new WOW().init();

   
    $('#scroll-top').on('click',()=>{
        $('html, body').animate({scrollTop: '0px'}, 2000);
    })

    let activitesTop=$("#activites").offset().top;
    $(window).scroll(()=>{
       let top=$('#scroll-top').offset().top;
        if(top-300>activitesTop)
        {
            $('#scroll-top').removeClass('opacity-0');
            $('#scroll-top').addClass('opacity-100');
        }
        else{
            $('#scroll-top').removeClass('opacity-100');
            $('#scroll-top').addClass('opacity-0');
        }
        
    })
})