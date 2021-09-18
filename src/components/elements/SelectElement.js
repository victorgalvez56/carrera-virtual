import React from 'react'
import styled from 'styled-components'

function SelectElement({ label, name, value, options, handleChange, disabled, required}){
    let containerClass="input-container";
    if(!label){
        containerClass +="-nolabel";
    }
    return(
        <SelectElementDiv>
            <div className={containerClass}>
                {label &&
                <label>
                    {label}
                    {required &&
                    <span className="requiredSpan">*</span>

                    }
                </label>
                }

                <select name={name} value={value} onChange={handleChange} disabled={disabled} required={required}>
                    {options && options.map(option => (
                        <option key={option.id} value={option.id}>{option.value}</option>
                    ))}
                </select>

            </div>
        </SelectElementDiv>
    );
}

export default SelectElement;

const SelectElementDiv = styled.div`
    select{
        border: 1px solid #C5C5C5;
        box-sizing: border-box;
        border-radius: 4px;
        padding: 10px;
        font-size: 16px;
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
        margin-top: 1.2rem; 
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
`;
