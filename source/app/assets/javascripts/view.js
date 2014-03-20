App.targets = {
  questionSel: ".quiz",
  choiceSel: ".choice"
}

App.View = function(){}

App.View.prototype = {
  update: function(dataSource){
    //debugger;
    if (dataSource.questions){
      $('.container').empty();
      this.updateQuestions(dataSource);
      //there are only answers if there are questions
      if (dataSource.answers){
        this.updateMessage(dataSource);
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
    //debugger;
    // Flag on the data whether it is right or wrong.
    // What/how we render is a function of that flag.
    //check if r/w
    // if(right){
    //   $(asdf).empty
    //   render
    // }else{
    //   append "wrongggg, TRY AGAIN MON"
  },
  generateTemplate: function(jQ){
    var source = jQ.html();
    var template = Handlebars.compile(source);
    return template;
  }


}