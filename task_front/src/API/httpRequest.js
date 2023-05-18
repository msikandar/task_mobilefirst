import axios from 'axios'
import { toast } from 'react-toastify'

export const useHttpRequest = () => {
  // let authstate = store.getState();
  const httpRequest = axios.create({
    baseURL: process.env.API_URL,
    headers: { 'Content-Type': 'application/json' },
  })

  httpRequest.interceptors.response.use(
    (response) => {
      return response
    },
    (err) => {
      console.log(err, 'err')
      return new Promise(function (resolve, reject) {
        if (err.response && err.response.status === 403) {
          toast.error(err.response.data.error)
          return false
          //}
        } else if (err.response && err.response.status === 404) {
          toast.error('Invalid Endpoint. Try again')
          return false
        } else if (err.response && err.response.status === 500) {
          toast.error('Internal Server Error')
          return false
        } else if (err.response && err.response.status === 503) {
          toast.error('Service Unavailable')
          return false
        } else if (err.response && err.response.status === 401) {
          return false
        } else if (
          (typeof err === 'object' || typeof err === 'function') &&
          err !== null
        ) {
          if (!err.response) {
            //   toast.error(err);
            return false
          }
        }

        throw err
      })
    }
  )

  return httpRequest
}
