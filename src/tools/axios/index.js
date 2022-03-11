import axios from "./request";

export const requestGET = (url, payData) => {
    return new Promise((resolve, reject) => {
        axios.get(url, { params: payData }).then(res => {
            resolve(res.data)
        })
    })
}
export const requestPOST = (url, payData, header) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url,
            data: payData,
            headers: {
                'Content-Type': header ? header : 'application/json'
            }
        }).then(res => {
            resolve(res.data)
        })
    })
}