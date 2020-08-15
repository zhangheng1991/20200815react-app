import axios from 'axios';

const WEB_URL = 'http://localhost:8011/';

export function mylogin(values) {
  return axios.post(WEB_URL + 'loginAction/login', values)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
}
