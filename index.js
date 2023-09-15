// // const validateForm = () => {
// //     let uid = document.forms["myform"]["uid"].value;
// //     let postcode = document.forms["myform"]["pcode"].value;
// //     if (isNaN(uid)) {
// //       alert("User ID must be a number");
// //       return false;
// //     }
// //     if (uid.length != 4) {
// //       alert("User id must be 4 digits long");
// //       return false;
// //     }
// let score = 0
// const SecXqX = () => {
//     let cAnsX = document.forms["SecXqX"]["cAnsX"].value;
//     let iAnsX = document.forms["SecXqX"]["iAnsX"].value;
//         if (onclick.iAnsX) {
//             // box turn red, inform incorrect, turn correct box green, move on
//             return false;
//         }
//         if (onclick.cAnsX) {
//             // box turns green, inform correct, +qValue to score, move on
//         }
// }

// console.log(`${score}/40`)

const musicQuestions = [
    {
      question: "What is the major 3rd of D#?",
      answers: ["F", "C#", "G", "Bb"],
      correctAnswer: "G",
      qValue: 1,
    },
    {
      question: "What time signature are waltzes commonly written in?",
      answers: ["4/4", "3/4", "5/4", "6/8"],
      correctAnswer: "3/4",
      qValue: 1,
    },
    {
      question: "Which clefs are piano music written in?",
      answers: [
        "Bass and Treble",
        "Tenor and Baritone",
        "C and G",
        "Alto and Mezzo-soprano",
      ],
      correctAnswer: "Bass and Treble",
      qValue: 1,
    },
    {
      question: "What is the third note in A harmonic minor?",
      answers: ["B", "C", "C#", "D"],
      correctAnswer: "C",
      qValue: 1,
    },
    {
      question: "Which of these tempo markings does NOT mean slow?",
      answers: ["Lento", "Langsam", "Grave", "Allegretto"],
      correctAnswer: "Allegretto",
      qValue: 1,
    },
    {
      question: "Which of these is a plagal cadence?",
      answers: ["V-I", "VI-I", "IV-I", "V-II"],
      correctAnswer: "IV-I",
      qValue: 1,
    },
    {
      question: "What is a mordent?",
      answers: [
        "A quick change of note that returns to the root",
        "A quick change of note that does not return to the root",
        "A harmonic shift over the same note",
        "A harmonic note that stays over a change in melody",
      ],
      correctAnswer: "A quick change of note that returns to the root",
      qValue: 1,
    },
    {
      question: "Which of these is C lydian?",
      answers: [
        "C, D, Eb, F, G, A, Bb, C",
        "C, D, Eb, F, G, A, B, C",
        "C, D, E, F#, G, A, B, C",
        "C, D, E, F#, G#, A, Bb, C",
      ],
      correctAnswer: "C, D, E, F#, G, A, B, C",
      qValue: 2,
    },
    {
      question: "What is the primary instrument used to tune an orchestra to?",
      answers: ["Violin", "Oboe", "French Horn", "Cello"],
      correctAnswer: "Oboe",
      qValue: 2,
    },
    {
      question: "The notes D, G, and A make up which chord?",
      answers: ["Dsus2", "D major", "D minor diminished", "Dsus4"],
      correctAnswer: "Dsus4",
      qValue: 2,
    },
    {
      question: "Who wrote the very famous 'Bohemian Rhapsody'?",
      answers: ["Pink Floyd", "Queen", "Stevie Wonder", "Frank Sinatra"],
      correctAnswer: "Queen",
      qValue: 1,
    },
    {
      question: "What was the #1 Song of 2002? (According to Billboard year-end)",
      answers: [
        "Evanescence - Bring Me To Life",
        "Green Day - American Idiot",
        "Eminem - Lose Yourself",
        "Drops of Jupiter - Train",
      ],
      correctAnswer: "Eminem - Lose Yourself",
      qValue: 1,
    },
    {
      question: "How many symphonies did Mozart write?",
      answers: ["14", "23", "32", "41"],
      correctAnswer: "41",
      qValue: 1,
    },
    {
      question: "Who is the lead singer of Arctic Monkeys?",
      answers: [
        "Luke Pritchard",
        "Alex Turner",
        "Brandon Flowers",
        "Brendon Urie",
      ],
      correctAnswer: "Alex Turner",
      qValue: 1,
    },
    {
      question: "Who is the lead singer of Red Hot Chili Peppers?",
      answers: ["Dave Grohl", "Kurt Cobain", "Chad Kroeger", "Anthony Kiedis"],
      correctAnswer: "Anthony Kiedis",
      qValue: 1,
    },
    {
      question: "Who is the lead singer of Bring Me The Horizon?",
      answers: ["Kellin Quinn", "Corey Taylor", "Oli Sykes", "Vessel"],
      correctAnswer: "Oli Sykes",
      qValue: 1,
    },
    {
      question: "Who makes up the duo Gnarls Barkley?",
      answers: [
        "Marshmello and Kane Brown",
        "Deadmau5 and CeeLo Green",
        "David Guetta and Daveed Diggs",
        "Avicii and Skrillex",
      ],
      correctAnswer: "Deadmau5 and CeeLo Green",
      qValue: 1,
    },
    {
      question: "How many movements are there in Beethoven's Moonlight Sonata?",
      answers: ["1", "2", "3", "4"],
      correctAnswer: "3",
      qValue: 1,
    },
    {
      question: "What was the Beatles' debut studio album?",
      answers: ["Abbey Road", "Sgt. Peppers Lonely Hearts Club Band", "Please Please Me", "Revolver"],
      correctAnswer: "Please Please Me",
      qValue: 2,
    },
    {
      question: "What is Tim Henson's, lead guitarist of Polyphia, choice of guitar brand?",
      answers: ["Gibson", "Ibanez", "Epiphone", "ESP"],
      correctAnswer: "Ibanez",
      qValue: 2,
    }
  ];
  

