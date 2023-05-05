import API from './fetchApi';

const authPost = (url, data) => API.post(url, data);

// authenticate use create data
const postData = (url, data) => API.post(url, data);
const getOne = (url) => API.get(url);

const patchUpdate = (url, data) => API.patch(url, data);

export default { authPost, postData, getOne, patchUpdate };
