import images from 'assets'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './index.scss'
function ClinicItem({ mode }) {
    const navigate = useNavigate()
    return (
        <div className="clinicItem" onClick={() => navigate('/detailClinic/10')}>
            <div className="clinicItem__container">
                <div className={`${mode === 'cpm-list' ? 'clinicItem__content--list ': ''}clinicItem__content`}>
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