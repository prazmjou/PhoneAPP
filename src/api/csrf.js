import axios from 'axios';

// Function to get the CSRF token from Django
export function fetchCsrfToken() {
    return axios.get('/csrf/', { withCredentials: true })
        .then(response => {
            console.log('Fetched CSRF token:', response.data.csrfToken); // Log the token
            return response.data.csrfToken;
        });
}

