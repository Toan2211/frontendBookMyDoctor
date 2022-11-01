import React, { useEffect } from 'react'
import AppointmentManager from './components/AppointmentManager'
import ProfileInfo from './components/ProfileInfo'
import './index.scss'
function Profile() {
    useEffect(() => {
        document.title = 'Profile'
    }, [])
    return (
        <div className="profile">
            <ProfileInfo />
            <AppointmentManager />
        </div>
    )
}

export default Profile