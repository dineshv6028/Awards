// Adding simple fade-in animation
$(document).ready(function() {
    $('.award-card').each(function(i) {
        setTimeout(function() {
            $('.award-card').eq(i).addClass('fade-in');
        }, 200 * i);
    });
});
