// api.js
import { httpGet, httpPost } from './http.js';

// get  demo
export const getWater = (params = {}) => httpGet({ url: '/api', params })
// post demo
export const save = (data) => {
  return httpPost({
    url: 'apps/wechat/api/save_member',
    data
  })
}
