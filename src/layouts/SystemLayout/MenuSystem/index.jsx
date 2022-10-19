import React from 'react'
import { path } from 'constants/path'
import { NavLink } from 'react-router-dom'
import './index.scss'
import {
    FaClinicMedical,
    FaHospital,
    FaHospitalAlt,
    FaUser,
    FaUserNurse
} from 'react-icons/fa'

function MenuSystem() {
    return (
        <ul className="menuSystem">
            <li className="menuSystem-item">
                <NavLink
                    to={path.clinicManagement}
                    className={({ isActive }) =>
                        isActive
                            ? 'menuSystem-item-link active-menuItem'
                            : 'menuSystem-item-link'
                    }
                >
                    <span>
                        <FaHospitalAlt />
                    </span>
                    Quản lí Phòng khám
                </NavLink>
            </li>
            <li className="menuSystem-item">
                <NavLink
                    to={path.specialistManagement}
                    className={({ isActive }) =>
                        isActive
                            ? 'menuSystem-item-link active-menuItem'
                            : 'menuSystem-item-link'
                    }
                >
                    <span>
                        <FaClinicMedical />
                    </span>
                    Quản lí Chuyên khoa
                </NavLink>
            </li>
            <li className="menuSystem-item">
                <NavLink
                    to={path.hospitalManagement}
                    className={({ isActive }) =>
                        isActive
                            ? 'menuSystem-item-link active-menuItem'
                            : 'menuSystem-item-link'
                    }
                >
                    <span>
                        <FaHospital />
                    </span>
                    Quản lí Bệnh viện
                </NavLink>
            </li>
            <li className="menuSystem-item">
                <NavLink
                    to={path.doctorManagement}
                    className={({ isActive }) =>
                        isActive
                            ? 'menuSystem-item-link active-menuItem'
                            : 'menuSystem-item-link'
                    }
                >
                    <span>
                        <FaUserNurse />
                    </span>
                    Quản lí Bác sĩ
                </NavLink>
            </li>
            <li className="menuSystem-item">
                <NavLink
                    to={path.patientManagement}
                    className={({ isActive }) =>
                        isActive
                            ? 'menuSystem-item-link active-menuItem'
                            : 'menuSystem-item-link'
                    }
                >
                    <span>
                        <FaUser />
                    </span>
                    Quản lí Bệnh nhân
                </NavLink>
            </li>
        </ul>
    )
}

export default MenuSystem
