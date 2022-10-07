import http from 'utils/http'

const authApi = {
    login(data) {
        return http.post('/auth/local', data)
    }
}
export default authApi
