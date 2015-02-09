jQuery(function ($) {
    'use strict';

    $('button.archive-toggle').click(function(){
        $(this).siblings('.toggle-content').toggle().toggleClass('open');
    });
})