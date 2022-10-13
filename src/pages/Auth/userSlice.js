import authApi from 'api/authApi'

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit')

export const login = createAsyncThunk(
    'users/login',
    async (payload, { rejectWithValue }) => {
        try {
            const data = await authApi.login(payload)
            console.log('data redux', data)
            localStorage.setItem('access_token', data.token)
            localStorage.setItem('user', JSON.stringify(data.user))
            return data.user
        }
        catch (error) {
            return rejectWithValue(error)
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        profile: JSON.parse(localStorage.getItem('user')) || {}
    },
    reducers: {
        logout(state) {
            localStorage.removeItem('user')
            localStorage.removeItem('access_token')
            state.profile = {}
        }
    },
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            console.log('login fulfilled', action.payload)
            state.profile = action.payload
        }
    }
})
const { reducer, actions } = userSlice
export const { logout } = actions
export default reducer
