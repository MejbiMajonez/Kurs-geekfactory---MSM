$(document).keydown(function(e) {
    switch (e.which) {
    case 37:
    if($('#tam').position().left <= 0)
break;
        $('#tam').stop().animate({
            left: '-=1'
        }); //left arrow key
        break;
    case 38:
    if($('#tam').position().top <= 0)
break;
        $('#tam').stop().animate({
            top: '-=1'
        }); //up arrow key
        break;
    case 39:
    if($('#tam').position().left >=719.5)
    break;
        $('#tam').stop().animate({
            left: '+=100'
        }); //right arrow key
        break;
    case 40:
if($('#tam').position().top >= 341)
break;
        $('#tam').stop().animate({
            top: '+=100'
        }); //bottom arrow key
        break;
    }
})
