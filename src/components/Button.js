import React from 'react'

const Button = ({ text, onShow }) => {
    return <button className="btn" onClick={onShow}>{text}</button>
}

export default Button;
