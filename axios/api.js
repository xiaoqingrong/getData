import axios from '../request/index.js';

function postRequest(url,data){
    return new Promise((resolve,reject)=>{
        axios.post(url,data).then(res=>resolve(res))
        .catch(error=>reject(error))
    })
}
function getRequest(url,data){
    return new Promise((resolve,reject)=>{
        axios.get(url,data).then(res=>resolve(res))
        .catch(error=>reject(error))
    })
}
export {postRequest, getRequest}
//细分解藕  高度封装    统一管理