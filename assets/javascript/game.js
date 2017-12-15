$(document).ready(function() {
    var correct = 0;
    var incorrect = 0;
    var questionCount = 3;
    var time = 5;
    var intervalId;
    var delayId;


    // Questions: 
    // ask about display change
    // dynamically creating html

    // Do buttons instead of radios, and then just assign an ID to each button


    // put the questions into objects
    var questions = {
        question1: {
            q: "Which Studio made Uncharted?",
            a1: " Naughty Dog",
            a2: " 343",
            a3: " Rockstar Games",
            a4: " Konami",
            isRight: "a1",
        },
        question2: {
            q: "When did Tomb Raider first come out?",
            a1: " 2001",
            a2: " 1993",
            a3: " 1996",
            a4: " 1995",
            isRight: "a3",
        },
        question3: {
            q: "The first person shooter Doom was first released on: ",
            a1: " 1990",
            a2: " 1995",
            a3: " 1993",
            a4: " 2000",
            isRight: "a3",
        },
    };

    console.log(questions);
    console.log(questions.question1.isRight);
    console.log(questions.length);
        
        //shows up and works fine .. but for some reason it's bold. (question to ask)
    $("#display").hide();

    $("#start").on('click',function(){
        $("#start").hide();
        $("#display").show();
        intervalId = setInterval(decrement,1000);
        showQuestions();

    });

    function decrement(){
        //function to decrement timer by 1 each second
        // for time > 0
        time--;
        $("#timeLeft").html(time);
        // if time is equal to 0, we want to stop the timer
        if (time == 0){
            alert("time's up!");
            incorrect++;
            correctAnswer(2);
            stop();
        }
    }

    function stop() {
        //  Clears our intervalId
        //  We just pass the name of the interval
        //  to the clearInterval function to stop the timer
        clearInterval(intervalId);
     }

    function nextPage(){
        setTimeout(function(){console.log("Test Time Out")}, 2000);
        delayId = setTimeout(showQuestions, 3000);
    }

    // 

    function correctAnswer(x){
        console.log(questionCount);
        if (x == 1){
            console.log("Correct: " + correct);
            if (questionCount == 3){
                $("#display").html("Correct! It was Naughty Dog");
            }

            else if (questionCount == 2){
                $("#display").html("Correct! It was on 1996");
            }

            else if (questionCount == 1){
                $("#display").html("Correct! It was on 1993");
            }
        }

        else if (x == 2) {
            console.log("Incorrect: " + incorrect);
            if (questionCount == 3){
                $("#display").html("The correct answer was " + questions.question1.a1);
            }

            else if (questionCount == 2){
                $("#display").html("The correct answer was " + questions.question2.a3);
            }

            else if (questionCount == 1){
                $("#display").html("The correct answer was " + questions.question3.a3);
            }

        }
        stop();
        nextPage();
    }

    
    function showQuestions(){

        if (questionCount == 3){
            $("#question").html(questions.question1.q);
            $("#answer1").html(questions.question1.a1);
            $("#answer2").html(questions.question1.a2);
            $("#answer3").html(questions.question1.a3);
            $("#answer4").html(questions.question1.a4);

            $( "input[type='radio']").on("click",function(){
                // Registering the click on any answer button to a variable
                var answerId = $(this).attr("id");
                console.log("You clicked " + answerId);
                
            // After clicking the submit button, check if the chosen answer was correct or not
            $("#checkAnswer").on("click", function(){
                console.log("Submit");
                //increase correctCount if the answer is correct
                if (answerId == "a1"){
                    stop();
                    correct++;
                    console.log(questionCount);
                    correctAnswer(1);
                    questionCount--; // goes to correctAnswer, which displays the answer to the question
                }
                // increase incorrectCount if the answer is incorrect
                // look into unbind
                else{
                    stop();
                    incorrect++;
                    console.log(questionCount);
                    correctAnswer(2); // goes to correctAnswer, which displays the answer to the question
                    questionCount--;
                }
                
                // correctAnswer();
                $("#checkAnswer").off('click'); 
            })
            })
        }

        else if (questionCount == 2){
            $("#question").html(questions.question2.q);
            $("#answer1").html(questions.question2.a1);
            $("#answer2").html(questions.question2.a2);
            $("#answer3").html(questions.question2.a3);
            $("#answer4").html(questions.question2.a4);

            $( "input[type='radio']").on("click",function(){
                // Registering the click on any answer button to a variable
                var answerId = $(this).attr("id");
                console.log("You clicked " + answerId);
                
            // After clicking the submit button, check if the chosen answer was correct or not
            $("#checkAnswer").on("click", function(){
                console.log("Submit");
                //increase correctCount if the answer is correct
                if (answerId == "a3"){
                    stop();
                    correct++;
                    correctAnswer(1); // goes to correctAnswer, which displays the answer to the question
                    questionCount--;
                }
                // increase incorrectCount if the answer is incorrect
                // look into unbind
                else{
                    stop();
                    incorrect++;
                    correctAnswer(2); // goes to correctAnswer, which displays the answer to the question;
                    questionCount--;
                }
                $("#checkAnswer").off('click');
            })
            })
        }

        else if (questionCount == 1){
            $("#question").html(questions.question3.q);
            $("#answer1").html(questions.question3.a1);
            $("#answer2").html(questions.question3.a2);
            $("#answer3").html(questions.question3.a3);
            $("#answer4").html(questions.question3.a4);

            $( "input[type='radio']").on("click",function(){
                // Registering the click on any answer button to a variable
                var answerId = $(this).attr("id");
                console.log("You clicked " + answerId);
                
            // After clicking the submit button, check if the chosen answer was correct or not
            $("#checkAnswer").on("click", function(){
                console.log("Submit");
                //increase correctCount if the answer is correct
                if (answerId == "a3"){
                    stop();
                    correct++;
                    correctAnswer(1); // goes to correctAnswer, which displays the answer to the question
                    questionCount--;
                }
                // increase incorrectCount if the answer is incorrect
                // look into unbind
                else{
                    stop();
                    incorrect++;
                    correctAnswer(2); // goes to correctAnswer, which displays the answer to the question;
                    questionCount--;
                }
                $("#checkAnswer").off('click');
            })
            })
        }
    };



});
