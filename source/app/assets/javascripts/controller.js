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
  makeQuestion: function(question){
    if (!this.appData.questions){
      this.appData.questions = [];
    }
    this.appData.questions.push(new App.Question(question));
  },
  recordAnswer: function(answer){
    if (!this.appData.answers){
      this.appData.answers = [];
    }
    this.appData.answers.push(new App.Answer(answer));
  },
  makeChoices: function(choices){
    if (!this.appData.choices){
      this.appData.choices = [];
    }
    for(i=0; i < choices.length; i++){
      this.appData.choices.push(new App.Choice(choices[i]));
    }
  },
  fetchQuiz: function(){
    var controller = this;
    var config = {};
    config.url = '/quizzes.json';
    config.type = 'GET';
    config.done = function(resp){
      for(i = 0; i < resp.quizzes.length; i++){
        controller.makeQuiz(resp.quizzes[i]);
      }
      controller.view.update(controller.appData);
    };
    config.fail = function(resp){
      console.log(resp);
    }
    controller.ajax(config);
  },
  fetchQuestion: function(tag){
    var controller = this;
    controller.appData.questionPath = tag;
    var config = {};
    config.url = $(tag).attr("href");
    config.type = 'GET';
    config.data = {};
    config.data.session_key = controller.appData.token;
    config.done = function(resp){
      controller.makeQuestion(resp.question);
      controller.makeChoices(resp.question.choices);
      controller.view.update(controller.appData);
    };
    config.fail = function(resp){
      console.log('fail');
      console.log(resp);
    };
    controller.ajax(config);
  },
  sendAnswer: function(tag){
    var controller = this;
    var config = {};
    config.url = $(tag).attr("href");
    config.type = 'POST';
    config.data = {};
    config.data.choice_id = $(tag).attr("data-choice");
    config.data.session_key = controller.appData.token;
    config.done = function(resp){
      console.log(resp);
      if (resp.status.correct && resp.status.more_questions) {
        controller.appData.msg = "Correct!";
        controller.fetchQuestion(controller.appData.questionPath);
      } else if (resp.status.correct && !resp.status.more_questions){
        controller.appData.msg = "Correct!";
        controller.appData.gameOver = true;
      } else {
        controller.appData.msg = "Wrong answer."
      }
        controller.recordAnswer(resp.status);
        controller.view.update(controller.appData);
    };
    config.fail = function(resp){
      console.log('fail');
    }
    controller.ajax(config);
  },
  ajax: function(config){
    $.ajax({
      url: config.url,
      type: config.type,
      data: config.data,
      dataType: 'json'
    }).done(config.done)
    .fail(config.fail)
  }
}

