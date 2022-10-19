import hospitalApi from 'api/hospitalApi'
import ClinicItem from 'components/ClinicItem'
import SearchInput from 'components/SearchInput'
import React, { useEffect, useState } from 'react'
import { GrFormPreviousLink } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'

function HeaderClinicList() {
    const [hospitalData, setHospitalData] = useState([])
    useEffect(() => {
        (async () => {
            const data = await hospitalApi.getAllHospital()
            setHospitalData(data.hospital)
        })()
    }, [])
    const navigate = useNavigate()
    return (
        <div className="headerLinkComponent">
            <div className="headerLinkComponent__container">
                <header className="headerLinkComponent__header">
                    <button
                        className="headerLinkComponent__header-btn"
                        onClick={() => navigate(-1)}
                    >
                        <span>
                            <GrFormPreviousLink />
                        </span>
                    </button>
                    <span>Bệnh viện</span>
                </header>
                <div className="headerLinkComponent__search">
                    <SearchInput placeholder="Tìm kiếm phòng khám" mode = "list"/>
                </div>
                <ul className="headerLinkComponent__list">
                    {hospitalData.map (hospital => <ClinicItem key={hospital.id} data = {hospital} mode = "cpm-list"/>)}
                </ul>
            </div>
        </div>
    )
}

export default HeaderClinicList
