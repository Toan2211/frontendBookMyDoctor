import http from 'utils/http'

const specialistApi = {
    getAllSpecialist() {
        return http.get('/specialty')
    },
    addSpecialist(data, config) {
        return http.post('/specialty', data, config)
    },
    updateSpecialist(data, config) {
        return http.put(`/specialty/${data.get('id')}`, data, config)
    }
}
export default specialistApi