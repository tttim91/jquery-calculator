//Starts with zero
//When pressing #s - replaces 0
//When click any operator - saves current # as 1st number
//If multiple operator keys in a row - use last one
//If new number - saves operator, replaces first number
//After 2 num calculation - if new number - replaces everything
//If operator - save answer as num1 and repeat
//Clear button should reset everything

$(document).ready(function() {
var input = $('#screen');
var equals = $('[id="calc"]');
    $('.number').click(function() {
        input.text(input.text() + $(this).attr('id'));
    });

    $('#cancel').click(function() {
        input.text("");
    });

    $('.operator').click(function() {
        // var opName = $(this).attr('id');
        // input.data("firstInput", input.val());
        // input.text('');
        // equals.removeClass();
        // equals.addClass(opName);
        input.text(input.text() + $(this).attr('id'));
    });
    var evaluate = "";
    $('#calc').click(function() {
        evaluate = input.text();
        // evaluate = evaluate.replace("=","");
        evaluate = eval(evaluate);
        input.text(evaluate);
    });

    $("#calculator").draggable();

});
