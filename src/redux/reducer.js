import { types } from './actions';

const initialState = {
  loggedIn: false,
  loading: false,
  error: false,
  forms: {},
  isClientLoaded: false,
  errorMessage: '',
}


export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.GOOGLE_CLIENT_INIT.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GOOGLE_CLIENT_INIT.SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: action.isLoggedIn,
        isClientLoaded: true,
        error: false,
      };
    case types.LOGIN.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.LOGIN.SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        error: false,
      };
    case types.LOGOUT.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.LOGOUT.SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        error: false,
      };
    case types.FETCH_FORMS.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_FORMS.SUCCESS:
      return {
        ...state,
        loading: false,
        forms: action.forms,
        error: false,
      };
    case types.LOGIN.FAILURE:
    case types.GOOGLE_CLIENT_INIT.FAILURE:
    case types.LOGOUT.FAILURE:
    case types.FETCH_FORMS.FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.error,
      };
    default:
      return state;
  }
}
