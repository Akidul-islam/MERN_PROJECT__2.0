import { locatData } from '../../uitilities/localStore';
import API from './fetchApi';

const header = {
  headers: {
    Authorization: `bearer ${locatData('Token')}`,
  },
};

const authPost = (url, data) => API.post(url, data);

// authenticate use create data
const postData = (url, data) => API.post(url, data, header);
const getOne = (url) => API.get(url, header);

const patchUpdate = (url, data) => API.patch(url, data, header);

// axios.patch(
//   'https://api.com/v1/resource/{id}',
//   {
//     name: 'name',
//   },
//   {
//     // Config
//   }
// );
export default { authPost, postData, getOne, patchUpdate };
