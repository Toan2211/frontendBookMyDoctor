import React, { useState } from 'react'
import './index.scss'
import { BiSearch } from 'react-icons/bi'
function SearchInput() {
    const [value, setValue] = useState('')
    return (
        <div className="searchInput">
            <div className="searchInput__icon">
                <BiSearch className="icon" />
            </div>
            <input
                value={value}
                onChange={e => setValue(e.target.value)}
                className="searchInput__input"
                placeholder="Triệu chứng, bác sĩ, bệnh viện..."
            />
        </div>
    )
}

export default SearchInput
