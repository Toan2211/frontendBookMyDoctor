import appointmentApi from 'api/appointmentApi'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import convertTZ7Str from 'utils/convertTZ7Str'
import './index.scss'
AppointmentManager.propTypes = {}

function AppointmentManager() {
    const [listAppointment, setListAppointment] = useState([])
    const userData = useSelector(state => state.user.profile)
    const getAllAppointmentFromAPI = async () => {
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
    }
    useEffect(() => {
        getAllAppointmentFromAPI()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userData.id])
    const cancelAppointment = async (idAppointment) => {
        try {
            await appointmentApi.cancelAppointment(idAppointment, {
                headers: {
                    Authorization: `${localStorage.getItem(
                        'access_token'
                    )}`
                }
            })
            getAllAppointmentFromAPI()
            toast.success('Huỷ lịch hẹn thành công', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 2000
            })
        }
        catch (err) {
            toast.error(err.message, {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 2000
            })
        }
    }
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
                getAllAppointmentFromAPI()
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
    console.log('userdata', listAppointment)
    return (
        <div className="appointmentManager">
            <div className="appointmentManager__container">
                <header>Quản lí cuộc hẹn</header>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            {userData.role.name === 'ROLE_DOCTOR' ? (<th>Bệnh nhân</th>) : (<th>Bác sĩ</th>)}
                            <th>Bắt đầu</th>
                            <th>Kết thúc</th>
                            <th>Triệu chứng</th>
                            <th>Tình trạng</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listAppointment.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    {userData.role.name === 'ROLE_DOCTOR' ? (<td>{`${item.patient.user.firsname} ${item.patient.user.lastname}`}</td>) : (<td>{`${item.schedule.doctor.user.firsname} ${item.schedule.doctor.user.lastname}`}</td>)}
                                    <td>{convertTZ7Str(item.schedule.begin)}</td>
                                    <td>{convertTZ7Str(item.schedule.end)}</td>
                                    <td>{item.symptoms}</td>
                                    <td>{item.status.name}</td>
                                    {userData.role.name === 'ROLE_DOCTOR' && item.status.name === 'NEW' && <td><button className="btnSuccess" onClick={() => confirmAppointment(item.id)}>Xác nhận</button></td>}
                                    {userData.role.name === 'ROLE_PATIENT' && item.status.name === 'NEW' && <td><button className="btnCancel" onClick={() => cancelAppointment(item.id)}>Hủy cuộc hẹn</button></td>}
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AppointmentManager
