function askQuestion(question, answer){
    let userResponse=prompt(question);
    
    if(userResponse==answer){
        alert("correct")
    }else{
        alert("incorrect")
    }
}
askQuestion("is 1<0", "false") //boolean values were not registering correctly
askQuestion("is 25>=24", "true")
askQuestion("5*20 = ?", 100)
askQuestion("100/25 = ?", 4)
askQuestion("11**2 = ?", 121)