/**
 * Created by Koitma on 11.01.2016.
 */
$(function (){
    // initialisation of questions:
    var questionsArray = [  new  Question("Сколько будет 2*2?", [4,3,5], 0),
        new  Question("Сколько будет 2*8?", [12,16,8], 1),
        new  Question("Сколько будет 3*2?", [5,9,6], 2)];

    // we begin from the first question:
    var questionNumber = 0;

    // if start is clicked
    $("#begin").click(function () {
        $(this).html("Reset");
        questionNumber = 0;
        questionsArray[questionNumber].printQuestion("#question");
        $('#result').addClass('hidden');
    });

    // choosing answer
    $(document).on('click', 'label', function () {
        var answerIndex = $(this).find('input').val();
        questionsArray[questionNumber].chooseAnswer(answerIndex);
    });

    // navigation
    // moving forward:
    $(document).on('click', '#next', function (){
        questionNumber++;

        if(questionNumber === questionsArray.length) {

            var result = new Result(questionsArray);
            $("#result").removeClass('hidden');
            $("#question").html("");
            result.printResult('#result');
        }
        else {
            questionsArray[questionNumber].printQuestion('#question');
        }
    });

    $(document).on('click', '#back', function () {
        questionNumber--;
        questionsArray[questionNumber].printQuestion('#question');
    });

});