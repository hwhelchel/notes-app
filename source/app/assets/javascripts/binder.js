App.Binder = function(config){
  this.controller = config.controller;
  this.targets = config.targets;
}

App.Binder.prototype = {
  bind: function(){
    this.bindQuestion();
    this.bindChoice();
  },
  bindQuestion: function(){
    var b = this;
    $('body').on('click',b.targets.questionSel,function(e){
      e.preventDefault();
      b.controller.fetchQuestion(this);
    })
  },
  bindChoice: function(){
    var b = this;
    $('body').on('click',b.targets.choiceSel, function(e){
      e.preventDefault();
      b.controller.sendAnswer(this);
    })
  }
}
