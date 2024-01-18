import React from 'react'
import './myStyle.css'

function StyleSheet(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div className='primary'>StyleSheet</div>
        // <div className={`${className} font-xs`}> Style-Sheet</div>
    )
}

export default StyleSheet
