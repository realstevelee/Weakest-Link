//Number of quiz
let numQuiz = 25;
//Bank of 25 questions
let question = [
  {
    question: `What Is A Group Of Geese Called?<br>
    a: A flock <br> b: A pod<br> c: A gooseling<br> d: A gaggle<br>`,
    answer: {
      a: 'A flock',
      b: 'A Pod',
      c: 'A Gooseling',
      d: 'A Gaggle'
    },
    correctAnswer: 'd'
  },
  {
    question: `What controls the tides?<br>
    a: Moon<br> b: Geomagnetic Field<br> c: Mars<br> d: Ships`,
    answer: {
      a: 'Moon',
      b: 'Geomagnetic Field',
      c: 'Mars',
      d: 'Ships'
    },
    correctAnswer: 'a'
  },
  {
    question: `The Sun is at the center of the ...<br>
    a: The galaxy<br> b: The solar system<br> c: The universe<br> d: Our minds`,
    answer: {
      a: 'The galaxy',
      b: 'The solar system',
      c: 'The universe',
      d: 'Our minds'
    },
    correctAnswer: 'b'
  },
  {
    question: `The Amazon Jungle is located in ...<br>
    a: Taipei<br> b: Jameica<br> c: Brazil<br> d: China`,
    answer: {
      a: 'China',
      b: 'Jameica',
      c: 'Brazil',
      d: 'China'
    },
    correctAnswer: 'c'
  },
  {
    question: `What is the capital city of Germany?<br>
    a: Cologne<br> b: Vienna<br> c: Dortmund<br> d: Berlin`,
    answer: {
      a: 'Cologne',
      b: 'Vienna',
      c: 'Dortmund',
      d: 'Berlin'
    },
    correctAnswer: 'd'
  },
  {
    question: `What is the capital city of Canada?<br>
    a: Ottawa<br> b: Tokyo<br> c: London<br> d: New Delhi`,
    answer: {
      a: 'Ottawa',
      b: 'Tokyo',
      c: 'London',
      d: 'New Delhi'
    },
    correctAnswer: 'a'
  },

  {
    question: `What is the capital city of France?<br>
    a: Madrid<br> b: Seoul<br> c: London<br> d: Paris`,
    answer: {
      a: 'Madrid',
      b: 'Seoul',
      c: 'London',
      d: 'Paris'
    },
    correctAnswer: 'd'
  },

  {
    question: `What is the capital city of Japan?<br>
    a: Tokyo<br> b: Bangkok<br> c: Moscow<br> d: Seoul`,
    answer: {
      a: 'Tokyo',
      b: 'Bangkok',
      c: 'Moscow',
      d: 'Seoul'
    },
    correctAnswer: 'a'
  },

  {
    question: `FIFA headquarter is located in...?<br>
    a: London<br> b: Zürich<br> c: Paris<br> d: brussel`,
    answer: {
      a: 'London',
      b: 'Zürich',
      c: 'Paris',
      d: 'brussel'
    },
    correctAnswer: 'b'
  },

  {
    question: `What is the satellite of the Earth?<br>
    a: Moon<br> b: Mars<br> c: Mercury<br> d: Jupiter`,
    answer: {
      a: 'Moon',
      b: 'Mars',
      c: 'Mercury',
      d: 'Jupiter'
    },
    correctAnswer: 'a'
  },
  {
    question: `What Is Gordon Ramsay Famous For?<br>
    a: Fashion<br> b: Math<br> c: Cooking<br> d: Science`,
    answer: {
      a: 'Fashion',
      b: 'Math',
      c: 'Cooking',
      d: 'Science'
    },
    correctAnswer: 'c'
  },
  {
    question: `What Was Pixar’s First Ever Feature Film?<br>
    a: Frozen<br> b: Incredible<br> c: Avengers<br> d: Toy Story`,
    answer: {
      a: 'Frozen',
      b: 'Incredible',
      c: 'Avengers',
      d: 'Toy Story'
    },
    correctAnswer: 'd'
  },
  {
    question: `Which Movie Featured Ironman?<br>
    a: Star Wars<br> b: Harry Potter<br> c: Avengers<br> d: Matrix`,
    answer: {
      a: 'Star Wars',
      b: 'Harry Potter',
      c: 'Avengers',
      d: 'Matrix'
    },
    correctAnswer: 'c'
  },
  {
    question: `Which Movie Featured A Wizard Named Gandalf?<br>
    a: Lord of the rings<br> b: Harry Potter<br> c: Game of thrones<br> d: Final Fantasy`,
    answer: {
      a: 'Lord of the rings',
      b: 'Harry Potter',
      c: 'Game of thrones',
      d: 'Final Fantasy'
    },
    correctAnswer: 'a'
  },
  {
    question: `Where Would We Find The Eiffel Tower?<br>
    a: Vancouver<br> b: Paris<br> c: Manchester<br> d: Berlin`,
    answer: {
      a: 'Vancouver',
      b: 'Paris',
      c: 'Manchester',
      d: 'Berlin'
    },
    correctAnswer: 'b'
  },
  {
    question: `Where Would We Find Area 51?<br>
    a: Alaska<br> b: Seattle<br> c: Boston<br> d: Nevada`,
    answer: {
      a: 'Alaska',
      b: 'Seattle',
      c: 'Boston',
      d: 'Nevada'
    },
    correctAnswer: 'd'
  },
  {
    question: `What Is The Capital Of Hungary?<br>
    a: Beijing<br> b: Lisbon<br> c: Rome<br> d: Budapest`,
    answer: {
      a: 'Beijing',
      b: 'Lisbon',
      c: 'Rome',
      d: 'Budapest'
    },
    correctAnswer: 'd'
  },
  {
    question: `What Is The Capital Of India?<br>
    a: New Delhi<br> b: Bejing<br> c: Osaka<br> d: Dubai`,
    answer: {
      a: 'New Delhi',
      b: 'Beijing',
      c: 'Osaka',
      d: 'Dubai'
    },
    correctAnswer: 'a'
  },
  {
    question: `Wool Is Usually Made From _________ Hair<br>
    a: Cat<br> b: Sheep<br> c: Horse<br> d: Cow`,
    answer: {
      a: 'Cat',
      b: 'Sheep',
      c: 'Horse',
      d: 'Cow'
    },
    correctAnswer: 'b'
  },
  {
    question: `What’s The Second Largest Country?<br>
    a: Turkey<br> b: China<br> c: Canada<br> d: U.S.A`,
    answer: {
      a: 'Turkey',
      b: 'China',
      c: 'Canada',
      d: 'U.S.A'
    },
    correctAnswer: 'c'
  },
  {
    question: `Which Language Is Spoken In Brazil?<br>
    a: Portuguese<br> b: English<br> c: Chinese<br> d: Spanish`,
    answer: {
      a: 'Portuguese',
      b: 'English',
      c: 'Chinese',
      d: 'Spanish'
    },
    correctAnswer: 'a'
  },
  {
    question: `Australia Is Famous For Having What Kind Of Bear?<br>
    a: Kiwi<br> b: Koala<br> c: Alpaca<br> d: Cat`,
    answer: {
      a: 'Kiwi',
      b: 'koala',
      c: 'Alpaca',
      d: 'Cat'
    },
    correctAnswer: 'b'
  },
  {
    question: `Which Type Of Plant Can Grow Up To One Meter In One Day?<br>
    a: Algae<br> b: Ivy<br> c: Tulip<br> d: Bamboo`,
    answer: {
      a: 'Algae',
      b: 'Ivy',
      c: 'Tulip',
      d: 'Bamboo'
    },
    correctAnswer: 'd'
  },
  {
    question: `What Is A Group Of Lions Called?<br>
    a: Pride<br> b: Pack<br> c: Squad<br> d: Flock`,
    answer: {
      a: 'Pride',
      b: 'Pack',
      c: 'Squad',
      d: 'Flock'
    },
    correctAnswer: 'a'
  },
  {
    question: `Which Country Has The Most Earthquakes?<br>
    a: Belgium<br> b: Canada<br> c: Japan<br> d: Austrailia`,
    answer: {
      a: 'Belgium',
      b: 'Canada',
      c: 'Japan',
      d: 'Austrailia'
    },
    correctAnswer: 'c'
  },
  {
    question: `How Many Years Are There In A Century?<br>
    a: 25<br> b: 50<br> c: 75<br> d: 100`,
    answer: {
      a: '25',
      b: '50',
      c: '75',
      d: '100'
    },
    correctAnswer: 'd'
  }
]
// HTML object variables
const enter = document.querySelector("#enter");
const quiz = document.querySelector("#quiz");
const moneyTree = document.querySelector("#moneyTree");
const aBut = document.querySelector("#a");
const bBut = document.querySelector("#b");
const cBut = document.querySelector("#c");
const dBut = document.querySelector("#d");
const bankMoney = document.querySelector("#bankMoney");
const bankBut = document.querySelector("#bank");
const divTimer = document.querySelector("#timer");
const htmlStyle = document.querySelector("#changeColor");
const moneyTreeContainer = document.querySelector("#moneyTreeContainer");
const search = document.querySelector("#search");
const searchButton = document.querySelector("#searchButton");
const xhr = new XMLHttpRequest();

