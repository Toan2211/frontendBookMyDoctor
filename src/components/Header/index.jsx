import React, { useState } from 'react'
import images from 'assets'
import './index.scss'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { path } from 'constants/path'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from 'pages/Auth/userSlice'
import { FiMenu } from 'react-icons/fi'

function Header() {
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [showDropdown, setShowDropdown] = useState(false)
    const toggleDropdownProfile = () => {
        setShowDropdown(!showDropdown)
    }
    const currentUser = useSelector(state => state.user)
    const handleLogout = () => {
        dispatch(logout())
        navigate('/login')
    }
    const handleProfile = () => {
        navigate(path.profile)
        setShowDropdown(false)
    }
    return (
        <header className="header">
            <div className="header__left">
                <div className="header__logo">
                    <Link to={path.home}>
                        <img
                            src={images.logo}
                            alt="logo"
                            className="logo"
                        />
                    </Link>
                </div>
                <div className="header__menu-mobile">
                    <span><FiMenu /></span>
                </div>
            </div>
            <div className="header__center">
                <ul className="header__menu">
                    <li className="header__menu-item">
                        <a
                            href="/#"
                            className="header__menu-item-link"
                        >
                            Chuyên khoa
                            <span>Tìm bác sĩ theo khoa</span>
                        </a>
                    </li>
                    <li className="header__menu-item">
                        <a
                            href="/#"
                            className="header__menu-item-link"
                        >
                            Cơ sở y tế
                            <span>Chọn bác sĩ theo phòng khám</span>
                        </a>
                    </li>
                    <li className="header__menu-item">
                        <a
                            href="/#"
                            className="header__menu-item-link"
                        >
                            Bác sĩ
                            <span>Chọn bác sĩ giỏi</span>
                        </a>
                    </li>
                </ul>
                <div className="header__logo-center">
                    <Link to={path.home}>
                        <img
                            src={images.logo}
                            alt="logo"
                            className="logo"
                        />
                    </Link>
                </div>
            </div>
            <div className="header__right">
                <div className="header__action">
                    {currentUser.profile.email && (
                        <div className="header__profile">
                            <img
                                className="header__profile-img"
                                src={images.vietnamflag}
                                onClick={toggleDropdownProfile}
                            />
                            {showDropdown && (
                                <ul className="header__profile-dropdown">
                                    <li className="header__profile-dropdown-item"
                                        onClick={handleProfile}
                                    >
                                        Trang cá nhân
                                    </li>
                                    <li
                                        className="header__profile-dropdown-item"
                                        onClick={handleLogout}
                                    >
                                        Đăng xuất
                                    </li>
                                </ul>
                            )}
                        </div>
                    )}
                    {!currentUser.profile.email && (
                        <div className="header__action-auth">
                            {location.pathname === '/login' ? (
                                <Link to={path.register}>
                                    <button className="header__action-auth-button">
                                        Đăng ký
                                    </button>
                                </Link>
                            ) : (
                                <Link to={path.login}>
                                    <button className="header__action-auth-button">
                                        Đăng nhập
                                    </button>
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header
