import images from 'assets'
import React from 'react'
import './index.scss'
function ClinicItem() {
    return (
        <div className="clinicItem">
            <div className="clinicItem__container">
                <div className="clinicItem__content">
                    <div className="clinicItem__content-img">
                        <img src = {images.clinicEx} alt = "clinic Ex"/>
                    </div>
                    <span>Phòng khám đa khoa Saigon Healthcare</span>
                </div>
            </div>
        </div>
    )
}

export default ClinicItem
