// $(document).ready(function () {
//     jQuery('.main_btna').on('click', function () {

//         $('[class = overlay]').fadeIn('low');
//         $('.modal').animate({
//             opacity: 'toggle',
//             height: 'toggle'
//         }, 1000);
//     });

//     $('.main_btn').on('click', function () {

//         $('[class = overlay]').fadeIn('low');
//         $('.modal').animate({
//             opacity: 'toggle',
//             height: 'toggle'
//         }, 1000);
//     });

//     $('[href="#sheldure"]').on('click', function () {

//         $('[class = overlay]').fadeIn('low');
//         $('.modal').animate({
//             opacity: 'toggle',
//             height: 'toggle'
//         }, 1000);
//     });

//     $('.modal > button').on('click', function () {
//         $('[class = overlay]').fadeOut('low');
//         $('.modal').animate({
//             opacity: 'toggle',
//             height: 'toggle'
//         }, 1000);
//         console.log('куку');
//     });

// });

$(document).ready(function() {

    $('.main_btna, .main_btn, a[href="#sheldure"]').click(function() {
        $('.overlay').fadeIn(1000);
        $('.modal').slideDown(1000);
    });

    $('.close').click(function() {
        $('.modal').slideUp(1000);
        $('.overlay').fadeOut(1000);
    });

});