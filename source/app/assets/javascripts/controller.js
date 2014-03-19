App.Controller = function(config){
  this.appData = {};
  this.view = config.view;
}

App.Controller.prototype = {
  makeQuiz: function(quizJSon){
    if (!this.appData.quizzes){
      this.appData.quizzes = [];
    }
    this.appData.quizzes.push(new App.Quiz(quizJSon));
  },
  fetchQuiz: function(){
    var controller = this;
    $.ajax({
      url: '/quizzes.json',
      type: 'GET',
      dataType: 'json'
    }).done(function(resp){
      for(i = 0; i < resp.quizzes.length; i++){
        controller.makeQuiz(resp.quizzes[i]);
      }
      controller.view.update(controller.appData);
    }).fail(function(resp){
      console.log(resp);
    })
  }
}