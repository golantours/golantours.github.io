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

    //if (window.screen.width > 768){
    //    if($(window).scrollTop() < 1000){
    //        $('.navbar').css({'margin-top':'0px'});
    //        $('.navbar').css({'transition':'margin-top 300ms'});
    //        $('.navbar').css({'background':'#f7f7f7'});
    //        //$('.navbar').css({'border-bottom':'solid 2px'});
    //        //$('.navbar').css({'border-color':'black'});
    //    }
    //    if ($(window).scrollTop() < 500){
    //        $('.navbar').css({'margin-top':'50px'});
    //        $('.navbar').css({'background':'rgba(255, 255, 255, 0.80)'});
    //        //$('.navbar').css({'border-color':'rgba(255, 255, 255, 0.00)'});
    //    }
    //}


    //$(window).scroll(function(e){
    //    console.log( window.screen.width);
    //    console.log( window.screen.height);
    //
    //    if (window.screen.width > 768){
    //        if($(window).scrollTop() < 900){
    //            $('.navbar').css({'margin-top':'0px'});
    //            $('.navbar').css({'transition':'margin-top 300ms'});
    //            $('.navbar').css({'background':'#f7f7f7'});
    //            //$('.navbar').css({'border-bottom':'solid 2px'});
    //            //$('.navbar').css({'border-color':'black'});
    //        }
    //        if ($(window).scrollTop() < 300){
    //            $('.navbar').css({'margin-top':'50px'});
    //            $('.navbar').css({'background':'rgba(255, 255, 255, 0.80)'});
    //            //$('.navbar').css({'border-color':'rgba(255, 255, 255, 0.00)'});
    //        }
    //    }
    //});
    
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
