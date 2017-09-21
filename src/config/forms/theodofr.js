import types from '@config/questionTypes'
import questionSlugs from '@config/questionSlugs'

export default {
  questions: [
    {
      slug: questionSlugs.SPEED,
      label: 'Quelle est votre appréciation sur la vitesse d\'avancement de l\'équipe Theodo ?',
      type: types.MULTIPLE_CHOICE,
      choices: [
        {
          slug: 5,
          label: '5 - Excellente'
        },
        {
          slug: 4,
          label: '4 - Très bonne'
        },
        {
          slug: 3,
          label: '3 - Bonne'
        },
        {
          slug: 2,
          label: '2 - Moyenne'
        },
        {
          slug: 1,
          label: '1 - Insuffisante'
        },
        {
          slug: 0,
          label: '0 - Très insuffisante'
        }
      ]
    },
    {
      slug: questionSlugs.COLLABORATION,
      label: 'Quelle est votre appréciation sur la qualité de l\'accompagnement Theodo ?',
      type: types.MULTIPLE_CHOICE,
      choices: [
        {
          slug: 5,
          label: '5 - Excellente'
        },
        {
          slug: 4,
          label: '4 - Très bonne'
        },
        {
          slug: 3,
          label: '3 - Bonne'
        },
        {
          slug: 2,
          label: '2 - Moyenne'
        },
        {
          slug: 1,
          label: '1 - Insuffisante'
        },
        {
          slug: 0,
          label: '0 - Très insuffisante'
        }
      ]
    },
    {
      slug: questionSlugs.CLIENT_VOICE,
      label: 'Quel changementamélioration prioritaire pourrait vous amener à améliorer votre appréciation ?',
      type: types.TEXT
    },
    {
      slug: questionSlugs.MAGIC_WAND,
      label: 'Si vous aviez une baguette magique quelle est "la" chose que vous changeriez chez Theodo ?',
      type: types.TEXT
    },
    {
      slug: questionSlugs.RECOMMENDATION,
      label: 'Seriez-vous prêt à recommander Theodo ?',
      type: types.MULTIPLE_CHOICE,
      choices: [
        {
          slug: 'yesAbs',
          label: 'Oui bien sûr'
        },
        {
          slug: 'yes',
          label: 'Oui'
        },
        {
          slug: 'notReally',
          label: 'Pas vraiment'
        },
        {
          slug: 'notAtAll',
          label: 'Pas du tout'
        }
      ]
    },
    {
      slug: questionSlugs.SALE_APPOINTMENT,
      label: 'Souhaitez-vous faire un point commercial avec Theodo dans la semaine à venir ?',
      type: types.MULTIPLE_CHOICE,
      choices: [
        {
          slug: 'yes',
          label: 'Oui'
        },
        {
          slug: 'no',
          label: 'Non, ce n’est pas nécessaire pour l’instant'
        }
      ]
    }
  ],
  PROJECT: 'Projet',
  SPRINT: 'Sprint n°',
  YES_ABS: 'Oui bien sûr'
}
