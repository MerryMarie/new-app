import axios from 'axios';

export function getContryList(callback) {
    axios.get('http://localhost:9090/api/v2/countries/list').then(response => {
        // console.log(response.data);
        callback(response.data);
    }).catch(error => {
        console.log(error);
    });
}

export function reg(l, p, callback = null) {
    axios.post('http://localhost:9090/api/v2/register',
        {
            login: l,
            pass: p
        },
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            if (callback) {
                callback(response.data);
            } else {
                console.log(response.data);
            }
        }).catch(error => {
            console.log(error);
        });
}

export function log(l, p, callback = null) {
    axios.post('http://localhost:9090/api/v2/login',
        {
            login: l,
            pass: p
        },
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            withCredentials: true,
        }).then(response => {
            console.log(response.data);
            if (response.data.status == 200) {
                if (callback) {
                    callback(response.data.username);
                }
            }

        }).catch(error => {
            console.log(error);
        });
}
export function unlog(l, p, callback = null) {
    axios.post('http://localhost:9090/api/v2/logout',
        {
            data: ""
        },
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            withCredentials: true,
        }).then(response => {
            if (response.data.status == 200) {
                if (callback) {
                    callback(response.data.status);
                }
            }
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
}
export function check_auth(callback) {
    axios.get('http://localhost:9090/api/v2/user/check',
        {
            withCredentials: true,
        }).then(response => {

            callback(response.data[0].status, response.data[0].username);
            //console.log(response.data[0].status);
            // console.log(response.data.status);
        }).catch(error => {
            console.log(error);
        });
}
