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
      };
    case types.GOOGLE_CLIENT_INIT.FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
}
