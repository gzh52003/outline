import axios from 'axios';

const source = axios.CancelToken.source();

const request = axios.create({
    baseURL:'http://localhost:2003/api',
    withCredentials:true,
});

request.source = source;

export default request;