export const types = {
  GOOGLE_CLIENT_INIT: {
    REQUEST: 'GOOGLE_CLIENT_INIT_REQUEST',
    SUCCESS: 'GOOGLE_CLIENT_INIT_SUCCESS',
    FAILURE: 'GOOGLE_CLIENT_INIT_FAILURE'
  },
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
  COMPANY_SELECTED: 'COMPANY_SELECTED',
  INIT: 'INIT_APPLICATION'
}

export const companies = {
  THEODO_UK: { name: 'Theodo UK', formId: '17iAB-Mmp9BAhASR_7IZTaFGT7vrQzXUH7A2Wz8xwl88' },
  THEODO_FR: { name: 'Theodo', formId: '1bSME-FgoGtu9f7nIbVafynjffLJX5Q7sHS-kTlFk0m4' },
  FASTIT: { name: 'FASTIT', formId: '1c87aJ-wfV4HGGUGn2lAUKat0vst_S4fWhDmy0oGTOyg' },
  BAM: { name: 'BAM', formId: '1oVWjK2woLw53yRa-2pkU2pJn9FRS3yiOOcRzgpWoFnQ' },
  SICARA: { name: 'Sicara', formId: '1E1_AGNUzEMYvoFkA05D9fP5ko6t4vmEXX2DN6r8_yrw' }
}

export const googleClientInitRequest = () => ({
  type: types.GOOGLE_CLIENT_INIT.REQUEST
})

export const googleClientInitSuccess = isLoggedIn => ({
  type: types.GOOGLE_CLIENT_INIT.SUCCESS,
  isLoggedIn
})

export const googleClientInitFailure = error => ({
  type: types.GOOGLE_CLIENT_INIT.FAILURE,
  error
})

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

export const fetchFormsSuccess = payload => ({
  type: types.FETCH_FORMS.SUCCESS,
  payload
})

export const fetchFormsFailure = error => ({
  type: types.FETCH_FORMS.FAILURE,
  error
})

export const chooseCompany = (company) => ({
  type: types.COMPANY_SELECTED,
  company
})

export const init = () => ({
  type: types.INIT
})
