import hospitalApi from 'api/hospitalApi'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import ClinicItem from '../../../../components/ClinicItem'
import './index.scss'
function TopClinics() {
    const [hospitalData, setHospitalData] = useState([])
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
    useEffect(() => {
        (async () => {
            const data = await hospitalApi.getAllHospital()
            setHospitalData(data.hospital)
        })()
    }, [])
    return (
        <div className="topClinics">
            <div className="topClinics__container">
                <header>Bệnh viện tiêu biểu</header>
                <Slider {...settings}>
                    {hospitalData.map (hospital => <ClinicItem key={hospital.id} data = {hospital}/>)}
                </Slider>
            </div>
        </div>
    )
}

export default TopClinics
