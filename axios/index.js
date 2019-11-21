import axios from 'axios'
import qs from 'qs'
//axios的默认配置
axios.defaults.baseURL = "https://XXXXXXX"
axios.defaults.withCredentials = true;   // axios 默认不发送cookie，需要全局设置true发送cookie
axios.defaults.headers["Content-Type"]= "application/x-www-form-urlencoded";

// 2. 拦截器配置
axios.interceptors.request.use((config)=>{
  if(config.method === "post"){
    config.data = qs.stringify(config.data)  //转换为字符串
  }
  return config;
})
axios.interceptors.response.use((response)=>{
  let {data} = response;
  response.status = data.status;
  response.statusText = data.message;
  response.data = data.data;
  return response;
},(error)=>{
  message.error("服务端异常")
  return Promise.reject(error);
})

export default axios;