//variable
let round = 0;
let getMoney = 0;
let bankedMoney = 0;
let timer = setInterval(displayFirstTime, 1000);
let time = 60;
let i = 0;
let num = Math.floor(Math.random() * numQuiz);

//Button 'a'
aBut.addEventListener("click", function () {
  //Round 1 and Round 2
  if (round == 1 || round == 2) {
    //If answer is correct
    if ('a' == question[num].correctAnswer) {
      //Display the message
      alert(`You are correct.`);
      i++;
      //In round 1, when earned money is over 500,000, money is automatically banked and go to round 2.
      if (round == 1) {
        if (getMoney < 500000) {
          getMoney += prizeList(i, 1);
        }
        else if (getMoney >= 500000) {
          alert(`You banked $${getMoney}.`);
          bankedMoney += getMoney;
          bankMoney.innerHTML = `$${bankedMoney}`;
          getMoney = 0;
          i = 0;
          moneyTreeColor(i + 1);
          secondRound();
        }
      }
      //In round 1, when earned money is over 1,000,000, money is automatically banked and go to round 3.
      else if (round == 2) {
        if (getMoney < 1000000) {
          getMoney += prizeList(i, 1);
        }
        else if (getMoney >= 1000000) {
          alert(`You banked $${getMoney}.`);
          bankedMoney += getMoney;
          bankMoney.innerHTML = `$${bankedMoney}`;
          getMoney = 0;
          i = 0;
          moneyTreeColor(i + 1);
          secondRound();
        }
      }
      //The numer of quiz decreases, answered quiz is removed and money tree goes up. 
      numQuiz--;
      question.splice(num, 1);
      moneyTreeColor(i + 1);
    }
    //In round 1 and 2, if the answer is incorrect, earend money and money tree goes to 0. And, the number of quiz decreases and answered quiz is removed.
    else {
      alert(`You are incorrect.`);
      i = 0;
      getMoney = 0;
      numQuiz--;
      question.splice(num, 1);
      moneyTreeColor(i + 1);
    }
    //After the answer, random number gereated and next quiz is generated.
    num = Math.floor(Math.random() * numQuiz);
    generateQuiz(num);
  }
  //In round 3
  else if (round == 3) {
    // In round3, if the answer is correct, the netx quiz is generated continuosly. Earned money is not changed.
    if ('a' == question[num].correctAnswer) {
      numQuiz--;
      question.splice(num, 1);
      num = Math.floor(Math.random() * numQuiz);
      generateQuiz(num);
      //When the number of quiz is 0, game ends.
      if (numQuiz == 0) {
        gameEnd()
      }
    }
    //If the answer is incorrect, player loses banked money and game ends.
    else {
      bankedMoney == 0;
      gameEnd();
    }
  }
});

