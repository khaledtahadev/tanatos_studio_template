$(document).ready(function ()
{
    //Trigger NiceScroll plugin
    $('html').niceScroll({
        cursorcolor: '#dd4b39',
        cursorborder: "1px solid #dd4b39",
        cursorwidth:'7px',
        cursorminheight:200
    });

    //Change Hedaer Hight

    $('.header').height($(window).height());

    $(window).resize(function()
    {
        $('.header').height($(window).height());
        $('.intro').css('paddingTop',($(window).height() - $('.intro').height())/2)

    });

    $('.intro').css('paddingTop',($(window).height() - $('.intro').height())/2)


    // Smooth Scroll

    $('.header .arrow i').click(function()
    {
        $('html,body').animate({

            scrollTop:$('.features').offset().top

        },1000);
    });


    $('.header .buttons button:first-child').click(function()
    {
        $('html,body').animate({

            scrollTop:$('.our-team').offset().top

        },2000);
    });
    
    $('.header .buttons button:last-child').click(function()
    {
        $('html,body').animate({

            scrollTop:$('.our-work').offset().top

        },1000);
    });


    //Center Form Subscribe

    $('.subscribe form').css('paddingTop',($('.subscribe').height() - $('.subscribe form').height())/2)

    // Hidden Images from Our-work

    $('.our-work .show-more').click(function()
    {
        $('.our-work .hidden').fadeIn(1000)
    })

    // Check Testimonials

    var arrowRight = $('.testim .fa-chevron-right'),
        arrowLeft = $('.testim .fa-chevron-left');

        function cheackArrow()
        {
            $('.client:first').hasClass('active') ? arrowLeft.fadeOut() : arrowLeft.fadeIn();
            $('.client:last').hasClass('active') ? arrowRight.fadeOut() : arrowRight.fadeIn();

        }
        cheackArrow();

        $('.testim i').click(function()
        {
            if( $(this).hasClass('fa-chevron-right') )
            {
                $('.testim .active').fadeOut(100,function()
                {
                    $(this).removeClass('active').next('.client').addClass('active').fadeIn();

                    cheackArrow();
                })
            }else
            {
                $('.testim .active').fadeOut(100,function()
                {
                    $(this).removeClass('active').prev('.client').addClass('active').fadeIn();

                    cheackArrow();
                })
            }
        });
});