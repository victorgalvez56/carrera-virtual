import React from 'react'
import styled from 'styled-components'

function InputElement({ type, placeholder, name, value, handleChange, disabled, required, hideInput, divWidth, style }) {
    var containerClass = "input-container";
    if (!placeholder) {
        var containerClass = "input-container-nolabel";
    }
    var showInput = true;
    if (hideInput) {
        showInput = false;
    }
    var newWidth = '100%';
    if (divWidth != "") {
        newWidth = divWidth;
    }
    return (
        <InputElementDiv style={{ width: newWidth }}>
            <div className={containerClass} style={{ width: newWidth }}>
                {showInput &&
                    <input style={style} type={type} placeholder={placeholder} name={name} value={value} onChange={handleChange} disabled={disabled} required={required} />
                }
            </div>
        </InputElementDiv>
    );
}

export default InputElement;

const InputElementDiv = styled.div`
    input{
        border: 1px solid var(--main-primary);
        box-sizing: border-box;
        border-radius: 10px;
        padding: 10px;
        font-size: 16px;
        width: 100%;
        height: 35px;
        color: var(--font-record);
    }
    input::placeholder { 
        color: var(--font-record);
        opacity: 0.8; 
      }
    .input-container label{
        font-size: 12px;
        font-weight: bold;
        margin-bottom: 7px;
        text-transform: uppercase;
    }
    .input-container{
        display:grid;
        grid-template-columns: 1fr;
        margin-top: 0.8rem; 
        line-height: 16px;
    }

    .input-container-nolabel{
        display:grid;
        grid-template-columns: 1fr;
        margin-top: 0px; 
        line-height: 16px;
    }

    .requiredSpan{
        color: red;
        font-size: 20px;
        height: 6px;
        line-height: 0;
    }
    input:focus { 
        outline: none !important;
        border-color: var(--main-secondary);;
        // box-shadow: 0 0 10px #719ECE;
    }
`;