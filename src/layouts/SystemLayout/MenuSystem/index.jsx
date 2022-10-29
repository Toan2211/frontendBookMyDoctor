import React from 'react'
import { path } from 'constants/path'
import { NavLink } from 'react-router-dom'
import './index.scss'
import {
    FaClinicMedical,
    FaHospital,
    FaUserAlt,
    FaUserNurse
} from 'react-icons/fa'
import { MdFolderSpecial } from 'react-icons/md'
import { AiFillSchedule } from 'react-icons/ai'

function MenuSystem() {
    return (
        <ul className="menuSystem">
            <li className="menuSystem-item">
                <NavLink
                    to={path.clinicManagement}
                    className={({ isActive }) =>
                        isActive
                            ? 'menuSystem-item-link--active menuSystem-item-link'
                            : 'menuSystem-item-link'
                    }
                >
                    <span className="menuSystem-item-icon">
                        <FaClinicMedical />
                    </span>
                    Quản lí Phòng khám
                </NavLink>
            </li>
            <li className="menuSystem-item">
                <NavLink
                    to={path.specialistManagement}
                    className={({ isActive }) =>
                        isActive
                            ? 'menuSystem-item-link--active menuSystem-item-link'
                            : 'menuSystem-item-link'
                    }
                >
                    <span className="menuSystem-item-icon">
                        <MdFolderSpecial />
                    </span>
                    Quản lí Chuyên khoa
                </NavLink>
            </li>
            <li className="menuSystem-item">
                <NavLink
                    to={path.hospitalManagement}
                    className={({ isActive }) =>
                        isActive
                            ? 'menuSystem-item-link--active menuSystem-item-link'
                            : 'menuSystem-item-link'
                    }
                >
                    <span className="menuSystem-item-icon">
                        <FaHospital />
                    </span>
                    Quản lí Bệnh viện
                </NavLink>
            </li>
            <li className="menuSystem-item">
                <NavLink
                    to={path.patientManagement}
                    className={({ isActive }) =>
                        isActive
                            ? 'menuSystem-item-link--active menuSystem-item-link'
                            : 'menuSystem-item-link'
                    }
                >
                    <span className="menuSystem-item-icon">
                        <FaUserAlt />
                    </span>
                    Quản lí Bệnh nhân
                </NavLink>
            </li>
            <li className="menuSystem-item">
                <NavLink
                    to={path.doctorManagement}
                    className={({ isActive }) =>
                        isActive
                            ? 'menuSystem-item-link--active menuSystem-item-link'
                            : 'menuSystem-item-link'
                    }
                >
                    <span className="menuSystem-item-icon">
                        <FaUserNurse />
                    </span>
                    Quản lí Bác sĩ
                </NavLink>
            </li>
            <li className="menuSystem-item">
                <NavLink
                    to={path.scheduleManagement}
                    className={({ isActive }) =>
                        isActive
                            ? 'menuSystem-item-link--active menuSystem-item-link'
                            : 'menuSystem-item-link'
                    }
                >
                    <span className="menuSystem-item-icon">
                        <AiFillSchedule />
                    </span>
                    Quản lí lịch khám
                </NavLink>
            </li>
        </ul>
    )
}

export default MenuSystem
