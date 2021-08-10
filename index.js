var read = require('readline-sync');
const chalk = require('chalk');
var name = read.question('What is your name ');
console.log(chalk.yellowBright('Welcome ' + name));
console.log(chalk.yellowBright('This quize consists of 6 questions,each question carries 1 points and -1 for every wrong answer'));

console.log("***************************************************************************");

var score = 0;




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
  question: chalk.yellow('Which is the capital city of India  '),
  answer: 'New Delhi'
}, {
  question: chalk.yellow('Who is the messile man of India  '),
  answer: 'Abdul Kalam'
}, {
  question: chalk.yellow('Which city is called as the Garden City  '),
  answer: 'Bangalore'
}, {
  question: chalk.yellow('Which Launguage has got the highest number Jnanapeetha Awards  '),
  answer: 'Kannada'
}, {
  question: chalk.yellow('Who is the present chief minister of Karanataka  '),
  answer: 'B S Yediyurappa'
}, {
  question: chalk.yellow('Who is called as the Viswa Guru  '),
  answer: 'Basavanna'
}

];

for (var i = 0; i < questions1.length; i++) {
  var currentQuestion = questions1[i];
  play(currentQuestion.question, currentQuestion.answer)
}
console.log(chalk.cyanBright('THANK YOU FOR PLAYING THE QUIZ'));
console.log(chalk.cyanBright('Your total score is ' + score))

console.log('The correct answers are as follows');
for (var i = 0; i < questions1.length; i++) {
  var current = questions1[i];

  console.log(i + 1, current.answer);
}