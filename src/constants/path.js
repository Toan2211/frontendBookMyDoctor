class Path {
    constructor() {
        this.home = '/'
        this.headerDoctor = '/listDoctor'
        this.headerClinic = '/listClinic'
        this.headerSpecialist = '/listSpecialist'
        this.auth = '/auth'
        this.login = '/login'
        this.register = '/register'
        this.forgotPassword = '/forgotPassword'
        this.profile = '/profile'
        this.detailDoctor = '/detailDoctor'
        this.system = '/system'
        this.detailSpecialist = '/detailSpecialist/:id'
        this.detailClinic = '/detailClinic/:id'
        this.bookAppointment = '/bookAppointment'
    }
}

export const path = new Path()
