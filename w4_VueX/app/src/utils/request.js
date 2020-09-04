import axios from 'axios';

const source = axios.CancelToken.source();

// npm run build -> NODE_ENV=production
// npm start     -> NODE_ENV=development
const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:2003' : 'http://120.76.247.5:2003'

const request = axios.create({
    baseURL:baseURL+'/api',
    withCredentials:true,
});

request.source = source;

export default request;