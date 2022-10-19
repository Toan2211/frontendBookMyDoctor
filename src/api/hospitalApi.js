import http from 'utils/http'

const hospitalApi = {
    getAllHospital() {
        return http.get('/hospital')
    },
    addHospital(data, config) {
        return http.post('/hospital', data, config)
    },
    updateHospital(data, config) {
        return http.put(`/hospital/${data.get('id')}`, data, config)
    }
}
export default hospitalApi