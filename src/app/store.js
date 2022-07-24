import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import { createLogger } from 'redux-logger'

const loggerMiddleWare = createLogger()

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(loggerMiddleWare),
})

export default store
