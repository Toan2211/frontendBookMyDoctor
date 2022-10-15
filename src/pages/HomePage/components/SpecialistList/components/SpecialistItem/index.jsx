import React from 'react'
import { useNavigate } from 'react-router-dom'
import './index.scss'

function SpecialistItem({ data }) {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/detailSpecialist/5')
    }
    return (
        <div className="specialistItem" onClick = {handleClick}>
            <div className="specialistItem__img">
                <img src={data.img} alt="specialistItem image" />
            </div>
            <span className="specialistItem__title">
                {data.title}
            </span>
        </div>
    )
}

export default SpecialistItem
