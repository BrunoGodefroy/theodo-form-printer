function handleForm(form) {
  var arrayOfItems = form.getItems()
  var questions = []
  for ( var j = 0; j < 8; j++){
    var question = {
      'orderId': j,
      'label': arrayOfItems[j].getTitle(),
      'id': arrayOfItems[j].getId(),
      'type': arrayOfItems[j].getType().name()
    }
    if ( arrayOfItems[j].getType().name() === 'MULTIPLE_CHOICE') {
      var answers = []
      arrayOfItems[j].asMultipleChoiceItem().getChoices().forEach(function(choice) {
        answers.push(choice.getValue())
      })
      question.answers = answers;
    }
    questions.push(question)
  }
  
  questions[0].questionSlug = "speed"
  questions[1].questionSlug = "colaboration"
  questions[2].questionSlug = "client-voice"
  questions[3].questionSlug = "magic-wand"
  questions[4].questionSlug = "recommendation"
  questions[5].questionSlug = "sales-appointement"
  questions[6].questionSlug = "project"
  questions[7].questionSlug = "sprint"


  var formResponses = form.getResponses();
  
  var formSet = Array(30)
  for (i = 0; i < formSet.length; i++){
    response = formResponses[formResponses.length - 1 - i]
    formSet[i] = {}
    questions.forEach(function(question){
      formSet[i][question.questionSlug] = response.getItemResponses()[question.orderId].getResponse()
    })
  }
  Logger.log(formSet)
  return {
    responses: formSet,
    questions: questions
  }
}


function getForms(formId) {
  var form = FormApp.openById(formId);

  return handleForm(form)
}