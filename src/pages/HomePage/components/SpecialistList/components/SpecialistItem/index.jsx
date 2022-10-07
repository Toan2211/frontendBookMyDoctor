import React from 'react'
import './index.scss'

function SpecialistItem({ data }) {
    return (
        <div className="specialistItem">
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
