import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-my-burger-161296-default-rtdb.firebaseio.com/'
});

export default instance;