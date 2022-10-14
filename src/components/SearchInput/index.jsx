import React, { useState } from 'react'
import './index.scss'
import { BiSearch } from 'react-icons/bi'
function SearchInput({ placeholder, mode }) {
    const [value, setValue] = useState('')
    return (
        <div
            className={`${
                mode === 'list' ? 'searchInput--list ' : ''
            }searchInput`}
        >
            <div className="searchInput__icon">
                <BiSearch className="icon" />
            </div>
            <input
                value={value}
                onChange={e => setValue(e.target.value)}
                className={`${
                    mode === 'list' ? 'searchInput__input--list ' : ''
                }searchInput__input`}
                placeholder={placeholder}
            />
        </div>
    )
}

export default SearchInput