// You can access each question and its properties like this:
console.log(musicQuestions[0].question); // Prints the first question
console.log(musicQuestions[0].answers); // Prints the possible answers for the first question
console.log(musicQuestions[0].correctAnswer); // Prints the correct answer for the first question

let score = 0;
let currentQuestion = -1;

const startQuiz = () => {
  currentQuestion++;
  if (currentQuestion < musicQuestions.length) {
    const question = musicQuestions[currentQuestion];
    document.getElementById("questionBox").innerHTML = musicQuestions[currentQuestion].question;
    document.getElementById("answerBoxes").innerHTML = ""
    
    question.answers.forEach((item) => {
      const answerDiv = document.createElement("button");
      answerDiv.textContent = item;
      answerDiv.classList.add("p-10")
      answerDiv.classList.add("m-5")
      answerDiv.classList.add("border")
      answerDiv.classList.add("border-gray-600")
      answerDiv.classList.add("border-4")
      answerDiv.classList.add("rounded-lg")
      answerDiv.addEventListener("click", () => checkAnswer(item));
      document.getElementById("answerBoxes").appendChild(answerDiv);
    });
  } else {
    // Quiz finished, show the score or take other actions.
    document.getElementById("questionBox").classList.add("hidden");
    document.getElementById("answerBoxes").classList.add("hidden");
    document.getElementById("endPage").classList.remove("hidden");
    document.getElementById("retry").classList.remove("hidden")
    document.getElementById("endPage").innerHTML = `Quiz finished! You scored ${score}/25, Congrats!`
    // alert(`Quiz finished! Your score: ${score}/25`);
    document.getElementById("retry").addEventListener("click", () => {
       console.log("Yes")
        document.getElementById("homepage").classList.add("hidden");
        document.getElementById("questionBox").classList.remove("hidden");
        document.getElementById("answerBoxes").classList.remove("hidden");
        document.getElementById("startQuiz").classList.add("hidden");
        document.getElementById("retry").classList.add("hidden")
        score = 0
        currentQuestion = -1
        startQuiz();
      });  
    }
};

document.getElementById("startQuiz").addEventListener("click", () => {
  document.getElementById("homepage").classList.add("hidden");
  document.getElementById("questionBox").classList.remove("hidden");
  document.getElementById("answerBoxes").classList.remove("hidden");
  document.getElementById("startQuiz").classList.add("hidden");
  startQuiz();
});

const checkAnswer = (guess) => {
  const question = musicQuestions[currentQuestion];
  if (guess === question.correctAnswer) {
    score = score + question.qValue;
    console.log(score)
  }
  startQuiz();
};
 