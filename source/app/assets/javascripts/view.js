App.targets = {
  questionSel: ".quiz",
  choiceSel: ".choice"
}

App.View = function(){}

App.View.prototype = {
  update: function(dataSource){
    if (dataSource.questions){
      $('.container').empty();
      this.updateQuestions(dataSource);
      if (dataSource.answers){
        this.updateMessage(dataSource);
      };
      if (dataSource.gameOver){
        this.updateScore(dataSource);
      };
    } else {
      this.updateQuiz(dataSource);
    };
  },
  updateQuiz: function(quizzes){
    var template = this.generateTemplate($('#quizzes'));
    var html = template(quizzes);
    $(".container").append(html);
  },
  updateQuestions: function(dataSource){
    var question = dataSource.questions[dataSource.questions.length - 1]
    var template = this.generateTemplate($('#question'));
    var html = template(question);
    $(".container").append(html);
  },
  updateMessage: function(dataSource){
    var template = this.generateTemplate($('#message'));
    var html = template({message: dataSource.msg});
    $(".container").append(html);
  },
  updateScore: function(dataSource){
    var template = this.generateTemplate($('#score'));
    var html = template(dataSource.answers[dataSource.answers.length - 1]);
    $(".container").append(html);
  },
  generateTemplate: function(jQ){
    var source = jQ.html();
    var template = Handlebars.compile(source);
    return template;
  }


}