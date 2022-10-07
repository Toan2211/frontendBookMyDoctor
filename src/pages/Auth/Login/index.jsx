import React from 'react'
import './index.scss'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import InputField from 'components/InputFiled'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { path } from 'constants/path'
import { useDispatch } from 'react-redux'
import { login } from '../userSlice'
import { unwrapResult } from '@reduxjs/toolkit'

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const schema = yup.object().shape({
        identifier: yup
            .string()
            .required('Vui lòng nhập Email')
            .email('Email không hợp lệ'),
        password: yup.string().required('Vui lòng nhập mật khẩu')
    })
    const form = useForm({
        defaultValues: {
            identifier: '',
            password: ''
        },
        resolver: yupResolver(schema)
    })
    const handleSubmitForm = async value => {
        alert(value.identifier + value.password)
        try {
            const reponse = await dispatch(login(value))
            console.log(unwrapResult(reponse))
            navigate('/')
        } catch (err) {
            alert(err.message)
        }
    }
    return (
        <div className="authform">
            <div className="authform__content">
                <span className="authform__content-title">
                    Đăng nhập
                </span>
                <form onSubmit={form.handleSubmit(handleSubmitForm)}>
                    <div className="authform__form-element">
                        <InputField
                            label="Email"
                            name="identifier"
                            type="input"
                            form={form}
                            placeholder="Email"
                        />
                    </div>
                    <div className="authform__form-element">
                        <InputField
                            label="Mật khẩu"
                            name="password"
                            type="password"
                            form={form}
                            placeholder="Mật khẩu"
                        />
                    </div>
                    <div className="forgot-password">
                        <Link to={path.forgotPassword}>
                            Quên mật khẩu ?
                        </Link>
                    </div>
                    <div className="button-submit">
                        <button
                            type="submit"
                            className="button-submit-login"
                        >
                            Đăng nhập
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
