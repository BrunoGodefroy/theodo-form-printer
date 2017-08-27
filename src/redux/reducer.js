import { types } from '@redux//actions'

const initialState = {
  loggedIn: false,
  loading: false,
  error: false,
  forms: [],
  questions: [],
  isCompanyChosen: false,
  selectedCompany: { name: '', scriptId: '' },
  isClientLoaded: false,
  errorMessage: '',
  numberOfWahou: 0,
  numberOfOK: 0,
  numberOfKO: 0
}

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case types.GOOGLE_CLIENT_INIT.REQUEST:
      return {
        ...state,
        loading: true
      }
    case types.GOOGLE_CLIENT_INIT.SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: action.isLoggedIn,
        isClientLoaded: true,
        error: false
      }
    case types.LOGIN.REQUEST:
      return {
        ...state,
        loading: true
      }
    case types.LOGIN.SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        error: false
      }
    case types.LOGOUT.REQUEST:
      return {
        ...state,
        loading: true
      }
    case types.LOGOUT.SUCCESS:
      return initialState
    case types.FETCH_FORMS.REQUEST:
      return {
        ...state,
        loading: true
      }
    case types.FETCH_FORMS.SUCCESS:
      const forms = action.payload.responses
      let numberOfWahou = 0
      let numberOfOK = 0
      let numberOfKO = 0
      forms.forEach(form => {
        if (form['satisfaction'] === 'Waouh') {
          numberOfWahou += 1
        }
        if (form['satisfaction'] === 'OK') {
          numberOfOK += 1
        }
        if (form['satisfaction'] === 'KO') {
          numberOfKO += 1
        }
      })
      return {
        ...state,
        loading: false,
        forms,
        questions: action.payload.questions,
        error: false,
        numberOfKO,
        numberOfOK,
        numberOfWahou
      }
    case types.LOGIN.FAILURE:
    case types.GOOGLE_CLIENT_INIT.FAILURE:
    case types.LOGOUT.FAILURE:
    case types.FETCH_FORMS.FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.error
      }
    case types.COMPANY_SELECTED:
      return {
        ...state,
        isCompanyChosen: true,
        selectedCompany: action.company
      }
    default:
      return state
  }
}
