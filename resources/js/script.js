/* global $ */

/* eslint-env jquery */

$('document').ready(function() { 
/* Ensures that the code can only run after the document has been loaded */
                  
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });

});