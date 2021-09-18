import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const BadgeElementSpan = styled.span`
        padding: 4px 11px;
        font-size: 12px;
        font-weight: bold;
        border-radius: 16px;
        border: 1px solid;
        white-space: nowrap;
        
        &.uppercase{
            text-transform: uppercase;
        }

        &.theme-primary.color-green{
            background-color: var(--main-green);
            border-color: var(--main-green);
            color: white;
        }

        &.theme-primary.color-orange{
            background-color: var(--main-orange);
            border-color: var(--main-orange);
            color: white;
        }

        &.theme-primary.color-red{
            background-color: var(--main-red);
            border-color: var(--main-red);
            color: white;
        }

        &.theme-primary.color-yellow{
            background-color: var(--main-yellow);
            border-color: var(--main-yellow);
            color: white;
        }

        &.theme-primary.color-black{
            background-color: var(--main-deep-dark);
            border-color: var(--main-deep-dark);
            color: white;
        }

        &.theme-primary.color-white{
            background-color: var(--main-white);
            border-color: var(--main-white);
            color: var(--font-dark);
        }

        &.theme-secondary.color-green{
            background-color: transparent;
            border-color: var(--main-green);
            color: var(--main-green);
        }

        &.theme-secondary.color-orange{
            background-color: transparent;
            border-color: var(--main-orange);
            color: var(--main-orange);
        }

        &.theme-secondary.color-red{
            background-color: transparent;
            border-color: var(--main-red);
            color: var(--main-red);
        }

    `;


function BadgeElement({ theme, text, color, uppercase, className, hasDiv, link }){
    if (!theme){
        theme = 'primary';
    }
    if (!color){
        color = 'orange';
    }
    if(uppercase){
        className = className + ' uppercase';
    }
    if(theme){
        className = className + ' theme-'+theme;
    }
    if(color){
        className = className + ' color-'+color;
    }
    if (!hasDiv){
        hasDiv = false;
    }

    if(!hasDiv){

        if(link && link!=""){
            return(
                <Link to={link}>
                <BadgeElementSpan className={className}>{text}</BadgeElementSpan>
                </Link>
            );
        } else {
            return(
                <BadgeElementSpan className={className}>{text}</BadgeElementSpan>
            );
        }

    }

    if(hasDiv){

        if(link && link!=""){
            return(
                <div>
                <Link to={link}>
                <BadgeElementSpan className={className}>{text}</BadgeElementSpan>
                </Link>
                </div>
            );
        } else {
            return(
                <div>
                <BadgeElementSpan className={className}>{text}</BadgeElementSpan>
                </div>
            );
        }
    }


}

export default BadgeElement;

