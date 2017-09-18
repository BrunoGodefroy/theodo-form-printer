export const types = {
  LOGIN: {
    REQUEST: 'LOGIN_REQUEST',
    SUCCESS: 'LOGIN_SUCCESS',
    FAILURE: 'LOGIN_FAILURE'
  },
  LOGOUT: {
    REQUEST: 'LOGOUT_REQUEST',
    SUCCESS: 'LOGOUT_SUCCESS',
    FAILURE: 'LOGOUT_FAILURE'
  },
  FETCH_FORMS: {
    REQUEST: 'FETCH_FORMS_REQUEST',
    SUCCESS: 'FETCH_FORMS_SUCCESS',
    FAILURE: 'FETCH_FORMS_FAILURE'
  },
  COMPANY_SELECTED: 'COMPANY_SELECTED'
}

export const loginRequest = () => ({
  type: types.LOGIN.REQUEST
})

export const loginSuccess = () => ({
  type: types.LOGIN.SUCCESS
})

export const loginFailure = error => ({
  type: types.LOGIN.FAILURE,
  error
})

export const logoutRequest = () => ({
  type: types.LOGOUT.REQUEST
})

export const logoutSuccess = () => ({
  type: types.LOGOUT.SUCCESS
})

export const logoutFailure = error => ({
  type: types.LOGOUT.FAILURE,
  error
})

export const fetchFormsRequest = () => ({
  type: types.FETCH_FORMS.REQUEST
})

export const fetchFormsSuccess = (payload, company) => ({
  type: types.FETCH_FORMS.SUCCESS,
  payload,
  company
})

export const fetchFormsFailure = error => ({
  type: types.FETCH_FORMS.FAILURE,
  error
})

export const chooseCompany = (company) => ({
  type: types.COMPANY_SELECTED,
  company
})
