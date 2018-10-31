$(document).ready(function() {
  $("#myForm").submit(function(event) {
    event.preventDefault();
    var nameInput = $("input#name1").val();
    var questionOne = document.getElementsByName('question1');
    var questionTwo = document.getElementsByName('question2');
    var questionThree = document.getElementsByName('question3');
    var questionFour = document.getElementsByName('question4');
    var questionFive = document.getElementsByName('question5');

    var checkedOne;
    var checkedTwo;
    var checkedThree;
    var checkedFour;
    var checkedFive;

    for (var i=0; i < questionOne.length; i++) {
      if (questionOne[i].checked) {
        checkedOne = questionOne[i].value;
        console.log(checkedOne);
      }
    }
    for (var i=0; i < questionTwo.length; i++) {
      if (questionTwo[i].checked) {
        checkedTwo = questionTwo[i].value;
      }
    }
    for (var i=0; i < questionThree.length; i++) {
      if (questionThree[i].checked) {
        checkedThree = questionThree[i].value;
      }
    }
    for (var i=0; i < questionFour.length; i++) {
      if (questionFour[i].checked) {
        checkedFour = questionFour[i].value;
      }
    }
    for (var i=0; i < questionFive.length; i++) {
      if (questionFive[i].checked) {
        checkedFive = questionFive[i].value;
      }
    }
    $("#name1").text(nameInput);
    $("#output1").show();

    //q1a1 + q2a1 + q3a1 + q4a1 + q5a1 Ruby
    if (checkedOne === "q1a1" && checkedTwo === "q2a1" && checkedThree === "q3a1" && checkedFour === "q4a1"  && checkedFive === "q5a1") {
      $("#output1").text("Hello" + " " + nameInput + ", " + "Ruby is the best stack for you!");
    }
    //q1a2 + q2a1 + q3a2 + q4a1 + q5a2 Java
    else if (checkedOne === "q1a2" && checkedTwo === "q2a1" && checkedThree === "q3a2" && checkedFour === "q4a1" && checkedFive === "q5a2") {
      $("#output1").text("Hello" + " " + nameInput + ", " + "Java is the best stack for you!");
    }
    //q1a2 + q2a3 + q3a2 + q4a3 + q5a2 C#
    else if (checkedOne === "q1a2" && checkedTwo === "q2a3" && checkedThree === "q3a2" && checkedFour === "q4a3" && checkedFive === "q5a2") {
      $("#output1").text("Hello" + " " + nameInput + ", " + "C# is the best stack for you!");
      }
  });
});
