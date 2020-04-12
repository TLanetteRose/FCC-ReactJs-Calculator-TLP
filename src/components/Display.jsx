import React from 'react';
import './Display.css';

export const Display = (props) => (
    <div id={props.id} className="display">{props.displayValue}</div>
);

