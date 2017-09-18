import types from '@config/questionTypes'
import questionSlugs from '@config/questionSlugs'

export default {
  questions: [
    {
      slug: questionSlugs.SPEED,
      label: 'How do you feel about the speed of the team?',
      type: types.MULTIPLE_CHOICE,
      choices: [
        {
          slug: 5,
          label: '5 - Excellent'
        },
        {
          slug: 4,
          label: '4 - Very Good'
        },
        {
          slug: 3,
          label: '3 - Good'
        },
        {
          slug: 2,
          label: '2 - Average'
        },
        {
          slug: 1,
          label: '1 - Not good'
        },
        {
          slug: 0,
          label: '0 - Not good at all'
        }
      ]
    },
    {
      slug: questionSlugs.COLLABORATION,
      label: 'How do you feel about the quality of the collaboration with Theodo?',
      type: types.MULTIPLE_CHOICE,
      choices: [
        {
          slug: 5,
          label: '5 - Excellent'
        },
        {
          slug: 4,
          label: '4 - Very Good'
        },
        {
          slug: 3,
          label: '3 - Good'
        },
        {
          slug: 2,
          label: '2 - Average'
        },
        {
          slug: 1,
          label: '1 - Not Good'
        },
        {
          slug: 0,
          label: '0 - Not Good at all'
        }
      ]
    },
    {
      slug: questionSlugs.CLIENT_VOICE,
      label: 'What is the main priority the team should concentrate on to improve the score?',
      type: types.TEXT
    },
    {
      slug: questionSlugs.MAGIC_WAND,
      label: 'Should you have a magic wand, what is "the" thing you would change at Theodo?',
      type: types.TEXT
    },
    {
      slug: questionSlugs.RECOMMENDATION,
      label: 'Would you recommend Theodo?',
      type: types.MULTIPLE_CHOICE,
      choices: [
        {
          slug: 'yesAbs',
          label: 'Yes, absolutely'
        },
        {
          slug: 'yes',
          label: 'Yes'
        },
        {
          slug: 'notReally',
          label: 'Not really'
        },
        {
          slug: 'notAtAll',
          label: 'Not at all'
        }
      ]
    },
    {
      slug: questionSlugs.SALE_APPOINTMENT,
      label: 'Would you like to have a sales appointment with your Project Director this week?',
      type: types.MULTIPLE_CHOICE,
      choices: [
        {
          slug: 'yes',
          label: 'Yes'
        },
        {
          slug: 'no',
          label: 'No'
        }
      ]
    }
  ],
  PROJECT: 'Project',
  SPRINT: 'Sprint n°',
  YES_ABS: 'Yes, absolutely'
}
