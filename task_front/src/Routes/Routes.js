import Register from '../view/Register'
import Login from '../view/Login'
import MainScreen from '../view/MainScreen'
import useAuth from '../hooks/useAuth'

function Routes() {
  const user = useAuth()
  let initialRoute = '/login-screen'

  if (user) initialRoute = '/main-screen'
  if (!user) initialRoute = '/login-screen'

  // Defined all the routes in an array
  const routes = [
    {
      path: '/login-screen',
      element: Login,
    },
    {
      path: '/register-screen',
      element: Register,
    },
    {
      path: '/main-screen',
      element: MainScreen,
    },

    {
      path: '*',
      redirectTo: initialRoute,
    },
  ]
  return routes
}

export default Routes
