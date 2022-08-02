let quizData = [
    {
        question: "What is the most popular programming language in 2022?",
        a: "Java",
        b: "Javascript",
        c: "Python",
        d: "C++",
        correct: "b"
    },
    {
        question: "What is the most popular JavaScript framework in 2022?",
        a: "Angular",
        b: "Ember",
        c: "Vue",
        d: "React",
        correct: "d"
    },
    {
        question: "Where is Turkey?",
        a: "Asia",
        b: "Europa",
        c: "Asia and Europe",
        d: "Gronland",
        correct: "c"
    },
    {
        question: "What is the first release date of javascript?",
        a: "1995",
        b: "1992",
        c: "2000",
        d: "1999",
        correct: "a"
    },
    {
        question: "What was Meta Platforms Inc formerly known as?",
        a: "Instagram",
        b: "Facebook",
        c: "Google",
        d: "Amazon",
        correct: "b"
    },


]

const text1 = document.getElementById("text1")
const text2 = document.getElementById("text2")
const text3 = document.getElementById("text3")
const text4 = document.getElementById("text4")
const question = document.getElementById("question")
const submitBtn = document.getElementById("submit")
const inputEl = document.querySelectorAll(".option")
const quiz = document.querySelector("#quiz")


let quizNumber = 0
let answer = undefined;
let score = 0;

quizLoad();


function quizLoad() {

    const currentQuestion = quizData[quizNumber]

    question.innerHTML = currentQuestion.question
    text1.innerHTML = currentQuestion.a
    text2.innerHTML = currentQuestion.b
    text3.innerHTML = currentQuestion.c
    text4.innerHTML = currentQuestion.d

    deSelect()
}

function getChecked() {

    inputEl.forEach((ans) => {
      
      if (ans.checked) {
  
        answer = ans.id;
    }
      });
  }

  function deSelect() {

    inputEl.forEach((ans) => {
      
        if (ans.checked) {
    
          ans.checked = false
         
      }
        });
  }
  

submitBtn.addEventListener("click", () => {

    getChecked()

    if(answer) {
        
        if(answer === quizData[quizNumber].correct){
            score++
        }
        quizNumber++

        if(quizNumber < quizData.length){
            quizLoad()
        }
        else {
            quiz.innerHTML = `<h2>You answered correctly ${score} / ${quizData.length} questions</h2><button onClick="location.reload()" >Reload</button>`
        }
    }
})