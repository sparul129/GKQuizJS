let score = 0;
const quiz_obj = {
questions :  [
  {
  statement : "How many consonants are there in the English alphabet?",
  options : { A:5, B:21, C:26, D:20 },
  answer:"B"
  },
  {
  statement : "Which of the following is not a metal?",
  options : { A:"Gold", B:"Resin", C:"Glass", D:"Mercury"},
  answers: "B"
  },
  {
  statement : "Which is not a Union Territory of India",
  options : { A:"Rajasthan", B:"Jammu and Kashmir", C:"Ladakh", D:"Lakshadweep"},
  answers: "A"
  },
  {
  statement : "Water in plants is transported by what?",
  options : { A:"Leaf", B:"Chlorophyll", C:"Xylem", D:"Bud"},
  answers: "C"
  },
  {
  statement : "What is the total number of dots on a dice??",
  options : { A:6, B:18, C:12, D:21},
  answers: "D"
  }]
};

function welcome()
{
  console.log("General Awareness Quiz");
  const userName = "Welcome to the Quiz, Please enter your name";
  const consoleValue = readingConsole(userName);
  console.log(`Hello ${consoleValue} Let us test your GK\n`);
}

function readingConsole(readMessage)
{
    const readLineSync = require('readline-sync');
    return readLineSync.question(`${readMessage}\n`);

}

function displayQuestoUSer(i,quesArr)
{
  console.log(`Question ${i+1}: ${quesArr[i].statement}`);
  console.log(`A. ${quesArr[i].options.A} `);
  console.log(`B. ${quesArr[i].options.B} `);
  console.log(`C. ${quesArr[i].options.C} `);
  console.log(`D. ${quesArr[i].options.D} `);
  const userMsg = `Type in your choice A/B/C/D : `;
  let userResponse = readingConsole(userMsg);
  evalScore(i,quesArr,userResponse);
}


function evalScore(i,quesArr,userResponse)
{
  if(userResponse.toUpperCase() == quesArr[i].answers)
  {
    console.log("Correct Response");
    score++;
    console.log(`Your score is ${score}\n`);
  }
  else
  {
    console.log(`Incorrect Response. The correct answer is ${quesArr[i].answers}\n`);
  }
}

function quiz_play(quesArr,callback)
{
  for(let i=0;i<quesArr.length;i++)
  {
    callback(i,quesArr);
  }
}

function end(score)
{
  let scoreChart;
  if(score == quiz_obj.questions.length)
  {
    message = "are Perfect at GK";
  }
  else if(score >(quiz_obj.questions.length-3) && score <quiz_obj.questions.length)
  {
    message = "Can do better";
  }
  else
  {
    message = "need to work on your GK";
  }

  console.log(`Thank you for playing the quiz. Your score is ${score} and you ${message}`)
}

welcome();
quiz_play(quiz_obj.questions,displayQuestoUSer);
end(score);
