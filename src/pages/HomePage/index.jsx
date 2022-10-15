import React, { useEffect } from 'react'
import BannerSearch from './components/BannerSearch'
import Introduce from './components/Introduce'
import SpecialistList from './components/SpecialistList'
import TopClinics from './components/TopClinics'
import TopDoctors from './components/TopDoctors'
import './index.scss'

function HomePage() {
    useEffect(() => {
        document.title = 'Home Page'
    }, [])
    return (
        <div className="homePage">
            <BannerSearch />
            <TopDoctors />
            <SpecialistList />
            <TopClinics />
            <Introduce />
        </div>
    )
}

export default HomePage
