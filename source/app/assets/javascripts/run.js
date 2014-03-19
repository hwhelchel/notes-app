$(function(){
  App.view = new App.View();
  App.controller = new App.Controller({view: App.view});
  App.controller.generateSession();
  App.controller.fetchQuiz();
  new App.Binder({controller: App.controller,targets: App.targets}).bind();
});
