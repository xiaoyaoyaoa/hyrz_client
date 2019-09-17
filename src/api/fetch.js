import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 18000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = true;

export default {
  fetchGet (url, params = {}) {
    return new Promise((resolve, reject) => {

      let options = {
        withCredentials: true,
        params: params,
        paramsSerializer: params => {
          return qs.stringify(params, { indices: false })
        }
      };

      axios.get(url,options).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  } ,
  fetchPost (url, params) {
    return new Promise((resolve, reject) => {

      let options = {
        method: 'post',
        withCredentials: true,
        url:url ,
        data: params
      };


      axios(options).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })


    })
  },axios
}
