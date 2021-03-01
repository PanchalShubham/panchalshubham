import axios from 'axios';
axios.defaults.baseURL = 'https://panchalprogrammingacademy.herokuapp.com';

export const sendEmail = (receiver, subject, text, html) => {
    return new Promise((resolve, reject) => {
        let payload = {receiver, subject, text, html};
        axios.post('/sendMail', payload)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
};