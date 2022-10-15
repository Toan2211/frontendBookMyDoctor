import React from 'react'
import images from 'assets'
import { AiFillStar } from 'react-icons/ai'
import './index.scss'
DoctorProfile.propTypes = {}

function DoctorProfile() {
    return (
        <div className="doctorProfile">
            <div className="doctorProfile__container">
                <div className="doctorProfile__info">
                    <div className="doctorProfile__info-img">
                        <img src={images.doctorEx} alt="doctor" />
                    </div>
                    <div className="doctorProfile__info-content">
                        <span>
                            Phó giáo sư, Tiến sĩ, Bác sĩ Nguyễn Văn
                            Quỳnh
                        </span>
                        <p>
                            Nguyên Phó Chủ nhiệm Bộ môn Nội tim mạch,
                            Bệnh viện Trung ương Quân đội 108 Chuyên
                            gia hàng đầu về nội tim mạch với hơn 30
                            năm kinh nghiệm Bác sĩ khám cho người bệnh
                            từ 18 tuổi trở lên
                        </p>
                    </div>
                </div>
                <div className="doctorProfile__rate">
                    <span className="doctorProfile__rate-point">3.0 trên 5</span>
                    <div>
                        <span className="doctorProfile__rate-star-active">
                            <AiFillStar />
                        </span>
                        <span className="doctorProfile__rate-star-active">
                            <AiFillStar />
                        </span>
                        <span className="doctorProfile__rate-star-active">
                            <AiFillStar />
                        </span>
                        <span>
                            <AiFillStar />
                        </span>
                        <span>
                            <AiFillStar />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorProfile
