import axios from 'axios';

const SERVICE_ENDPOINT = 'api/users';

export default {
  set: email => axios.post(SERVICE_ENDPOINT, { email }),
};