var read = require('readline-sync');

const chalk = require('chalk');
console.log(chalk.green("Welcome"));
var name = read.question('What is your name? ');
console.log(chalk.yellowBright('Hi ' , name,"let's play the quiz"));
console.log(chalk.greenBright('This quize consists of 6 questions,each question carries 1 points and -1 for every wrong answer'));

console.log("***************************************************************************");

var score = 0;
var highestScore = 4;



function play(question, answer) {

  var useranswer = read.question(question);

  if (useranswer.toUpperCase() === answer.toUpperCase()) {
    score = score + 1;
    console.log('your answer ' + useranswer + ' is correct');
    console.log('your current score is ' + score);
    console.log('----------------------------------------------');
  } else {
    score = score - 1;
    console.log('Your answer ' + useranswer + ' is wrong,TRY AGAIN');
    console.log('your current score is  ' + score);
    console.log('----------------------------------------------');
  }
}



var questions1 = [{
  question: chalk.yellow('1. What is my full name  '),
  answer: 'Veeresh B V'
}, {
  question: chalk.yellow('2. you know from which city I come from?  '),
  answer: 'Chitraduraga'
}, {
  question: chalk.yellow('3. You know what I study? '),
  answer: 'Bengaluru'
}, {
  question: chalk.yellow('4. Name the high school where I studied '),
  answer: 'Kannada'
}, {
  question: chalk.yellow('5. Which is my favorite IDE '),
  answer: 'VsCode'
},{
  question: chalk.yellow('6. who is my favorite hero '),
  answer: 'Real Star Upendra '
} 
];

for (var i = 0; i < questions1.length; i++) {
  var currentQuestion = questions1[i];
  play(currentQuestion.question, currentQuestion.answer)
}
console.log(chalk.cyanBright('THANK YOU FOR PLAYING THE QUIZ'));

if(score > highestScore){
  console.log("Congratulations you have the highest score");
  console.log("The previous highest score was " + highestScore);
}else{
  console.log("The highest score is " + highestScore);
  console.log(chalk.cyanBright('Your total score is ' + score));
}


console.log("");
console.log('The correct answers are as follows');
for (var i = 0; i < questions1.length; i++) {
  var current = questions1[i];

  console.log(i + 1, current.answer);
}