import axios from 'axios';

export function getContryList(callback) {
    axios.get('http://localhost:9090/api/v2/countries/list').then(response => {
        // console.log(response.data);
        callback(response.data.data);
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
            console.log(response.data);
            if (callback) {
                callback(response.data.status, response.data.data.username, response.data.error);
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
            // if (response.data.status == 200) {
            if (callback) {
                callback(response.data.status, response.data.data.username, response.data.error);
            }
            //  }

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
            // console.log(response.data.data);
            callback(response.data.status, response.data.data.username);
            //console.log(response.data[0].status);

        }).catch(error => {
            console.log(error);
        });
}
