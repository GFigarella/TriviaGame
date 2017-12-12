$(document).ready(function() {
    var correct = 0;
    var incorrect = 0;

    $( "input[type='radio']" ).on("click",function(){
        // Registering the click on the checkbox to a variable
        var answerId = $(this).attr("id");
        console.log("You clicked " + answerId);

        // After clicking the submit button, check if the chosen answer was correct or not
        $("button[type='button']").on("click", function(){
            console.log("Submit");
            //increase correctCount if the answer is correct
            if ($(this).attr("id") == "optionsRadios1"){
                correct++;
                $("#result").text("You answered correctly!")
                $("#correctCount").text(correct);
            }
            // increase incorrectCount if the answer is incorrect
            else{
                incorrect++;
                $("#result").text("You answered incorrectly!")
                $("#incorrectCount").text(incorrect);
            }
        })
    })

});
