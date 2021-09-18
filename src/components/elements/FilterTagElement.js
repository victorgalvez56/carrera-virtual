import React from 'react'
import styled from 'styled-components'
import { Icon } from 'react-icons-kit';
import {close} from 'react-icons-kit/ikons/close'

function FilterTagElement({ type, text,uppercase, onClick, pointer, flex, block, deleteIcon, onClickDeleteIcon}){
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
    if(uppercase){
        className = className + ' uppercase';
    }

    return(
            <FilterTagElementDiv type={type} className={` ${className}`} onClick={onClick}>{text}
                {deleteIcon &&
                    <>
                        {' '}
                        <Icon className="buttonIcon" icon={ close } size="20" onClick={onClickDeleteIcon}/>
                    </>
                }
            </FilterTagElementDiv> 
    );
}

export default FilterTagElement;

const FilterTagElementDiv = styled.button`
    border: 1px solid;
    padding-top: 1px;
    padding-bottom: 0px;
    padding-left: 5px;
    padding-right: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    outline: none;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    align-items: center;
    text-align: center;
    letter-spacing: 1.0px;
    text-transform: uppercase;
    background-color: #585858 !important;
    color: var(--font-white);
    border-color:#585858;
    
    .buttonIcon{
        cursor: pointer;
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
    &.uppercase{
        text-transform: uppercase;
    }

    &.selected{
        color: var(--font-white);
        cursor: pointer;
        background-color: var(--main-green);
        border-color:  var(--main-green);
    }




`;