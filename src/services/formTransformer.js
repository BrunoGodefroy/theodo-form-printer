import moment from 'moment'

import {
  formStatus,
  questionSlugs
} from '@config'

export default (data, company) => {
  const { questions, YES_ABS, SPRINT, PROJECT } = company.config

  const collaborationLabel = questions.find(question => question.slug === questionSlugs.COLLABORATION).label
  const speedLabel = questions.find(question => question.slug === questionSlugs.SPEED).label
  const recommendationLabel = questions.find(question => question.slug === questionSlugs.RECOMMENDATION).label

  const parseFormTheodoUk = form => {
    const collaboration = typeof form[collaborationLabel] !== 'undefined' ? parseInt(form[collaborationLabel][0]) : 0
    const speed = typeof form[speedLabel] !== 'undefined' ? parseInt(form[speedLabel][0]) : 0
    const recomendation = form[recommendationLabel] === YES_ABS
    let status

    if (recomendation && collaboration + speed >= 8) {
      if (collaboration + speed === 10) {
        status = formStatus.WOW
        numberOfWow++
      } else {
        status = formStatus.OK
        numberOfOk++
      }
    } else {
      status = formStatus.KO
      numberOfKo++
    }

    return {
      questions: questions.map(question => ({
        ...question,
        answer: form[question.label]
      })),
      project: form[PROJECT],
      sprint: form[SPRINT],
      timestamp: moment(form.timestamp),
      status
    }
  }

  let numberOfWow = 0
  let numberOfOk = 0
  let numberOfKo = 0
  let forms = Object.values(data).map(parseFormTheodoUk)

  const compareFormDate = (formA, formB) => formA.timestamp.isBefore(formB.timestamp) ? 1 : -1
  forms.sort(compareFormDate)

  return { forms, numberOfWow, numberOfOk, numberOfKo }
}
