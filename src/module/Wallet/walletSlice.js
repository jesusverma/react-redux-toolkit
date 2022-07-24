import { createSlice } from '@reduxjs/toolkit'

import { shoppingActions } from './../Shopping/shoppingSlice'
const initialState = {
  wallatBalance: 0,
}

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.wallatBalance += 1
    },
    decrement: (state) => {
      state.wallatBalance -= 1
    },
    incrementByAmount: (state, action) => {
      state.wallatBalance += action.payload
    },
  },
  // extraReducers: {
  //   ['shopping/purchaseItem']: (state, action) => {
  //     state.wallatBalance += 1
  //   },
  //   ['shopping/returnitem']: (state, action) => {
  //     state.wallatBalance -= 1
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(shoppingActions.purchaseItem, (state) => {
        state.wallatBalance += 1
      })
      .addCase(shoppingActions.returnitem, (state) => {
        state.wallatBalance -= 1
      })
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = walletSlice.actions

const { reducer } = walletSlice
export default reducer
