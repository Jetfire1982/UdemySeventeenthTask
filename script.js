$(document).ready(function () {
    $('.main_btna').on('click', function () {

        $('[class = overlay]').fadeIn('low');
        $('.modal').animate({
            opacity: 'toggle',
            height: 'toggle'
        }, 1000);
    });

    $('.main_btn').on('click', function () {

        $('[class = overlay]').fadeIn('low');
        $('.modal').animate({
            opacity: 'toggle',
            height: 'toggle'
        }, 1000);
    });

    $('[href="#sheldure"]').on('click', function () {

        $('[class = overlay]').fadeIn('low');
        $('.modal').animate({
            opacity: 'toggle',
            height: 'toggle'
        }, 1000);
    });

    $('.modal > button').on('click', function () {
        $('[class = overlay]').fadeOut('low');
        $('.modal').animate({
            opacity: 'toggle',
            height: 'toggle'
        }, 1000);
        console.log('куку');
    });


    // let x=document.querySelector('#tour');
    // let x1=document.querySelector('.overlay');
    // console.log(x);
    // console.log(x1);
    // $('[class = content]')

});