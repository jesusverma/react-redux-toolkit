import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  itemsCount: 0,
}

export const shoppingSlice = createSlice({
  name: 'shopping',
  initialState,
  reducers: {
    purchaseItem: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.itemsCount += 1
    },
    returnitem: (state) => {
      state.itemsCount -= 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { returnitem, purchaseItem } = shoppingSlice.actions

export const shoppingActions = shoppingSlice.actions

const { reducer } = shoppingSlice
export default reducer
