import patientsApi from 'api/patientsApi'
import Loading from 'components/Loading'
import React, { useEffect, useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'

function PatientList() {
    const [patientsData, setPatientsData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        (async () => {
            const data = await patientsApi.getAllPatients({
                headers: {
                    Authorization: `${localStorage.getItem(
                        'access_token'
                    )}`
                }
            })
            setPatientsData(data.patients)
            setIsLoading(false)
        })()
    }, [])
    if (isLoading) return <Loading />
    return (
        <div className="specialistManagement">
            <div className="specialistManagement__container">
                <header>Quản lí bệnh nhân</header>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                            <th>Họ tên</th>
                            <th>Giới tính</th>
                            <th>Ngày sinh</th>
                            <th>Số điện thoại</th>
                            <th>Địa chỉ</th>
                            <th>Chỉnh sửa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patientsData.map(pateintItem => (
                            <tr key={pateintItem.id}>
                                <td>{pateintItem.id}</td>
                                <td>{pateintItem.user.email}</td>
                                <td>{`${pateintItem.user.firsname} ${pateintItem.user.lastname}`}</td>
                                <td>{pateintItem.user.gender === 1 ? 'Name' : 'Nữ'}</td>
                                <td>{pateintItem.user.birthday.split('T')[0]}</td>
                                <td>{pateintItem.user.phoneNumber}</td>
                                <td>{pateintItem.user.address}</td>

                                <td>
                                    {/* <Link
                                        to={`/system/editSpecialist/${specialistItem.id}`}
                                        state={{ specialistItem }}
                                    >
                                        <span className="edit__icon">
                                            <AiFillEdit />
                                        </span>
                                    </Link> */}
                                    <AiFillEdit />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PatientList