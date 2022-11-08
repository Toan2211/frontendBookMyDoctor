import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import './index.scss'
function ReviewDialog({ onClose }) {
    // console.log(appointmentData)
    const handleOnClick = e => {
        if (e.target.className === 'reviewDialog') onClose()
    }
    const [rate, setRate] = useState(4)
    const arr = [1, 2, 3, 4, 5]
    const [review, setReview] = useState('')
    const handleOnChange = e => setReview(e.target.value)
    const handleSubmitForm = () => {
        if (review === '') return
        const valueSubmit = { review: review, rate: rate }
        console.log(valueSubmit)
    }
    return (
        <div className="reviewDialog" onClick={handleOnClick}>
            <div className="reviewDialog__container">
                <header>Đánh giá bác sĩ</header>
                <div className="reviewDialog__listStar">
                    {arr.map((item) => {
                        if (item <= rate) {
                            return (
                                <span
                                    key={item}
                                    onClick={() => {
                                        setRate(item)
                                    }}
                                >
                                    <AiFillStar className="star icon__active" />
                                </span>
                            )
                        }
                        return (
                            <span
                                key={item}
                                onClick={() => {
                                    setRate(item)
                                }}
                            >
                                <AiFillStar className="star" />
                            </span>
                        )
                    })}
                </div>
                <div className="reviewDialog__message">
                    <textarea
                        value={review}
                        onChange={handleOnChange}
                        className = "reviewDialog__message-textarea"
                    ></textarea>
                </div>
                <button type="submit" onClick={handleSubmitForm} className = "reviewDialog__button btnReview">
                    Đánh giá
                </button>
            </div>
        </div>
    )
}

export default ReviewDialog
