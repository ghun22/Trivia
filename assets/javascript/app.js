var panel = $("#quiz");

var questions = [
{ 
  question: "In avangers infinite wars, Who was the main cause of losing to Thenos?",
  answers: ["Tony Stark", "SpiderMan", "Starlord", "Dr.Strange"],
  questionAns: "Starlord"
},
{
  question: "In avangers infinite wars, what was the model number of Irom man's suit?",
  answers: ["mark-3","mark-49", "mark-90", "mark-50"],
  questionAns: "mark-50"
},
{
  question: "In avangers infinite wars, who DID NOT disappeared by finger snap?",
  answers: ["Dr.Strange", "Black Widow", "SpiderMan", "Winter Soldier"],
  questionAns: "Black Widow"
}];


var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 60,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#timer").prepend("<h2>Time Remaining: <span id='counter-number'>60</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].questionAns) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].questionAns) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].questionAns) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });


    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>yay you are done!!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    if(this.correct === 3)
    {
    panel.append("Wow you got it all right!")
    }    
    if(this.correct === 2)
    {
    panel.append("omg you were sooo close! maybe next time :(")
    }
    if(this.correct === 1 || this.correct ===0)
    {
      panel.append("did you not watch avengers?!?, go watch it >:) its really good!")
    }
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});