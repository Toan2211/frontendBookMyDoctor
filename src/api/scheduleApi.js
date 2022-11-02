import http from 'utils/http'

const scheduleApi = {
    addSchedule(data, config) {
        return http.post('/schedule', data, config)
    },
    getSchedule(id, config) {
        return http.get(`/schedule/doctor/${id}`, config)
    },
    getScheduleById(id) {
        return http.get(`/schedule/${id}`)
    }
}
export default scheduleApi
