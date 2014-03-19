App.targets = {
  questionSel: ".quiz",
  choiceSel: ".choice"
}

App.View = function(){}

App.View.prototype = {
  update: function(dataSource){
    if (dataSource.questions){
      this.updateQuestions(dataSource);
    } else {
      this.updateQuiz(dataSource);
    }
  },
  updateQuiz: function(quizzes){
    var template = this.generateTemplate($('#quizzes'));
    var html = template(quizzes);
    $(".container").append(html);
  },
  updateQuestions: function(dataSource){
    var template = this.generateTemplate($('#question'));
    var html = template({questions: dataSource.questions});
    $(".container").empty();
    $(".container").append(html);
  },
  generateTemplate: function(jQ){
    var source = jQ.css("display","block").html();
    var template = Handlebars.compile(source);
    return template;
  }

}