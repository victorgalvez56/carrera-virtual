import React from 'react'
import styled from 'styled-components'
import { Icon } from 'react-icons-kit';
import {arrow_down} from 'react-icons-kit/ikons/arrow_down'

function SelectableButtonElement({ type, text, itemId, onClick, pointer, selected, flex, block, selectedValues, expandIcon, theme}){
    var className = '';

    if(pointer){
        className = className + ' pointer';
    }
    if(flex){
        className = className + ' flex';
    }
    if(block){
        className = className + ' block';
    }
    if(theme&&(theme === 'light')){
        className = className + ' light';
    }

    if((selected) || ((selectedValues) && (selectedValues.includes(itemId)))){
        className = className + ' selected';
    } else {
        className = className + ' nonselected';
    }

    return(
            <SelectableButtonElementDiv type={type} itemId={itemId} className={` ${className}`} onClick={onClick}>{text}
                {expandIcon &&
                    <>
                        {' '}
                        <Icon icon={ arrow_down } size="20" />
                    </>
                }
            </SelectableButtonElementDiv>
    );
}

export default SelectableButtonElement;

const SelectableButtonElementDiv = styled.button`
    border: 1px solid;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    padding-left: 1rem;
    padding-right: 1rem;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 100px;
    outline: none;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    align-items: center;
    text-align: center;
    letter-spacing: 1.0px;
    text-transform: uppercase;
    background-color: transparent;
    color: var(--font-white);
    border-color:#6f6f6f;
    cursor: pointer;

    &.light{
        color: var(--font-black)
    }

    &.flex{
        display: flex;
    }

    &.block{
        width: 100%;
    }

    &.pointer{
        cursor: pointer;
    }

    &.selected{
        color: var(--font-white);
        cursor: pointer;
        background-color: var(--main-green);
        border-color:  var(--main-green);
    }




`;
