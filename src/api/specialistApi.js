import http from 'utils/http'

const specialistApi = {
    getAllSpecialist() {
        return http.get('/specialty')
    }
}
export default specialistApi
