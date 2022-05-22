import axios from 'axios'
import Cookies from 'js-cookie'

const headers = () => {
  return {
    'Content-Type': 'application/pdf',
    Authorization: 'Bearer ' + Cookies.get('token'),
  }
}

export default function () {
  return axios.create({
    baseURL: import.meta.env.VUE_APP_API,
    timeout: 50000,
    headers: headers(),
    responseType: 'arraybuffer',
  })
}
