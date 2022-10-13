import images from 'assets'
import InputField from 'components/InputFiled'
import RadioGroup from 'components/RadioGroup'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
    BsFillCalendarFill,
    BsFillTelephoneFill
} from 'react-icons/bs'
import { MdEmail, MdLocationPin } from 'react-icons/md'
import { FaUser } from 'react-icons/fa'

import EditPassword from '../EditPassword'
import ProfileUpdateForm from '../ProfileUpdateForm'
import './index.scss'
import { useSelector } from 'react-redux'
function ProfileInfo() {
    const userData = useSelector(state => state.user.profile)
    const [isShowFormEdit, setIsShowFormEdit] = useState(false)
    const [isShowFormEditPassword, setIsShowFormEditPassword] =
        useState(false)

    const toggleShowFormEdit = () =>
        setIsShowFormEdit(!isShowFormEdit)
    const toggleShowFormEditPassword = () =>
        setIsShowFormEditPassword(!isShowFormEditPassword)
    const form = useForm({
        defaultValues: {
            phoneNumber: '' || 1,
            email: '' || userData.email,
            firstName: '' || userData.firsname,
            lastName: '' || userData.lastname,
            gender: Number,
            birthdate: '',
            address: ''
        }
    })
    return (
        <div className="profileInfo">
            <div className="profileInfo__img">
                <div className="profileInfo__img-container">
                    <img src={images.logoUser} alt="test" />
                    <ul className="profileAction">
                        <li onClick={toggleShowFormEdit}>
                            Chỉnh sửa thông tin
                        </li>
                        <li onClick={toggleShowFormEditPassword}>
                            Thay đổi mật khẩu
                        </li>
                    </ul>
                </div>
            </div>
            <form className="form">
                <div className="form__element-two-input">
                    <div>
                        <InputField
                            name="firstName"
                            type="input"
                            form={form}
                            placeholder="Họ"
                            disabled={true}
                            icon={<FaUser />}
                        />
                    </div>
                    <div>
                        <InputField
                            name="lastName"
                            type="input"
                            form={form}
                            placeholder="Tên"
                            disabled={true}
                            icon={<FaUser />}

                        />
                    </div>
                </div>
                <div className="form__element">
                    <RadioGroup
                        name="gender"
                        form={form}
                        disabled={true}
                        optionData={[
                            { label: 'Nam', value: Number(1) },
                            { label: 'Nữ', value: Number(0) }
                        ]}
                    />
                </div>
                <div className="form__element">
                    <InputField
                        name="email"
                        type="email"
                        form={form}
                        placeholder="Email"
                        disabled={true}
                        icon={<MdEmail />}
                    />
                </div>
                <div className="form__element">
                    <InputField
                        name="birthdate"
                        type="date"
                        form={form}
                        placeholder="Ngày sinh"
                        disabled={true}
                        icon=<BsFillCalendarFill />
                    />
                </div>
                <div className="form__element">
                    <InputField
                        name="phoneNumber"
                        type="input"
                        form={form}
                        placeholder="Số điện thoại"
                        disabled={true}
                        icon={<BsFillTelephoneFill />}
                    />
                </div>
                <div className="form__element">
                    <InputField
                        name="address"
                        type="input"
                        form={form}
                        placeholder="Địa chỉ"
                        disabled={true}
                        icon={<MdLocationPin />}
                    />
                </div>
            </form>
            {isShowFormEdit && (
                <ProfileUpdateForm onClose={toggleShowFormEdit} />
            )}
            {isShowFormEditPassword && (
                <EditPassword onClose={toggleShowFormEditPassword} />
            )}
        </div>
    )
}

export default ProfileInfo
