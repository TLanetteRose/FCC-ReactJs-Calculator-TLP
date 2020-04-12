import React from 'react';
import './Button.css';


const isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
    // Detects if it is a number or not
};

export const Button = props => (
    <div id={props.id} className={`button-wrapper ${isOperator(props.children) ? null : "operator"}`} 
    onClick={() => props.onClick(props.children)}>
        {props.children}
    </div>
);


