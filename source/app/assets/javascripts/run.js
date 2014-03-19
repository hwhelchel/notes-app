$(function(){
  App.view = new App.View();
  App.controller = new App.Controller({view: App.view});
  App.controller.generateSession();
  App.controller.fetchQuiz();
  questionListener();
})


var questionListener = function(){
  $('body').on('click','a',function(e){
    e.preventDefault();
    App.controller.fetchQuestion(this);
  })
}
