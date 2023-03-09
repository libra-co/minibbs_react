import { Button } from 'antd-mobile'
import React from 'react'

const UserCenter = () => {
    return (
        <div className='user-center-page'>
            <p className='user-center-header'>欢迎您: Mock用户名</p>
            <div className="block-one">
                <Button fill='none'>信箱</Button>(0/0)
                <Button fill='none'>好悠</Button>(0)
            </div>
            
        </div>
    )
}

export default UserCenter