//Button 'b'
bBut.addEventListener("click", function () {
  if (round == 1 || round == 2) {
    if ('b' == question[num].correctAnswer) {
      alert(`You are correct.`);
      i++;
      if (round == 1) {
        if (getMoney < 500000) {
          getMoney += prizeList(i, 1);
        }
        else if (getMoney >= 500000) {
          alert(`You banked $${getMoney}.`);
          bankedMoney += getMoney;
          bankMoney.innerHTML = `$${bankedMoney}`;
          getMoney = 0;
          i = 0;
          moneyTreeColor(i + 1);
          secondRound();
        }

      }
      else if (round == 2) {
        if (getMoney < 1000000) {
          getMoney += prizeList(i, 1);
        }
        else if (getMoney >= 1000000) {
          alert(`You banked $${getMoney}.`);
          bankedMoney += getMoney;
          bankMoney.innerHTML = `$${bankedMoney}`;
          getMoney = 0;
          i = 0;
          moneyTreeColor(i + 1);
          secondRound();
        }
      }

      numQuiz--;
      question.splice(num, 1);
      moneyTreeColor(i + 1);
    }
    else {
      alert(`You are incorrect.`);
      i = 0;
      getMoney = 0;
      numQuiz--;
      question.splice(num, 1);
      moneyTreeColor(i + 1);
    }
    num = Math.floor(Math.random() * numQuiz);
    generateQuiz(num);
  }
  else if (round == 3) {
    if ('b' == question[num].correctAnswer) {
      numQuiz--;
      question.splice(num, 1);
      num = Math.floor(Math.random() * numQuiz);
      generateQuiz(num);
      if (numQuiz == 0) {
        gameEnd()
      }
    }
    else {
      bankedMoney == 0;
      gameEnd();
    }
  }
});

