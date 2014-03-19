var App = {}

App.Quiz = function(config){
  this.quiz_id = config.quiz_id;
  this.name = config.name;
}

App.Quiz.prototype = {

}

App.Question = function(config) {
  this.quiz_id = config.quiz_id;
  this.question_id = config.question_id;
  this.question = config.question;
  this.choices = config.choices;
}

App.Question.prototype = {

}



// App.Choice = function(config){
//   this.choice_id = config.choice_id;
//   this.question_id = config.question_id;
//   this.quiz_id = config.quiz_id;
//   this.choice = config.choice;
// }

// App.Choice.prototype = {

// }
