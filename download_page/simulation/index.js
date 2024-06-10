//Array to hold the questions position [questionNo][0] is the loaction of the correct answer and [questionNo][1] is the location of the file of the given
const questions = [[1, "imagesSim/question1/question1"],
                   [3, "imagesSim/question2/question2"]
                  ];

let onQuestion = 0

let selected

//change the qustion and answers images to the ones needed
function img(){

    document.getElementById("question").src=(questions[onQuestion][1] + "_q.png")

    document.getElementById("answer1").src=(questions[onQuestion][1] + "_a1.png")

    document.getElementById("answer2").src=(questions[onQuestion][1] + "_a2.png")

    document.getElementById("answer3").src=(questions[onQuestion][1] + "_a3.png")

}

let questionArea = document.getElementById("main")

let answerArea = document.getElementById("buttons")

//sets the clicked button to be selected and the others to be not be selected
function select(number){

    clearButtons()
    
    selected = number
    
    let change = document.getElementById("button" + number)
    change.classList.remove("notSelected")
    change.classList.add("selected")

    for(i of answerArea.children){
        console.log(i.classList)
    }

}

//sets all the buttons to be not selected
function clearButtons(){

    for(i of answerArea.children){
        i.classList.remove("selected")
        i.classList.add("notSelected")
    }


}

//when the enter button is clicked will check if the correct answer is given
function enter (){

    if(selected == questions[onQuestion][0]){

        console.log("correct")
        clearButtons()
        onQuestion += 1

        if(questions[onQuestion] == null){

            finished()
            return

        }

        img()

        document.getElementById("correct").src = "imagesSim/correct/check.png"

        setTimeout(setCorrectToEmpty, 3000)

    }else{

        console.log("Wrong")

        document.getElementById("correct").src = "imagesSim/correct/ex.png"

        setTimeout(setCorrectToEmpty, 3000)

    }

}

//will show the correct screen when run out of questions
function finished(){

    document.body.innerHTML = '<img src="imagesSim/correct/check.png" alt=""></img>'

}

//clears the image stating if the answer is correct or wrong
function setCorrectToEmpty() {

    document.getElementById("correct").src = ""

}

//allows the user to guess by pressing the enter key
document.onkeydown = function(value){

    if(value.key = "enter"){
        enter()
    }

}