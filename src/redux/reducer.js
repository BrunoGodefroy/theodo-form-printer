import { types } from './actions';

const initialState = {
  loggedIn: false,
  loading: false,
  error: false,
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
        loggedIn: true
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
        loggedIn: false
      };
    case types.LOGIN.FAILURE:
    case types.GOOGLE_CLIENT_INIT.FAILURE:
    case types.LOGOUT.FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
}
