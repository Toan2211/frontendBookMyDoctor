import React from 'react'
import Slider from 'react-slick'
import DoctorItem from '../DoctorItem'
import './index.scss'

function TopDoctors() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false

                }
            }
        ]
    }
    return (
        <div className="topDoctors">
            <div className="topDoctors__container">
                <header>Bác sĩ tiêu biểu</header>
                <Slider {...settings}>
                    <DoctorItem />
                    <DoctorItem />
                    <DoctorItem />
                    <DoctorItem />
                    <DoctorItem />
                    <DoctorItem />
                </Slider>
            </div>
        </div>
    )
}

export default TopDoctors
