import http from 'utils/http'

const userApi = {
    changePassword(data, config) {
        return http.post(`/users/password/${data.id}`, data, config)
    },
    updateInfoUser(data, config) {
        return http.put(`/users/${data.get('id')}`, data, config)
    },
    resetPassword(data) {
        return http.post('/users/resetpw', data)
    }
}
export default userApi
