function question(text, choices, answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
question.prototype.correct = function (choice){
    return choice === this.answer;
}


function quiz(question){
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

quiz.prototype.getquestionindex = function(){
    return this.question[this.questionIndex];
}
quiz.prototype.isEnded = function(){
    return this.questions.length === this.questionIndex;
}
quiz.prototype.guess = function(answer){
    this.questionIndex++;
    if(this.getquestionindex().correct(answer)) {
        this.score++;
    }
}
function populate() {
    if (quiz.isEnded()){

    }
    else{
        let element = document.getElementById("questions");
        element.innerHTML = quiz.getquestionindex().text;

        let choices = quiz.getquestionindex().choices;
        for(let i=0; i< choices.length; i++){
            let element = document.getElementById("choices"+ i);
            element.innerHTML = choices[i];
        }
    }
};

function scoring(){
    let endgame = "<h1>result</h1>";
        endgame += "<h2 id='score'>"
}



let questions = [
    new question("a + b =",["a","b","ab","no idea"], "no idea"),
    new question("answers are:",["reports","solutions","and swaru","aota"], "aota"),
    new question("moo",["meow","woof","chirp","oink"], "oink"),
    new question("democracy",["cynicism","dinosaur","galaxy","angst"], "angst"),
    new question("which one is by far the right question?",["did you notice a pattern?","only one prompt was intentionally wrong","but does it really matter?","I already gave you the right anwer"], "javascript is fun"),
];

let quiz = new quiz(questions);
populate();