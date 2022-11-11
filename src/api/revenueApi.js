import http from 'utils/http'

const revenueApi = {
    getAllRevenueDoctor(config) {
        return http.get('/doctor/revenue', config)
    },
    getRevenueDoctorById(id, config) {
        return http.get(`/doctor/${id}/revenue`, config)
    }
}
export default revenueApi