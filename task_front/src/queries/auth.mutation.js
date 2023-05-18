import { useProtectedHttpRequest } from '../API/protectedHttpRequest' // with auth token
import { useMutation } from 'react-query'
import { useHttpRequest } from '../API/httpRequest' // without auth token

export const useRegister = (onRegisterSuccess, onRegisterFailed) => {
  const mutation = useMutation(
    (payload) => {
      return useHttpRequest().post('auth/register', payload)
    },
    {
      onSuccess: (res) => {
        onRegisterSuccess(res)
      },
      onError: (err) => {
        onRegisterFailed(err)
      },
    }
  )
  return mutation
}

export const useLoginUser = (onLoginSuccess, onLoginFailed) => {
  const mutation = useMutation(
    (payload) => {
      return useHttpRequest().post('auth/login', payload)
    },
    {
      onSuccess: (res) => {
        onLoginSuccess(res)
      },
      onError: (err) => {
        onLoginFailed(err)
      },
    }
  )
  return mutation
}
