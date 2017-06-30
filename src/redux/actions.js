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
  },
  FETCH_FORMS: {
    REQUEST: 'FETCH_FORMS_REQUEST',
    SUCCESS: 'FETCH_FORMS_SUCCESS',
    FAILURE: 'FETCH_FORMS_FAILURE',
  },
  COMPANY_SELECTED: 'COMPANY_SELECTED'
};

export const companies = {
  THEODO_UK: 'THEODO_UK',
  THEODO_FR: 'THEODO_FR',
}

export const googleClientInitRequest = (company) => ({
  type: types.GOOGLE_CLIENT_INIT.REQUEST,
  company,
});

export const googleClientInitSuccess = isLoggedIn => ({
  type: types.GOOGLE_CLIENT_INIT.SUCCESS,
  isLoggedIn,
});

export const googleClientInitFailure = error => ({
  type: types.GOOGLE_CLIENT_INIT.FAILURE,
  error,
});

export const loginRequest = () => ({
  type: types.LOGIN.REQUEST,
});

export const loginSuccess = () => ({
  type: types.LOGIN.SUCCESS,
});

export const loginFailure = error => ({
  type: types.LOGIN.FAILURE,
  error,
});

export const logoutRequest = () => ({
  type: types.LOGOUT.REQUEST,
});

export const logoutSuccess = () => ({
  type: types.LOGOUT.SUCCESS,
});

export const logoutFailure = error => ({
  type: types.LOGOUT.FAILURE,
  error,
});

export const fetchFormsRequest = () => ({
  type: types.FETCH_FORMS.REQUEST,
});

export const fetchFormsSuccess = forms => ({
  type: types.FETCH_FORMS.SUCCESS,
  forms,
});

export const fetchFormsFailure = error => ({
  type: types.FETCH_FORMS.FAILURE,
  error,
});

export const chooseCompany = (company) => ({
  type: types.COMPANY_SELECTED,
  company,
})
