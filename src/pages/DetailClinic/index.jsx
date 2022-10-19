import doctorApi from 'api/doctorApi'
import DoctorItemX from 'components/DoctorItemX'
import RadioGroup from 'components/RadioGroup'
import SearchInput from 'components/SearchInput'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './index.scss'

function DetailClinic() {
    const { id } = useParams('id')
    const [data, setData] = useState()
    console.log(id)
    return (
        <div className="detailClinic">
            <div className="detailClinic__container">
                {/* <header>Chuyên khoa Răng hàm mặt</header> */}
                <div className="detailClinic__content">
                    <div className="detailClinic__content-specialist">
                        <header>Chuyên khoa</header>
                        <div className="detailClinic__content-specialist-search">
                            <SearchInput
                                placeholder="Chuyên khoa tìm kiếm"
                                mode="list"
                            />
                        </div>
                        <div className="detailClinic__content-specialist-list">
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
                    <ul className="detailClinic__content-doctorsList">
                        <DoctorItemX mode="listColumn" />
                        <DoctorItemX mode="listColumn" />
                        <DoctorItemX mode="listColumn" />
                        <DoctorItemX mode="listColumn" />
                        <DoctorItemX mode="listColumn" />
                        <DoctorItemX mode="listColumn" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DetailClinic
