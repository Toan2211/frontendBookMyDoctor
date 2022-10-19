import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { path } from 'constants/path'
import { AiFillEdit } from 'react-icons/ai'
import hospitalApi from 'api/hospitalApi'
import './index.scss'
import Loading from 'components/Loading'
function HospitalManagement() {
    const [hospitalData, setHospitalData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
    useEffect(() => {
        (async () => {
            const data = await hospitalApi.getAllHospital()
            setHospitalData(data.hospital)
            setIsLoading(false)
        })()
    }, [])
    if (isLoading) return <Loading />
    return (
        <div className="hospitalManagement">
            <div className="hospitalManagement__container">
                <header>Quản lí bệnh viện</header>
                <div className="specialistManagement__action">
                    <button
                        className="btnSuccess"
                        onClick={() => navigate(path.addHospital)}
                    >
                        Thêm bệnh viện mới
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
                        {hospitalData && hospitalData.map(hospitalItem => (
                            <tr key={hospitalItem.id}>
                                <td>{hospitalItem.id}</td>
                                <td>{hospitalItem.name}</td>
                                <td>{hospitalItem.street}</td>
                                <td>{hospitalItem.city}</td>
                                <td>
                                    <Link
                                        to={`/system/updateHospital/${hospitalItem.id}`}
                                        state={{ hospitalItem }}
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

export default HospitalManagement