import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GrFormPreviousLink } from 'react-icons/gr'
import './index.scss'
import DoctorItem from 'components/DoctorItem'
import SearchInput from 'components/SearchInput'

function HeaderDoctorList() {
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
                    <span>Bác sĩ</span>
                </header>
                <div className="headerLinkComponent__search">
                    <SearchInput placeholder="Tìm kiếm bác sĩ" mode = "list"/>
                </div>
                <ul className="headerLinkComponent__list">
                    <DoctorItem mode= "listColumn"/>
                    <DoctorItem mode= "listColumn"/>
                    <DoctorItem mode= "listColumn"/>
                    <DoctorItem mode= "listColumn"/>
                    <DoctorItem mode= "listColumn"/>
                    <DoctorItem mode= "listColumn"/>
                    <DoctorItem mode= "listColumn"/>

                </ul>
            </div>
        </div>
    )
}

export default HeaderDoctorList
