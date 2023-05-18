function useAuth() {
  try {
    const user = JSON.parse(localStorage.getItem('user'))
    return user?.email?.length > 0
  } catch {
    return false
  }
}

export default useAuth
