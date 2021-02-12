import React from 'react';
import './BuildControl.css'

const buildControl = (props) => (
    <div className="BuildControl">
        <div className="BuildControl__Label">{props.label}</div>
        <button
            className="BuilControl__Less_button"
            onClick={props.removeIngredient}
            disabled={props.disabled}>Less</button>
        <button
            className="BuilControl__More_button"
            onClick={props.addIngredient}>More</button>
    </div>
);

export default buildControl;

