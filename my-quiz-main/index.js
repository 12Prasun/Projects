var readlineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;

var userName = readlineSync.question(chalk.red("What's your name ? "));

console.log(chalk.blue.bold("Welcome "+userName+" to my quiz DO YOU KNOW Prasun?"));
console.log(chalk.green.underline.bold("Let's start !"));
console.log("------------------------------------------------");

function play(question, answer){
  var userAnswer = readlineSync.question(chalk.yellow(question));

  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log(chalk.magenta("You are right !"));
    score++;
  }
  else{
    console.log(chalk.magenta("You are wrong !"));
    console.log(chalk.cyan("Correct answer is "+answer));
    score--;
  }

  console.log(chalk.green.bgBlack("Current score: "+score));
  console.log("---------------------");
}

var questionOne = {
  question: "Where do i live ? ",
  answer: "Mandleshwar"
}

var questionTwo = {
  question: "What's my favourite hobby ? ",
  answer: "Cricket"
}

var questionThree = {
  question: "What's my favourite web series ? ",
  answer: "Game of thrones"
}

var questionFour = {
  question: "When is my birthday ? ",
  answer: "31 May"
}

var questionFive = {
  question: "What is my zodiac sign ? ",
  answer: "Leo"
}

var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];
for(var i=0;i<questions.length;i++){
  play(questions[i].question, questions[i].answer);
}

console.log(chalk.red.bold.underline.bgWhite("YAY! You scored: "+score));

