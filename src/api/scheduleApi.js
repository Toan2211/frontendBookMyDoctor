import http from 'utils/http'

const scheduleApi = {
    addSchedule(data, config) {
        return http.post('/schedule', data, config)
    },
    getSchedule(id, config) {
        return http.get(`/schedule/doctor/${id}`, config)
    }
}
export default scheduleApi
