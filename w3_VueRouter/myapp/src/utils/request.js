import axios from 'axios';

const baseUrl = process.env.NODE_ENV === 'production' ? 'http://10.123.122.12' : 'http://localhost:2003'

const request = axios.create({
    baseURL:baseUrl + '/api',
    withCredentials:true
});


// export const nsg = axios.create({
//     baseURL:'http://www.nsg.com'
// });

// axios.get(url,config)
// axios.post(url,data,config)

export default request;