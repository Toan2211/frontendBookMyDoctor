import React from 'react'
import formatter from 'utils/formatMoney'
import './index.scss'
function DashboardItem({ count, name, icon, money, countShow }) {
    return (
        <div className={`${countShow ? 'dashboard__itemInstance-item-4-item ': ''}dashboard__itemInstance-item`}>
            <div className="dashboard__itemInstance-item-content">
                <span>{money ? formatter.format(count) : count}</span>
                <span>{name}</span>
            </div>
            <div className="dashboard__itemInstance-item-icon">
                <span>
                    {icon}
                </span>
            </div>
        </div>
    )

}



export default DashboardItem