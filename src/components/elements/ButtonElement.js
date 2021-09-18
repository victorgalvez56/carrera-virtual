import React from 'react'
import styled from 'styled-components'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

function ButtonElement({ type, text, onClick, theme, pointer, disabled, flex, block, style }) {
    var className = '';
    switch (theme) {
        case 'primary':
            className = 'primary';
            break;
        case 'secundary':
            className = 'secundary';
            break;
        case 'grey':
            className = 'grey';
            break;
        case 'secundary-dark':
            className = 'secundary-dark';
            break;
        case 'tab':
            className = 'tab';
            break;
        case 'tab active':
            className = 'tab active';
            break;
        case 'link':
            className = 'link';
            break;
        default:
            className = 'primary';
    }
    if (pointer) {
        className = className + ' pointer';
    }
    if (disabled) {
        className = className + ' disabled';
        disabled = "disabled";
    }
    if (flex) {
        className = className + ' flex';
    }
    if (block) {
        className = className + ' block';
    } else {
        className = className + ' noblock';
    }

    return (
        <ButtonElementDiv style={style} type={type} className={` ${className}`} onClick={onClick} disabled={disabled}>
            {text}
            {theme === 'link' && <ChevronRightIcon className="rightIcon" />}
        </ButtonElementDiv>
    );
}

export default ButtonElement;

const ButtonElementDiv = styled.button`
    border: 1px solid;
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    padding-left: 2rem;
    padding-right: 2rem;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    outline: none;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    align-items: center;
    text-align: center;
    letter-spacing: 1.0px;
    text-transform: uppercase;
    margin: 1rem 0px 0px 0px;

    .rightIcon{
        position: absolute;
        margin-top: -9px;
        font-size: 32px;
    }
    &.link{
        background: transparent;
        border: unset;
        color: #D03029;
    }

    &.flex{
        display: flex;
    }

    &.block{
        width: 100%;
    }

    &.noblock{
        width: fit-content;
    }

    &.tab{
        border-radius: 0;
        cursor: pointer;
    }
    &.tab{
        border: 0px;
    }
    &.tab.active{
        color: var(--font-white);
        cursor: pointer;
        background-color: var(--main-red);
        /*border:  1px solid black;*/
        &:hover{
            background-color: var(--main-red-hover);
            border-color:  var(--main-red-hover);
        }
    }
    &.tab:first-child{
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        border-right: 0;
    }
    &.tab:last-child{
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        border-left: 0;
    }



    &.pointer{
        cursor: pointer;
    }

    &.primary{
        color: var(--font-white);
        cursor: pointer;
        background-color: var(--main-primary);
        border-color:  var(--main-primary);
        &:hover{
            background-color: var(--main-yellow);
            border-color:  var(--main-yellow);
        }
    }

    &.grey{
        color: var(--font-white);
        cursor: pointer;
        background-color: var(--main-grey);
        border-color:  var(--main-grey);
        &:hover{
            background-color: var(--main-grey-hover);
            border-color:  var(--main-grey-hover);
        }
    }

    &.primary.disabled{
        color: var(--font-white);
        cursor: none;
        background-color: var(--disabled);
        border-color:  var(--disabled);

    }

    &.secundary{
            color: var(--font-white);
            cursor: pointer;
            background-color: var(--main-secondary);
            border-color:  var(--main-secondary);
            &:hover{
                background-color: var(--main-yellow);
                border-color:  var(--main-yellow);
            }
        }
    }

    &.secundary.disabled{
        color: var(--disabled);
        cursor: default;
        background-color: transparent;
        border-color:  var(--disabled);
    }


    &.secundary-dark{
        color: var(--main-white);
        cursor: pointer;
        background-color: transparent;
        border-color:  var(--font-white);
        &:hover{
            background-color: var(--font-white);
            border-color:  var(--font-white);
            color: var(--font-dark);
        }
    }





`;