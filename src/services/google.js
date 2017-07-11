const gapi = window.gapi

import { companies } from '../redux/actions'

export const CLIENT_ID = '1064483391468-34odtv7dj3tidc5mfbtkitf89bapl184.apps.googleusercontent.com';
export const SCRIPT_ID = 'MUR7LYGtI9263SIUdj6IzcAW4mt_V9Ca2';

export const DISCOVERY_DOCS = ["https://script.googleapis.com/$discovery/rest?version=v1"];
export const SCOPES = 'https://www.googleapis.com/auth/forms';

export const FORM_ID_THEODO_FR = '1bSME-FgoGtu9f7nIbVafynjffLJX5Q7sHS-kTlFk0m4'
export const FORM_ID_THEODO_UK = '17iAB-Mmp9BAhASR_7IZTaFGT7vrQzXUH7A2Wz8xwl88'
export const FORM_ID_FASTIT = '1c87aJ-wfV4HGGUGn2lAUKat0vst_S4fWhDmy0oGTOyg'

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
