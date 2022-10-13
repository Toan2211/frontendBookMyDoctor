import React from 'react';
import PropTypes from 'prop-types';
import images from 'assets';

DoctorProfile.propTypes = {
    
};

function DoctorProfile(props) {
    return (
        <div className="doctorProfile">
            <div className="doctorProfile__container">
                <div className="doctorProfile__info">
                    <div className="doctorProfile__info-img">
                        <img src = {images.doctorEx} alt = "doctor"/>
                    </div>
                    <div className="doctorProfile__info-content">
                        <span>Phó giáo sư, Tiến sĩ, Bác sĩ Nguyễn Văn Quỳnh</span>
                        <p>Nguyên Phó Chủ nhiệm </p>
                    </div>
                </div>
                <div className="doctorProfile__rate">

                </div>
            </div>
        </div>
    );
}

export default DoctorProfile;