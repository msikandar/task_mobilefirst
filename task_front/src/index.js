import ReactDOM from 'react-dom'
import App from './App'
import './index.scss'
import { Provider } from 'react-redux'
import store from '../src/store/store'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ReactQueryProvider from '../src/components/QueryProvider'

ReactDOM.render(
  <>
    <ToastContainer
      position='top-right'
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='light'
    />
    <Provider store={store}>
      <ReactQueryProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReactQueryProvider>
    </Provider>
    <ToastContainer />
  </>,
  document.getElementById('root')
)
