import React from 'react'
import BookTimeTable from './components/BookTimeTable'
import DoctorMarkDown from './components/DoctorMarkDown'
import DoctorReviews from './components/DoctorReviews'
import DoctorProfile from './DoctorProfile'

function DetailDoctor() {
    return (
        <div className="detailDoctor">
            <div className="detailDoctor__container">
                <DoctorProfile />
                <BookTimeTable />
                <DoctorMarkDown />
                <DoctorReviews />
            </div>
        </div>
    )
}

export default DetailDoctor
