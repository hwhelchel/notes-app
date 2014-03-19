App.Controller = function(config){
  this.appData = {};
  this.view = config.view;
}

App.Controller.prototype = {
  generateSession: function(){
    var token = Math.floor((1 + Math.random()) * 0x10000).toString(16);
    this.appData.token = token;
  },
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
  },
  makeQuestion: function(question){
    this.appData.question = new App.Question(question);
  },
  fetchQuestion: function(tag){
    var controller = this;
    var data = {};
    data.session_key = controller.appData.token;
    var path = $(tag).attr("href");
    console.log(path);
    $.ajax({
      url: path,
      type: 'GET',
      data: data,
      dataType: 'json'
    }).done(function(resp){
      console.log(resp);
      controller.makeQuestion(resp.question);
      controller.view.update(controller.appData);
      // resp = {
      //   question: {
      //     choices: []
      //     question: text
      //     question_id: id
      //   }
      // }
      // for(i = 0; i < resp.quizzes.length; i++){
      //   controller.makeQuestion(resp.quizzes[i]);
      // }
      // controller.view.update(controller.appData);
    }).fail(function(resp){
      console.log('fail');
      console.log(resp);
    })
  }


}