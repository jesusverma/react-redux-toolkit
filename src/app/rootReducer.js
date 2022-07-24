import { combineReducers } from '@reduxjs/toolkit'

// Reducers
import walletReducer from '../module/Wallet/walletSlice'
import shoppingReducer from '../module/Shopping/shoppingSlice'
import userSlice from '../module/User/userSlice'

const rootReducer = combineReducers({
  wallet: walletReducer,
  shopping: shoppingReducer,
  user: userSlice,
})

export default rootReducer
