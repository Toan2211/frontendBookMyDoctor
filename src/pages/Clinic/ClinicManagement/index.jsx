import clinicApi from 'api/clinicApi'
import Loading from 'components/Loading'
import { path } from 'constants/path'
import React, { useEffect, useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import './index.scss'

function ClinicManagement() {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] =useState(true)
    const [clinicsData, setClinicsData] = useState([])
    useEffect(() => {
        (async () => {
            const data = await clinicApi.getAllClinic()
            setClinicsData(data.clinic)
            setIsLoading(false)
        })()
    }, [])
    if (isLoading) return <Loading />

    return (
        <div className="clinicManagement">
            <div className="clinicManagement__container">
                <header>Quản lí phòng khám</header>
                <div className="clinicManagement__action">
                    <button
                        className="btnSuccess"
                        onClick={() => navigate(path.addClinic)}
                    >
                        Thêm phòng khám mới
                    </button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tên phòng khám</th>
                            <th>Đường</th>
                            <th>Tỉnh, thành phố</th>
                            <th>Chỉnh sửa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clinicsData.map(clinicItem => (
                            <tr key={clinicItem.id}>
                                <td>{clinicItem.id}</td>
                                <td>{clinicItem.name}</td>
                                <td>{clinicItem.street}</td>
                                <td>{clinicItem.city}</td>
                                <td>
                                    <Link
                                        to={`/system/updateClinic/${clinicItem.id}`}
                                        state={{ clinicItem }}
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

export default ClinicManagement