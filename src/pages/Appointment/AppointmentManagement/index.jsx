import appointmentApi from 'api/appointmentApi'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import convertTZ7Str from 'utils/convertTZ7Str'
import './index.scss'

function AppointmentManagement() {
    const [listAppointment, setListAppointment] = useState([])
    const userData = useSelector(state => state.user.profile)
    const fetchListAppointment = async () => {
        try {
            ( async () => {
                const respone =
                await appointmentApi.getAllAppointmentOfUser(
                    userData.id,
                    {
                        headers: {
                            Authorization: `${localStorage.getItem(
                                'access_token'
                            )}`
                        }
                    }
                )
                setListAppointment(respone.appointment)
            })()
        }
        catch (err) {
            toast.error(err.message, {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 2000
            })
        }
    }
    const fetchListAppointmentByAdmin = () => {
        try {
            (
                async () => {
                    const respone = await appointmentApi.getAllAppointment({
                        headers: {
                            Authorization: `${localStorage.getItem(
                                'access_token'
                            )}`
                        }
                    })
                    setListAppointment(respone.appointment)
                }
            )()
        }
        catch (err) {
            toast.error(err.message, {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 2000
            })
        }
    }
    useEffect(() => {
        if (userData.role.name === 'ROLE_DOCTOR')
            fetchListAppointment()
        if (userData.role.name === 'ROLE_ADMIN')
            fetchListAppointmentByAdmin()
    }, [userData.id])
    const confirmAppointment = (idAppointment) => {
        try {
            ( async () => {
                await appointmentApi.confirmAppointment(
                    idAppointment,
                    {
                        headers: {
                            Authorization: `${localStorage.getItem(
                                'access_token'
                            )}`
                        }
                    }
                )
                fetchListAppointment()
                toast.success('Chấp nhận cuộc hẹn thành công', {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    autoClose: 2000
                })
            })()
        }
        catch (err) {
            toast.error(err.message, {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 2000
            })
        }
    }
    console.log(listAppointment)
    return (
        <div className="appointmentManagement">
            <div className="appointmentManagement__container">
                <header>Quản lí cuộc hẹn</header>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            {userData.role.name === 'ROLE_ADMIN' && <th>Bác sĩ</th>}
                            <th>Bệnh nhân</th>
                            <th>Bắt đầu</th>
                            <th>Kết thúc</th>
                            <th>Tình trạng</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listAppointment.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    {userData.role.name === 'ROLE_ADMIN' && <td>{`${item.schedule.doctor.user.firsname} ${item.schedule.doctor.user.lastname}`}</td>}
                                    <td>{`${item.patient.user.firsname} ${item.patient.user.lastname}`}</td>
                                    <td>{convertTZ7Str(item.schedule.begin)}</td>
                                    <td>{convertTZ7Str(item.schedule.end)}</td>
                                    <td>{item.status.name}</td>
                                    {item.status.name === 'NEW' && userData.role.name === 'ROLE_DOCTOR' && (<td><button className="btnSuccess" onClick={() => confirmAppointment(item.id)}>Xác nhận</button></td>)}
                                    {item.status.name === 'CONFIRMED' && userData.role.name === 'ROLE_ADMIN'&& (<td><button className="btnSuccess" onClick={() => confirmAppointment(item.id)}>Hoàn thành</button></td>)}
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AppointmentManagement
