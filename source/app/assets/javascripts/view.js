App.View = function(){}

App.View.prototype = {
  update: function(dataSource){
    this.updateQuiz(dataSource);
  },
  updateQuiz: function(quizzes){
    var source = this.generateSource($('#quizzes'));
    var template = Handlebars.compile(source);
    var html = template(quizzes);
    $(".container").append(html);
  },
  generateSource: function(jQ){
    var source = jQ.css("display","block").html();
    return source;
  }

}