import authApi from 'api/authApi'

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit')

export const login = createAsyncThunk(
    'users/login',
    async payload => {
        const data = await authApi.login(payload)
        localStorage.setItem('acess_token', data.jwt)
        localStorage.setItem('user', JSON.stringify(data.user))
        return data.user
    }
)
const userSlice = createSlice({
    name: 'user',
    initialState: {
        profile: JSON.parse(localStorage.getItem('user')) || {},
        test: 'test ne`'
    },
    reducers: {
        logout(state) {
            localStorage.removeItem('user')
            localStorage.removeItem('accessToken')
            state.profile = {}
        }
    },
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            state.profile = action.payload
        }
    }
})
const { reducer, actions } = userSlice
export const { logout } = actions
export default reducer
