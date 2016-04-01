/**
 * Created by irunika on 3/22/16.
 */

$(document).ready( function(){

    $(document).on('click','.navbar-collapse.in',function(e) {
        if( $(e.target).is('a') ) {
            $(this).collapse('hide');
        }
    });

    $('.budget-circle').css({'height': $('.budget-circle').width()});



    $(window).resize(function () {
        $('.budget-circle').css({'height': $('.budget-circle').width()});
    });


    /**
     * This functions scrolls to the given div
     */
    $("#nav-about").click(function (){
        $('html, body').animate({
            scrollTop: $("#content-about").offset().top -200
        }, 1000);
    });

    $("#nav-packages").click(function (){
        $('html, body').animate({
            scrollTop: $("#content-package").offset().top -100
        }, 1000);
    });

    $("#nav-contacts").click(function (){
        $('html, body').animate({
            scrollTop: $("#content-contacts").offset().top -70
        }, 1000);
    });

    $(".nav-top-click").click(function (){
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

});
