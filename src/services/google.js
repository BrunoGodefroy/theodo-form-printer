const gapi = window.gapi

export const CLIENT_ID = '14597778711-d4kt5ktli45oohinerhi2u3l4rolbaoe.apps.googleusercontent.com	';
export const DISCOVERY_DOCS = ["https://script.googleapis.com/$discovery/rest?version=v1"];
export const SCOPES = 'https://www.googleapis.com/auth/forms';
export const SCRIPT_ID_UK = 'MeRye5A_wHzCuyYvIJ85WNJ6eS0vCcuvm';
export const SCRIPT_ID = 'MopOUf2aDvG7Y1O3Ltt_E_RT6drthxiAf';

gapi.loadAsync = () => new Promise(
  (resolve, reject) => {
    gapi.load('client:auth2', resolve);
  }
);

gapi.loginAsync = () => new Promise(
  (resolve, reject) => {
    gapi.auth2.getAuthInstance().signIn().then(resolve, reject);
  }
);

gapi.logoutAsync = () => new Promise(
  (resolve, reject) => {
    gapi.auth2.getAuthInstance().signOut().then(resolve, reject);
  }
);

export default gapi;
