class Update{
    constructor(){
        this.optimist=0
        this.realist=0
        this.pessimist=0 
        this.check=createButton("CHECK")
    }
    display(){
Answers.button1.mousePressed(()=>{
     this.optimist=this.optimist+3

})
Answers.button2.mousePressed(()=>{
    this.optimist=this.optimist+1
    this.realist=this.realist+2
})
Answers.button3.mousePressed(()=>{
    this.pessimist=this.pessismist+2
    this.realist=this.realist+1
})
Answers.button4.mousePressed(()=>{
    this.pessimist=this.pessimist+3
})
Answers.answer1.mousePressed(()=>{
    this.optimist=this.optimist+3
})
Answers.answer2.mousePressed(()=>{
    this.optimist=this.optimist+2
})
Answers.answer3.mousePressed(()=>{
    this.realist=this.realist+2
})
Answers.answer4.mousePressed(()=>{
    this.pessimist=this.pessimist+2
})
Answers.ans1.mousePressed(()=>{
    this.optimist=this.optimist+2
})
Answers.ans2.mousePressed(()=>{
    this.realist=this.realist+2
})
Answers.ans3.mousePressed(()=>{
    this.pessimist=this.pessimist+2
})
Answers.click1.mousePressed(()=>{
    this.optimist=this.optimist+2
})
Answers.click2.mousePressed(()=>{
    this.realist=this.realist+2
})
Answers.click3.mousePressed(()=>{
    this.pessimist=this.pessimist+2
})
Answers.sol1.mousePressed(()=>{
    this.pessimist=this.pessimist+2
})
Answers.sol2.mousePressed(()=>{
    this.optimist=this.optimist+2
})
Answers.sol3.mousePressed(()=>{
    this.realist=this.realist+2
})
Answers.solution1.mousePressed(()=>{
    this.optimist=this.optimist+2
    this.check.position(10,1590)   
})
Answers.solution2.mousePressed(()=>{
    this.realist=this.realist+2
    this.check.position(10,1590)   
})
Answers.solution3.mousePressed(()=>{
    this.pessimist=this.pessimist+2
 this.check.position(10,1590)   
})

    }
    result(){
        this.check.mousePressed(()=>{
       
       
            if (this.optimist>this.pessimist+this.realist){
              
              
                console.log("Congratulations! You completed the test")

                console.log("It seems as if you are an optimist. Your life is filled with hope and and cheer!")
                console.log("You believe in the good of people. According to you, things can never go bad because whatever happens, it happens for the best. ")
                console.log("And this is a great atitude! So keep it up")
               
            } if(this.optimist>this.realist && this.optimist>this.pessimist){
                console.log("DONE")
                console.log("Congratulations! you completed the test!")
                console.log("You are definitely in a positive mood today!. You are likely to be an optimist ")
                console.log("There may be times when you feel down, but that's normal! Even though things don't turn out well,")
                console.log("at the end of the day you smile and forget it! That is the atitude!")
            } if(this.realist>this.optimist && this.realist>this.pessimist){
               console.log("RESULT")
                console.log("Congratulations! you completed the test!")
              console.log("Based on the options you selected, You are likely a realist. ")
                console.log("You see what you think is the truth. You understand that the truth can be both good and bad. ")
                console.log("It is nice to have people like you in the world! Just remember, it is okay to expect the good once in a while, to cheer you up! ")
            }
             if (this.pessimist>this.optimist && this.pessimist>this.realist){
                
                console.log("Congratulations! you completed the test!")
                console.log("It seems you are a pessimist. ")
                console.log("You like to look at the grey areas of every thing. You don't like expectations and believe that they never come true. ")
                console.log("Maybe you can try to look on the bright side of things a little bit. But you are the best judge of who you want to be!")
            }
        })
    }
}
