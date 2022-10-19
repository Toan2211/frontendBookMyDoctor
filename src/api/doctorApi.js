import http from 'utils/http'

const doctorApi = {
    getAllDoctor() {
        return http.get('/doctor')
    },
    addDoctor(data, config) {
        return http.post('/doctor', data, config)
    },
    updateDoctor(data, config) {
        return http.put(`/doctor/${data.get('id')}`, data, config)
    }
}
export default doctorApi