//Button 'c'
cBut.addEventListener("click", function () {
  if (round == 1 || round == 2) {
    if ('c' == question[num].correctAnswer) {
      alert(`You are correct.`);
      i++;
      if (round == 1) {
        if (getMoney < 500000) {
          getMoney += prizeList(i, 1);
        }
        else if (getMoney >= 500000) {
          alert(`You banked $${getMoney}.`);
          bankedMoney += getMoney;
          bankMoney.innerHTML = `$${bankedMoney}`;
          getMoney = 0;
          i = 0;
          moneyTreeColor(i + 1);
          secondRound();
        }

      }
      else if (round == 2) {
        if (getMoney < 1000000) {
          getMoney += prizeList(i, 1);
        }
        else if (getMoney >= 1000000) {
          alert(`You banked $${getMoney}.`);
          bankedMoney += getMoney;
          bankMoney.innerHTML = `$${bankedMoney}`;
          getMoney = 0;
          i = 0;
          moneyTreeColor(i + 1);
          secondRound();
        }
      }

      numQuiz--;
      question.splice(num, 1);
      moneyTreeColor(i + 1);
    }
    else {
      alert(`You are incorrect.`);
      i = 0;
      getMoney = 0;
      numQuiz--;
      question.splice(num, 1);
      moneyTreeColor(i + 1);
    }
    num = Math.floor(Math.random() * numQuiz);
    generateQuiz(num);
  }
  else if (round == 3) {
    if ('c' == question[num].correctAnswer) {
      numQuiz--;
      question.splice(num, 1);
      num = Math.floor(Math.random() * numQuiz);
      generateQuiz(num);
      if (numQuiz == 0) {
        gameEnd()
      }
    }
    else {
      bankedMoney == 0;
      gameEnd();
    }
  }
});

//Button 'd'
dBut.addEventListener("click", function () {
  if (round == 1 || round == 2) {
    if ('d' == question[num].correctAnswer) {
      alert(`You are correct.`);
      i++;
      if (round == 1) {
        if (getMoney < 500000) {
          getMoney += prizeList(i, 1);
        }
        else if (getMoney >= 500000) {
          alert(`You banked $${getMoney}.`);
          bankedMoney += getMoney;
          bankMoney.innerHTML = `$${bankedMoney}`;
          getMoney = 0;
          i = 0;
          moneyTreeColor(i + 1);
          secondRound();
        }
      }
      else if (round == 2) {
        if (getMoney < 1000000) {

          getMoney += prizeList(i, 1);
        }
        else if (getMoney >= 1000000) {
          alert(`You banked $${getMoney}.`);
          bankedMoney += getMoney;
          bankMoney.innerHTML = `$${bankedMoney}`;
          getMoney = 0;
          i = 0;
          moneyTreeColor(i + 1);
          secondRound();
        }
      }

      numQuiz--;
      question.splice(num, 1);
      moneyTreeColor(i + 1);
    }
    else {
      alert(`You are incorrect.`);
      i = 0;
      getMoney = 0;
      numQuiz--;
      question.splice(num, 1);
      moneyTreeColor(i + 1);
    }
    num = Math.floor(Math.random() * numQuiz);
    generateQuiz(num);
  }
  else if (round == 3) {
    if ('d' == question[num].correctAnswer) {
      numQuiz--;
      question.splice(num, 1);
      num = Math.floor(Math.random() * numQuiz);
      generateQuiz(num);
      if (numQuiz == 0) {
        gameEnd()
      }
    }
    else {
      bankedMoney == 0;
      gameEnd();
    }
  }
});

