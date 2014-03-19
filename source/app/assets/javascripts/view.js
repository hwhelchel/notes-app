App.View = function(){}

App.View.prototype = {
  update: function(dataSource){
    if (dataSource.question){
      this.updateQuestion(dataSource);
    } else {
      this.updateQuiz(dataSource);
    }
  },
  updateQuiz: function(quizzes){
    // debugger;
    var template = this.generateTemplate($('#quizzes'));
    var html = template(quizzes);
    $(".container").append(html);
  },
  updateQuestion: function(dataSource){
    var template = this.generateTemplate($('#question'));
    var html = template(dataSource.question);
    // debugger;
    $(".container").empty();
    $(".container").append(html);
  },
  generateTemplate: function(jQ){
    var source = jQ.css("display","block").html();
    var template = Handlebars.compile(source);
    return template;
  }

}