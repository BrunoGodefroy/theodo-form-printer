function handleForm(form, isBAM) {
  var arrayOfItems = form.getItems()
  var questions = []

  for ( var j = 0; j < arrayOfItems.length; j++){
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
  if(isBAM) {
    questions[0].questionSlug = "POAddress"
    questions[2].questionSlug = "speed"
    questions[3].questionSlug = "colaboration"
    questions[4].questionSlug = "client-voice"
    questions[5].questionSlug = "magic-wand"
    questions[6].questionSlug = "recommendation"
    questions[7].questionSlug = "recommendationExplanation"
    questions[8].questionSlug = "sales-appointement"
    questions[1].questionSlug = "project"
  } else {
    questions[0].questionSlug = "speed"
    questions[1].questionSlug = "colaboration"
    questions[2].questionSlug = "client-voice"
    questions[3].questionSlug = "magic-wand"
    questions[4].questionSlug = "recommendation"
    questions[5].questionSlug = "sales-appointement"
    questions[6].questionSlug = "project"
    questions[7].questionSlug = "sprint"
  }


  var formResponses = form.getResponses();
  
  var formSet = Array(30)
  for (i = 0; i < formSet.length; i++){
    response = formResponses[formResponses.length - 1 - i]
    formSet[i] = {}
    questions.forEach(function(question){
      responseItems = response.getItemResponses()[question.orderId]
      if(responseItems) {
        formSet[i][question.questionSlug] = responseItems.getResponse()
      }
    })
  }
  formSet = getSatisfation(formSet, yesOfCourse)
  Logger.log(formSet)
  return {
    responses: formSet,
    questions: questions
  }
}

function getSatisfation(formSet, yesOfCourse) {
  Logger.log(yesOfCourse)
  var speed = 0
  var colaboration = 0
  var satisfaction = ''
  formSet.forEach(function(set) {
    speed = parseInt(set['speed'].charAt(0))
    colaboration = parseInt(set['colaboration'].charAt(0))
    
    if(speed + colaboration >= 8) {
      if (set['recommendation'] == yesOfCourse) {
        satisfaction = 'Waouh'
      } else {
        satisfaction = 'OK'
      }
    } else {
      satisfaction = 'KO'
    }
    set['satisfaction'] = satisfaction
    Logger.log(satisfaction)
    satisfaction = ''
    speed = 0
    colaboration = 0
  })
  return formSet
}

function getForms(formId) {
  var form = FormApp.openById(formId);
  var isBAM = (formId == '1oVWjK2woLw53yRa-2pkU2pJn9FRS3yiOOcRzgpWoFnQ')
  return handleForm(form, isBAM)
}