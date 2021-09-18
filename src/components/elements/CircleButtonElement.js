import React from 'react'
import styled from 'styled-components'
import { Icon } from 'react-icons-kit'

function CircleButtonElement({ icon, iconSize, onClick, colorActive, active, border  }){
    var className='';
    var specialStyle = {};
    if(active){
        specialStyle['backgroundColor'] = colorActive;
    }
    const borderWidth = border || 1;
    if(active){
        specialStyle['border'] = `${borderWidth}px solid ${colorActive}`;
    }
    return(
            <CircleButtonElementContainer style={ specialStyle } className={` ${className}`} onClick={onClick}  >
                <Icon className="Icon" icon={ icon }  size={ iconSize } style={{ }}></Icon>
            </CircleButtonElementContainer>
    );
}

export default CircleButtonElement;

const CircleButtonElementContainer = styled.div`
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    -webkit-border-radius: 40px;
    -moz-border-radius: 40px;
    border-radius: 40px;
    border: 1px solid white;
    outline: none;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    align-items: center;
    text-align: center;
    letter-spacing: 1.0px;
    text-transform: uppercase;
    width: fit-content;
    cursor: pointer;

    &.flex{
        display: flex;
    }

    &.block{
        width: 100%;
    }

    &.noblock{
        width: fit-content;
    }

    

    &.pointer{
        cursor: pointer;
    }

    &.primary{
        color: var(--font-white);
        cursor: pointer;
        background-color: var(--main-red);
        border-color:  var(--main-red);
        &:hover{
            background-color: var(--main-red-hover); 
            border-color:  var(--main-red-hover);
        }
    }

    &.primary.disabled{
        color: var(--font-white);
        cursor: none;
        background-color: var(--disabled); 
        border-color:  var(--disabled);
    }

    &.secundary{
        color: var(--main-red);
        cursor: pointer;
        background-color: transparent;
        border-color:  var(--main-red);
        &:hover{
            background-color: var(--main-red-hover); 
            border-color:  var(--main-red-hover);
            color: var(--font-white);
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
