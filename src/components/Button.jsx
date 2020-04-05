import React from 'react';
import './Button.css';


const isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
    // Detects if it is a number or not
}
const Button = props => (
    <div className={`button-wrapper ${
        isOperator(props.children) ? null : "operator"
    }`}>
        {props.children}
    </div>
)

export default Button;