alert ("This quiz is made of up of 10 true or false questions. Answer 'Okay' for true and 'Cancel' for false.")
let start=alert("Start Quiz?")

/*if yes start quiz, next quesition
else exectue start line */
let question1=("1<0") //false
let question2=("25>=24") // true
let question3=("5*20=") //100
let question4=("100/25=") //4
let question5=("11**2=") //121


let answer1=prompt(question1)
let answer2=prompt(question2)
let answer3=prompt(question3)

let score= 0

if (answer1==="false"){
    alert("correct!");
    score+=20
}else{alert("incorrect :(")
    score-=20
}
if (answer2==="true"){
    alert("correct!")
    score+=20
}else{alert("incorrect :(")
    score-=20
}
if (answer3===100){
    alert("correct!")
    score+=20
}else{alert("incorrect :(")
    score-=20
}
if (answer4===4){
    alert("correct!")
    score+=20
}else{alert("incorrect :(")
    score-=20
}
if (answer3===121){
        alert("correct!")
        score+=20
}else{alert("incorrect :(")
        score-=20
}