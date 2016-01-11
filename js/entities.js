/**
 * Created by Koitma on 07.01.2016.
 */
function Question (question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswerIndex = correctAnswer;
    this.userAnswerIndex = 0;
    this.userCorrect = false;

    this.printQuestion = function (placeToPrint) {
        // print question and answers
        // var placeToPrint = $(placeToPrint);
        //placeToPrint.html(this.question);


        var textToPrint = "<div class='question'> "+ this.question +"</div>" ;
        for ( var i = 0; i< this.answers.length; i++){
            textToPrint += "<div class='radio'><label> <input type='radio' name = 'answers' value = '" + i +"'/>" + answers[i] + "</label> </div>";
            //placeToPrint.append("<label> <input type='radio' name = 'answers' value = '" + i +"'/>" + answers[i] + "</label>");
        }
        textToPrint += '<div class="row center">\
            <button name="back" id="back" class="btn btn-lg btn-info">Back</button>\
            <button name="next" id="next" class="btn btn-lg btn-info">Next</button>\
        </div>';
        // placeToPrint.append("<button id='next'>Next</button>");
        $(placeToPrint).html(textToPrint);

    };

    this.chooseAnswer = function (answerIndex) {
        // remember user answer and check if it`s right
        this.userAnswerIndex = answerIndex;
        if (this.correctAnswerIndex == this.userAnswerIndex) {
            this.userCorrect = true;
        }
        else {
            this.userCorrect = false;
        }
    };
}

function Result (questions) {
    this.questionArray = questions;
    this.rightAnswers = 0;

    this.printResult = function (placeToPrint) {
        for (var i = 0; i< this.questionArray.length; i++) {
            if( this.questionArray[i].userCorrect) {
                this.rightAnswers++;
            }
        }
        $(placeToPrint).html('Number of correct answers is: ' + this.rightAnswers);
    }
}