let question1 = "who are you?";
let question2 = "why are you?";
let question3 = "what kind of horse are you?";

let answer1 = prompt(question1);
let answer2 = prompt(question2);
let answer3 = prompt(question3);

let score = 0;

if (answer1 === "ur mom lol") {
  alert("you suck d000d");
  score -= 1000;
}

if (answer1 === "elias") {
  alert("yeah you're alright I guess");
  score += 1;
}

if (answer2 === "just because") {
  alert("good job");
  score += 20;
}

if (answer3 === "clydesdale") {
  alert("wow you're a huge horse good job");
  score += 1000000;
}

if (score > 0) {
  alert("good job u won the game 🎉");
} else {
  alert("well you tried. 🤡");
}
////////////////////////////////////
let question1 = `who are you? 
a) a handsome horse 
b) a handsome squidward 
c) a daikon radish`;

let answer1 = prompt(question1);

let question1CorrectAnswer = "a";

let score = 0;

if (answer1 === question1CorrectAnswer) {
  alert("correct!");
  score += 10;
} else {
  alert("incorrect :(");
}

alert("your final score was: " + score);