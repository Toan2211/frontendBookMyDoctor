import React from 'react'
import { useLocation } from 'react-router-dom'
import BookTimeTable from './components/BookTimeTable'
import DoctorMarkDown from './components/DoctorMarkDown'
import DoctorReviews from './components/DoctorReviews'
import DoctorProfile from './DoctorProfile'

function DetailDoctor() {
    const location = useLocation()
    const doctor = location.state
    return (
        <div className="detailDoctor">
            <div className="detailDoctor__container">
                <DoctorProfile doctor = {doctor} />
                <BookTimeTable doctor = {doctor} />
                <DoctorMarkDown />
                <DoctorReviews />
            </div>
        </div>
    )
}

export default DetailDoctor
