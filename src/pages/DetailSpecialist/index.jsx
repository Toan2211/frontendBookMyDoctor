import DoctorItem from 'components/DoctorItem'
import RadioGroup from 'components/RadioGroup'
import SearchInput from 'components/SearchInput'
import React from 'react'
import { useParams } from 'react-router-dom'
import './index.scss'
DetailSpecialist.propTypes = {}

function DetailSpecialist() {
    const { id } = useParams('id')
    return (
        <div className="detailSpecialist">
            <div className="detailSpecialist__container">
                {/* <header>Chuyên khoa Răng hàm mặt</header> */}
                <div className="detailSpecialist__content">
                    <div className="detailSpecialist__content-specialist">
                        <header>Chuyên khoa</header>
                        <div className="detailSpecialist__content-specialist-search">
                            <SearchInput
                                placeholder="Chuyên khoa tìm kiếm"
                                mode="list"
                            />
                        </div>
                        <div className="detailSpecialist__content-specialist-list">
                            <RadioGroup
                                name="gender"
                                optionData={[
                                    {
                                        label: 'Nam khoa',
                                        value: Number(1)
                                    },
                                    { label: 'Nha Khoa', value: Number(2) },
                                    { label: 'Răng hàm mặt', value: Number(3) },
                                    { label: 'Thần kinh', value: Number(4) },
                                    { label: 'Nhi', value: Number(5) },
                                    { label: 'Nội', value: Number(5) },
                                    { label: 'Ngoại', value: Number(5) }
                                ]}
                            />
                        </div>
                    </div>
                    <ul className="detailSpecialist__content-doctorsList">
                        <DoctorItem mode="listColumn" />
                        <DoctorItem mode="listColumn" />
                        <DoctorItem mode="listColumn" />
                        <DoctorItem mode="listColumn" />
                        <DoctorItem mode="listColumn" />
                        <DoctorItem mode="listColumn" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DetailSpecialist
