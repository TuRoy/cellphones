import axios from 'axios';

let AUTH_TOKEN = localStorage.getItem('token')

axios.defaults.baseURL = 'https://shope-b3.thaihm.site';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default axios