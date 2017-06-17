export const types = {
  GOOGLE_CLIENT_INIT: {
    REQUEST: 'GOOGLE_CLIENT_INIT_REQUEST',
    SUCCESS: 'GOOGLE_CLIENT_INIT_SUCCESS',
    FAILURE: 'GOOGLE_CLIENT_INIT_FAILURE',
  },
  LOGIN: {
    REQUEST: 'LOGIN_REQUEST',
    SUCCESS: 'LOGIN_SUCCESS',
    FAILURE: 'LOGIN_FAILURE',
  },
  LOGOUT: {
    REQUEST: 'LOGOUT_REQUEST',
    SUCCESS: 'LOGOUT_SUCCESS',
    FAILURE: 'LOGOUT_FAILURE',
  }
};

export const googleClientInitRequest = () => ({
  type: types.GOOGLE_CLIENT_INIT.REQUEST,
});

export const googleClientInitSuccess = (isLoggedIn) => ({
  type: types.GOOGLE_CLIENT_INIT.SUCCESS,
  isLoggedIn,
});

export const googleClientInitFailure = () => ({
  type: types.GOOGLE_CLIENT_INIT.FAILURE,
});

export const loginRequest = () => ({
  type: types.LOGIN.REQUEST,
});

export const loginSuccess = () => ({
  type: types.LOGIN.SUCCESS,
});

export const loginFailure = () => ({
  type: types.LOGIN.FAILURE,
});

export const logoutRequest = () => ({
  type: types.LOGOUT.REQUEST,
});

export const logoutSuccess = () => ({
  type: types.LOGOUT.SUCCESS,
});

export const logoutFailure = () => ({
  type: types.LOGOUT.FAILURE,
});
