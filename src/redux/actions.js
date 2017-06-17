export const types = {
  GOOGLE_CLIENT_INIT: {
    REQUEST: 'GOOGLE_CLIENT_INIT_REQUEST',
    SUCCESS: 'GOOGLE_CLIENT_INIT_SUCCESS',
    FAILURE: 'GOOGLE_CLIENT_INIT_FAILURE',
  }
};

export const googleClientInitRequest = () => ({
  type: types.GOOGLE_CLIENT_INIT.REQUEST,
});

export const googleClientInitSuccess = () => ({
  type: types.GOOGLE_CLIENT_INIT.SUCCESS,
});

export const googleClientInitFailure = () => ({
  type: types.GOOGLE_CLIENT_INIT.FAILURE,
});
