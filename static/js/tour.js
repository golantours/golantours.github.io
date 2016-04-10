var no_of_days = 3;
var current_day = 1;

$(document).ready(function(){

    var tour = $('#content').attr('tour');
    console.log(tour);

    $('#prev-prev-day').attr('disabled','disabled');
    $('#prev-day').attr('disabled','disabled');


    if(tour === 'maher'){
        no_of_days = 3;
    }
    else if(tour === 'kathan'){
        no_of_days = 4;
    }

    else if(tour === 'yoffi'){
        no_of_days = 7;
    }

    else if(tour === 'golan'){
        no_of_days = 10;
    }

    else if(tour === 'surfing'){
        no_of_days = 4;
    }

    $('#day-indicator').text('day ' +  current_day + '/ day' + no_of_days);

    $('#day_content').load('1.html');

    //Button Events
    $('#prev-day').click( function(){
        current_day = current_day -1 ;
        if(current_day === 1){
            $('#prev-prev-day').attr('disabled','disabled');
            $('#prev-day').attr('disabled','disabled');
        }

        $('#next-next-day').attr('disabled',false);
        $('#next-day').attr('disabled', false);

        load_day(current_day);
    });

    $('#next-day').click( function(){
        current_day = current_day +1 ;
        if(current_day === no_of_days){
            $('#next-next-day').attr('disabled','disabled');
            $('#next-day').attr('disabled','disabled');
        }


        $('#prev-prev-day').attr('disabled', false);
        $('#prev-day').attr('disabled', false);

        //$('#day-indicator').text('day ' +  current_day + '/ day' + no_of_days);

        load_day(current_day);
    });


    $('.day-selector').click( function(){
        var day = parseInt($(this).attr('day'));
        current_day = day;

        if(current_day === 1){
            $('#prev-prev-day').attr('disabled','disabled');
            $('#prev-day').attr('disabled','disabled');
            $('#next-day').attr('disabled',false);
        }

        else if(current_day === no_of_days){
            $('#next-next-day').attr('disabled','disabled');
            $('#next-day').attr('disabled','disabled');
            $('#prev-day').attr('disabled',false);
        }

        else{
            $('#prev-prev-day').attr('disabled', false);
            $('#prev-day').attr('disabled', false);
        }

        load_day(day);
    });

    $('.img-responsive').magnificPopup({type:'image'});



});

var load_day  = function(day){

    $('html, body').animate({
        scrollTop: 0
    }, 200);

    $('#day-indicator').text('day ' +  current_day + '/ day' + no_of_days);
    $('#day_content').load(day+'.html');
};