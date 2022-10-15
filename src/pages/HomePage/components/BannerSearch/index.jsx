import images from 'assets'
import SearchInput from 'components/SearchInput'
import React from 'react'
import './index.scss'

function BannerSearch() {
    return (
        <div className="bannerSearch">
            <div className="bannerSearch__container">
                <div className="bannerSearch__content">
                    <div className="bannerSearch__title">
                        <h1>Ứng dụng tìm kiếm bác sĩ</h1>
                        <span>Giải pháp y tế thông minh giúp tối ưu kết nối, chăm sóc sức khỏe tốt hơn cho cả bạn và gia đình</span>
                    </div>
                    <div className="bannerSearch__input-container">
                        <SearchInput placeholder="Bác sĩ, phòng khám, chuyên khoa ..."/>
                    </div>
                </div>

                <div className="bannerSearch__img">
                    <img
                        src={images.bannerSearchImg}
                        alt="bannerSearch Img"
                    />
                </div>
            </div>
        </div>
    )
}

export default BannerSearch
