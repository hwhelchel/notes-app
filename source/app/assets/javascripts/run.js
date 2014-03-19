$(function(){
  App.view = new App.View();
  App.controller = new App.Controller({view: App.view});
  App.controller.fetchQuiz();
})
