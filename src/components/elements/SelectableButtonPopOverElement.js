import React from 'react'
import styled from 'styled-components'

function SelectableButtonPopOverElement({ type, text, itemId, onClick, pointer, selected, flex, block, selectedValues}){
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

    if((selected) || ((selectedValues) && (selectedValues.includes(itemId)))){
        className = className + ' selected';
    } else {
        className = className + ' nonselected';
    }

    return(
            <SelectableButtonPopOverElementDiv type={type} itemId={itemId} className={` ${className}`} onClick={onClick}>{text}</SelectableButtonPopOverElementDiv> 
    );
}

export default SelectableButtonPopOverElement;

const SelectableButtonPopOverElementDiv = styled.button`
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
    display: block;
    margin: 9px;

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