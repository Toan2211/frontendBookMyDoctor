import doctorApi from 'api/doctorApi'
import Loading from 'components/Loading'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BookTimeTable from './components/BookTimeTable'
import Comment from './components/Comment'
import DoctorProfile from './DoctorProfile'

function DetailDoctor() {
    const { id } = useParams()
    const [doctor, setDoctor] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [currenURL, setCurrentURL] = useState(window.location.href)
    useEffect(() => {
        (async () => {
            try {
                const respone = await doctorApi.getDetailDoctor(id)
                setDoctor(respone.message)
                setIsLoading(false)
                if (!window.location.href.includes('localhost'))
                    setCurrentURL(window.location.href)
                else
                    setCurrentURL('https://bookmydoctor.netlify.app')
            } catch (err) {
                alert(err)
            }
        })()
    }, [id])
    useEffect(() => {
        document.title = doctor.user ? doctor.user.firsname + doctor.user.lastname : ''
    }, [doctor])
    if (isLoading) return <Loading />
    return (
        <div className="detailDoctor">
            <div className="detailDoctor__container">
                <DoctorProfile doctor = {doctor} dataHref = {currenURL}/>
                <BookTimeTable doctor = {doctor} />
                <Comment dataHref = {currenURL}/>
            </div>
        </div>
    )
}

export default DetailDoctor
