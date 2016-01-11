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
        // prints question and answers
        var placeToPrint = $(placeToPrint);
        placeToPrint.html(this.question);
        for ( var i = 0; i< this.answers.length; i++)
        placeToPrint.append("<label> <input type='radio' name = 'answers' value = '" + i +"'/>" + answers[i] + "</label>");
        placeToPrint.append("<button id='next'>Next</button>");

    };

    this.chooseAnswer = function (answer) {
        // remembers user answer and check if it`s right
        this.userAnswerIndex = answer;
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
        $(placeToPrint).html('Number of correct answers is:' + this.rightAnswers);
    }
}