//Button 'bank'
bankBut.addEventListener("click", function () {
  //In round 1 and round 2
  if (round == 1 || round == 2) {
    //Display the banked money
    alert(`You banked $${getMoney}.`);
    bankedMoney += getMoney;
    bankMoney.innerHTML = `$${bankedMoney}`;
    //Money tree goes to 0
    getMoney = 0;
    i = 0;
    moneyTreeColor(i + 1);
    //In round 1, banked money is over 500,000, player goes to round 2 automatically.
    if (round == 1) {
      if (bankedMoney >= 500000) {
        secondRound();
      }
    }
    //In round 2, banked money is over 1,000,000, player goes to round 3 automatically.
    else if (round == 2) {
      if (bankedMoney >= 1000000) {
        thirdRound();
      }
    }
  }
  //In round 3, function does nothing because bank button does not work in round 3.
  else {

  }
});

//1 Round
function firstRound() {
  //the list of prize
  let prize = [0, 1000, 5000, 10000, 50000, 75000, 125000, 250000, 500000];
  //set round is 1
  round = 1;
  //Display money tree
  moneyDisplay(prize);
  //Display round 1 timer
  displayFirstTime();
  //Generate the quiz
  generateQuiz(num);
  //Set moey tree color
  moneyTreeColor(1);
}

//2 Round
function secondRound() {
  //When player goes to round 2, round 1 time is set to 0.
  time = 0;
  clearInterval(timer);
  //Set round 2 timer.
  timer = setInterval(displaySecondTime, 1000);
  time = 45;
  alert(`Round 2`);
  round = 2;
  //The list of prize
  let prize = [0, 1000, 10000, 75000, 125000, 500000];
  //Display money tree
  moneyDisplay(prize);
  //Display round 2 timer
  displaySecondTime();
}

//3 Round
function thirdRound() {
  //When player goes to round 3, round 2 time is set to 0.
  time = 0;
  clearInterval(timer);
  //Set round 3 timer.
  timer = setInterval(displayThirdTime, 1000);
  time = 30;
  alert(`3rd Round`);
  //set round is 3
  round = 3;
  //Hide money tree
  moneyTree.innerHTML = ``;
  //Hide bank button
  bankBut.style.visibility = "hidden";
  //Display round 3 timer
  displayThirdTime();
}

//Quiz Generator
function generateQuiz(num) {
  quiz.innerHTML = `${question[num].question}`;
}

// Return the value of the current prize 
function prizeList(i, n) {
  let prize;
  if (n == 1) {
    prize = [0, 1000, 5000, 10000, 50000, 75000, 125000, 250000, 500000];
    return prize[i];
  }
  else if (n == 2) {
    prize = [0, 1000, 10000, 75000, 125000, 500000];
    return prize[i];
  }
}

//Money Tree Display
function moneyDisplay(m) {
  //If money tree does not exist, hide the money tree.
  if (m[0] == 0 || m == null) {
    moneyTree.innerHTML = ``;
  }
  //Create and display the array of money tree.
  for (let i = 0; i < m.length; i++) {
    const moneyList = document.createElement("li");
    moneyList.innerHTML = `$${m[i]}`;
    moneyTree.appendChild(moneyList);
  }
}

//First Round Timer
function displayFirstTime() {
  time--;
  divTimer.innerHTML = `${time}`;

  //When time runs out, player goes to round 2 automatically
  if (time == 0) {
    clearInterval(timer);
    secondRound();
  }
}


//Second Round Timer
function displaySecondTime() {
  time--;
  divTimer.innerHTML = `${time}`;

  if (time == 0) {
    //When time runs out, player goes to round 3 automatically
    clearInterval(timer);
    thirdRound();
  }
}

//Third Round Timer
function displayThirdTime() {
  time--;
  divTimer.innerHTML = `${time}`;
  //When time runs out, Game ends and earned money is displayed.
  if (time == 0) {
    clearInterval(timer);
    alert(`You win $${bankedMoney}`);
    quiz.innerHTML = ``;
  }
}

//Money Tree Color
function moneyTreeColor(i) {
  //Set the red color of the current prize
  htmlStyle.innerHTML = `li:nth-child(${i}) { color: red; }`;
}

//Game over
function gameEnd() {
  //When game is over, round 3 timer is set to 0
  time3 = 0;
  clearInterval(timer3);
  quiz.innerHTML = ``;
  //When gameEnd() is called and the number of quiz is 0, it menas player answers all question so that they win the prize
  if (numQuiz == 0) {
    alert(`you earned ${bankedMoney}`)
  }
  //When gameEnd() is called and the answer is incorrect, banked money is set to 0 and "The Weakest Link" message is displayed.
  else {
    divTimer.innerHTML = `0`;
    bankMoney.innerHTML = `$0`;

    alert(`The Weakest Link`);
  }
}

//Game Start Point
firstRound();