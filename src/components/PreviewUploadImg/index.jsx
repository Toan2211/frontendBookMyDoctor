import React, { useState } from 'react'
import images from 'assets'
import './index.scss'

PreviewUploadImg.propTypes = {}

function PreviewUploadImg({ form, name }) {
    const [fileInput, setFileInput] = useState('')
    const [previewSource, setPreviewSource] = useState('')
    const handleChangeImg = e => {
        const file = e.target.files[0]
        if (file) form.setValue(name, file)
        setFileInput(e.target.value)
        previewFile(file)
    }
    const previewFile = file => {
        if (!file)
            return
        const reader = new FileReader(file)
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }
    }
    return (
        <div className="previewUploadImg">
            <div className="previewUploadImg__container">
                <div className="previewUploadImg__img">
                    {previewSource ? (
                        <img alt="img" src={previewSource} />
                    ) : (
                        <img alt="img" src={images.doctorEx} />
                    )}
                </div>
                <div>
                    <label
                        className="chooseImg__label"
                        htmlFor="chooseImg"
                    >
                        Chọn ảnh
                    </label>
                    <input
                        id="chooseImg"
                        type="file"
                        onChange={handleChangeImg}
                        value={fileInput}
                        className="inputFile"
                    />
                </div>
            </div>
        </div>
    )
}

export default PreviewUploadImg
