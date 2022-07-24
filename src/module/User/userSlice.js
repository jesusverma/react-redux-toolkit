import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {}

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  return await axios.get('https://reqres.in/api/users')
})

// export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
//   return axios.get('https://reqres.in/api/users').then((resp) => resp)
// })

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      console.log(
        '🚀 ~ file: userSlice.js ~ line 23 ~ builder.addCase ~ action',
        action,
      )
      state.loading = false
      state.error = false
      state.users = action.payload.data
    })
    builder.addCase(fetchUsers.rejected, (state) => {
      state.loading = false
      state.error = true
      state.users = {}
    })
  },
})

const { reducer } = userSlice

export default reducer
