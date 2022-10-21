import React, { useState } from 'react'


function SwitchButton() {
    const [check, setCheck] = useState(false)
    const handleOnChecked = () => {
        setCheck(!check)
    }
    return (
        <label>
            <input
                type="checkbox"
                className="inputCheckbox"
                checked={check}
            />
            <span className="check" onClick={handleOnChecked}></span>
        </label>
    )
}

export default SwitchButton
