import ClinicItem from 'components/ClinicItem'
import SearchInput from 'components/SearchInput'
import React from 'react'
import { GrFormPreviousLink } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'

function HeaderClinicList() {
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
                    <span>Phòng khám</span>
                </header>
                <div className="headerLinkComponent__search">
                    <SearchInput placeholder="Tìm kiếm phòng khám" mode = "list"/>
                </div>
                <ul className="headerLinkComponent__list">
                    <ClinicItem mode = "cpm-list"/>
                    <ClinicItem mode = "cpm-list"/>
                    <ClinicItem mode = "cpm-list"/>
                    <ClinicItem mode = "cpm-list"/>
                    <ClinicItem mode = "cpm-list"/>
                    <ClinicItem mode = "cpm-list"/>
                    <ClinicItem mode = "cpm-list"/>
                    <ClinicItem mode = "cpm-list"/>

                </ul>
            </div>
        </div>
    )
}

export default HeaderClinicList
