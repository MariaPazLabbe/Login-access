import React from 'react';
import '../Label/Label.css';

const Label = ({text}) =>{
    return(
        <div className='label-box'>
            <label className='label-text'>{ text }</label>
        </div>
    )
}

export default Label;
