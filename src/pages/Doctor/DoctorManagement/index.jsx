import doctorApi from 'api/doctorApi'
import { path } from 'constants/path'
import React, { useEffect, useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import './index.scss'

function DoctorManagement() {
    const navigate = useNavigate()
    const [dataListDoctors, setDataListDoctors] = useState([])

    useEffect(() => {
        (async () => {
            const respone = await doctorApi.getAllDoctor()
            setDataListDoctors(respone.doctor)
            console.log(dataListDoctors[0])
        })()
    }, [])
    console.log(dataListDoctors)
    // console.log(dataListDoctors[0].user.birthday)
    return (
        <div className="doctorManagement">
            <div className="doctorManagement__container">
                <header>Quản lí Bác sĩ</header>
                <div className="doctorManagement__action">
                    <button
                        className="btnSuccess"
                        onClick={() => navigate(path.addDoctor)}
                    >
                        Thêm bác sĩ mới
                    </button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Họ tên</th>
                            <th>Ngày sinh</th>
                            <th>Số điện thoại</th>
                            <th>Giới tính</th>
                            <th>Email</th>
                            <th>Chuyên khoa</th>
                            <th>Phòng khám </th>
                            <th>Bệnh viện </th>
                            <th>Chỉnh sửa </th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataListDoctors && dataListDoctors.map(doctor => (
                            <tr key={doctor.id}>
                                <td>{doctor.id}</td>
                                <td>{`${doctor['user.firsname']} ${doctor['user.lastname']}`}</td>
                                <td>{doctor['user.birthday'].split('T')[0]}</td>
                                <td>{doctor['user.phoneNumber']}</td>
                                <td>{doctor['user.gender'] === 1 ? 'Nam' : 'Nữ'}</td>
                                <td>{doctor['user.email']}</td>
                                <td>{doctor.specialty_id}</td>
                                <td>{doctor.clinic_id}</td>
                                <td>{doctor.hospital_id}</td>
                                <td>
                                    <Link
                                        to={`/system/updateDoctor/${doctor.id}`}
                                        state={{ doctor }}
                                    >
                                        <span className="edit__icon">
                                            <AiFillEdit />
                                        </span>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DoctorManagement
