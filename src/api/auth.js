import axios from 'axios';
import { fetchCsrfToken } from './csrf';


export function login(username, password, csrfToken) {
    const url = '/api/login/';
    const headers = {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrfToken
    };
    const data = {
        username: username,
        password: password
    };

    return axios.post(url, data, {
        headers: headers,
        withCredentials: true
    });
}
