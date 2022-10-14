import InputField from 'components/InputFiled'
import React from 'react'
import { useForm } from 'react-hook-form'
import './index.scss'
import { RiLockPasswordFill } from 'react-icons/ri'

function EditPassword({ onClose }) {
    const form = useForm({
        defaultValues: {
            password: '',
            newPassword: '',
            retypePassword: ''
        }
    })
    return (
        <div className="editPassword">
            <div className="editPassword__container">
                <h1>Thay đổi mật khẩu</h1>
                <form>
                    <div className="form__element">
                        <InputField
                            name="password"
                            type="password"
                            form={form}
                            placeholder="Mật khẩu cũ"
                            icon={<RiLockPasswordFill />}
                        />
                    </div>
                    <div className="form__element">
                        <InputField
                            name="newPassword"
                            type="password"
                            form={form}
                            placeholder="Mật khẩu mới"
                            icon={<RiLockPasswordFill />}
                        />
                    </div>
                    <div className="form__element">
                        <InputField
                            name="retypePassword"
                            type="password"
                            form={form}
                            placeholder="Nhập lại mật khẩu mới"
                            icon={<RiLockPasswordFill />}
                        />
                    </div>
                </form>
                <div className="editPassword__action">
                    <button className="btnSuccess">Cập nhật</button>
                    <button onClick={onClose} className="btnCancel">
                        Hủy
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditPassword
