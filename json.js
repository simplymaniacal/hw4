// need a timer
document.getElementById("start-button").onclick = () => {timer()};
let timer = (duration, display) => {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById('timer').append = () => {minutes + ":" + seconds};

        if (--timer < 0) {
            // bring end of time here------------------------------

            timer = duration;
            // ----------------------------------------------------
        }
    }, 1000);
    window.onload = function () {
        var fiveMinutes = 60 * 5,
            display = document.querySelector('timer');
        startTimer(fiveMinutes, display);
    };
}








// // function to make a reference to the 3 main parts of the quiz

// function question(text, choices, answer){
//     this.text = text;
//     this.choices = choices;
//     this.answer = answer;
// }


// // this is to make sure that the answer is correct by comparing choice to answer

// question.prototype.correct = function (choice){
//     return choice === this.answer;
// }




// function quiz(question){
//     this.score = 0;
//     this.questions = questions;
//     this.questionIndex = 0;
// }

// quiz.prototype.getquestionindex = function(){
//     return this.question[this.questionIndex];
// }
// quiz.prototype.isEnded = function(){
//     return this.questions.length === this.questionIndex;
// }
// quiz.prototype.guess = function(answer){
//     if(this.getquestionindex().correct(answer)) {
//         this.score++;
//     }

//     this.questionIndex++;
// }
// function populate() {
//     if (quiz.isEnded()){

//     }
//     else{
//         let element = document.getElementById("questions");
//         element.innerHTML = quiz.getquestionindex().text;

//         let choices = quiz.getquestionindex().choices;
//         for(let i=0; i< choices.length; i++){
//             let element = document.getElementById("choices"+ i);
//             element.innerHTML = choices[i];
//         }
//     }
// };

// function scoring(){
//     let endgame = "<h1>result</h1>";
//         endgame += "<h2 id='score'>"
// }



// let questions = [
//     new question("a + b =",["a","b","ab","no idea"], "no idea"),
//     new question("answers are:",["reports","solutions","and swaru","aota"], "aota"),
//     new question("moo",["meow","woof","chirp","oink"], "oink"),
//     new question("democracy",["cynicism","dinosaur","galaxy","angst"], "angst"),
//     new question("which one is by far the right question?",["did you notice a pattern?","only one prompt was intentionally wrong","but does it really matter?","I already gave you the right anwer"], "javascript is fun"),
// ];

// let quiz = new quiz(questions);


// function populate() {
//     if(quiz.isEnded()) {
//         showscores();
//     }
//     else {
//         let element  = document.getElementById("question");
//         element.innerHTML = quiz.getElementById().text;

//         let choices = quiz.getquestionindex().choices;
//         for(let i = 0; i< choices.length; i++){
//             let element = document.getElementById("choices" + i)
//             element.innerHTML = choices[i];
//             guess("btn" + i, choices[i]);
//         }
//         showProgress();
//     }
// };

// function guess(id, guess) {
//     let button = document.getElementById(id);
//     button.onclick = function() {
//         quiz.guess(guess);
//         populate();
//     }
// };

// function showProgress() {
//     let currentQuestionNumber = quiz.questionIndex + 1;
//     let element = document.getElementById("progress");
//     element.innerHTML = "question" + currentQuestionNumber + "of" + quiz.questions.length;
// }

// function showScores() {
//     let gameOverHtml = "<h1>Result</h1>"
//         gameOverHtml += "<h2> id-'score'> Your scores: " +quiz.score + "</h2>";
//         let element = document.getElementById("quiz");
//         element.innerHTML = gameOverHtml;
// };


// populate();








