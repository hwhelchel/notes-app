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

App.Choice = function(config){
  this.choice = config.choice;
  this.choice_id = config.choice_id;
  this.question_id = config.question_id;
  this.quiz_id = config.quiz_id;
}

App.Choice.prototype = {

}

App.Answer = function(config){
  this.correct = config.correct;
  this.correct_choice_id = config.correct_choice_id;
  this.more_questions = config.more_questions;
  this.num_correct = config.num_correct;
  this.num_incorrect = config.num_incorrect;
  this.choice_id = config.submitted_choice_id;
  this.question_id = config.question_id;
  this.quiz_id = config.quiz_id;
}

App.Answer.prototype = {

}
