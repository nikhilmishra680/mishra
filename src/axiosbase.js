import  axios from 'axios';

const instance = axios.create({
  baseURL: 'https://desolate-spire-83479.herokuapp.com'
});
export default instance;