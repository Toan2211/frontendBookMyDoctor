import React from 'react'
import './index.scss'

function RadioGroup({ title, form, name, optionData, disabled }) {
    return (
        <div className="radio-group">
            <label className="radio-group__title">{title}</label>
            <div className="radio-group__list">
                {optionData.map((item, index) => (
                    <label key={index} className="radio-group__item">
                        {item.label}
                        <input
                            type="radio"
                            value={Number(item.value)}
                            disabled = {disabled}
                            {...form.register(name)}
                        />
                    </label>
                ))}
            </div>
        </div>
    )
}

export default RadioGroup
