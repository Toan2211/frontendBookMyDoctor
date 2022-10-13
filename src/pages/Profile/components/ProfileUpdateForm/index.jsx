import InputField from 'components/InputFiled'
import RadioGroup from 'components/RadioGroup'
import React from 'react'
import { useForm } from 'react-hook-form'
import {
    BsFillCalendarFill,
    BsFillTelephoneFill
} from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import { MdEmail, MdLocationPin } from 'react-icons/md'
import { useSelector } from 'react-redux'
import './index.scss'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import PreviewUploadImg from 'components/PreviewUploadImg'
import patientsApi from 'api/patientsApi'
import { toast } from 'react-toastify'
// eslint-disable-next-line no-useless-escape
const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
function ProfileUpdateForm({ onClose }) {
    const userData = useSelector(state => state.user.profile)
    const schema = yup.object().shape({
        phoneNumber: yup
            .string()
            .required('Vui lòng nhập số điện thoại')
            .matches(phoneRegExp, 'Vui lòng nhập số điện thoại')
            .min(10, 'Số điện thoại không hợp lệ')
            .max(10, 'Số điện thoại không hợp lệ'),
        firsname: yup.string().required('Vui lòng nhập họ'),
        lastname: yup.string().required('Vui lòng nhập tên'),
        email: yup
            .string()
            .required('Vui lòng nhập Email')
            .email('Email không hợp lệ'),
        birthday: yup.string().required('Vui lòng nhập ngày sinh')
    })
    const form = useForm({
        defaultValues: {
            image: '',
            phoneNumber: '',
            email: '' || userData.email,
            firsname: '' || userData.firsname,
            lastname: '' || userData.lastname,
            gender: Number,
            birthday: '',
            address: ''
        },
        resolver: yupResolver(schema)
    })
    const handleSubmitForm = value => {
        console.log('edit profile form', value)
        const submitValue = { ...value, id: 7 }
        const formData = new FormData()
        for (let key in submitValue) {
            formData.append(key, submitValue[key])
        }
        (async () => {
            try {
                const datares = await patientsApi.updatePatient(formData)
                console.log(datares)
                toast.error('Cập nhật thành công', {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    autoClose: 2000
                })
            } catch (err) {
                toast.error(err.message, {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
            }
        })()
    }
    return (
        <div className="profileUpdateForm">
            <div className="profileUpdateForm__container">
                <h1>Chỉnh sửa thông tin</h1>
                <form
                    className="profileUpdateForm__form"
                    onSubmit={form.handleSubmit(handleSubmitForm)}
                >
                    <div className="authform__form-element">
                        <PreviewUploadImg form={form} name="image" />
                    </div>
                    <div className="form__element-two-input">
                        <div>
                            <InputField
                                name="firsname"
                                type="input"
                                form={form}
                                placeholder="Họ"
                                icon={<FaUser />}
                            />
                        </div>
                        <div>
                            <InputField
                                name="lastname"
                                type="input"
                                form={form}
                                placeholder="Tên"
                                icon={<FaUser />}
                            />
                        </div>
                    </div>
                    <div className="form__element">
                        <RadioGroup
                            name="gender"
                            form={form}
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
                            icon={<MdEmail />}
                        />
                    </div>
                    <div className="form__element">
                        <InputField
                            name="birthday"
                            type="date"
                            form={form}
                            placeholder="Ngày sinh"
                            icon=<BsFillCalendarFill />
                        />
                    </div>
                    <div className="form__element">
                        <InputField
                            name="phoneNumber"
                            type="input"
                            form={form}
                            placeholder="Số điện thoại"
                            icon={<BsFillTelephoneFill />}
                        />
                    </div>
                    <div className="form__element">
                        <InputField
                            name="address"
                            type="input"
                            form={form}
                            placeholder="Địa chỉ"
                            icon={<MdLocationPin />}
                        />
                    </div>
                    <div className="profileUpdateForm__action">
                        <button className="btnSuccess" type="submit">
                            Cập nhật
                        </button>
                        <button
                            onClick={onClose}
                            className="btnCancel"
                        >
                            Hủy
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProfileUpdateForm
