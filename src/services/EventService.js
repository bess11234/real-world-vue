import axios from 'axios'

import { toValue } from 'vue'

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json'
    }
})


export default {
    getEventData(id="") {
        return apiClient.get('/events/' + toValue(id))
    }
}