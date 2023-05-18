import { applyMiddleware, combineReducers, createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
// import { encryptTransform } from 'redux-persist-transform-encrypt';
import logger from 'redux-logger'

import storage from 'redux-persist/lib/storage'

import { authReducer } from './reducer/auth.reducer'

const rootReducer = combineReducers({
  auth: authReducer,
})

const persistConfig = {
  key: 'lti',
  blacklist: [],
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, applyMiddleware(logger))
const persistor = persistStore(store)
export default store
export { persistor }
