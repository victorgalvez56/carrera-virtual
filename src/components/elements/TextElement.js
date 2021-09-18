import React from 'react'
import styled from 'styled-components'

function TextElement({ text, bold, type, theme, center, uppercase, element, onClick, aditionalClass }){
    var className = '';
    switch (type) {
        case 'cta-medium':
            className = 'cta-medium';
            break;
        case 'cta-small':
            className = 'cta-small';
            break;
        case 'label-1':
            className = 'label-1';
            break;
        case 'label-2':
            className = 'label-2';
            break;
       case 'body-1':
            className = 'body-1';
            break;
        case 'body-2':
            className = 'body-2';
            break;
        case 'label-small':
            className = 'label-small';
            break;
        case 'caption':
            className = 'caption';
            break;
        case 'breadcrumb':
            className = 'breadcrumb';
            break;
        default:
            className = 'label-small';
    }
    if(!element){
       var element = 'p';
    }
    if(bold){
        className = className + ' bold';
    }
    if(center){
        className = className + ' center';
    }
    if(uppercase){
        className = className + ' uppercase';
    }
    className = className + ' ' + type;
    className = className + ' ' + theme;
    className = className + ' ' + aditionalClass;
    return(
        <ContainerElement>
        { (text && element === "p") &&
            <div>
            {(typeof text === 'string' || text instanceof String) &&
            <div>
            {text.split("\n").map(function(item, i) {
                return (
                    <TextElementP key={i} className={className}>
                    {item}
                    </TextElementP>
                )
              })
            }
            </div>
            }

            {!(typeof text === 'string' || text instanceof String) &&
             <TextElementP className={className}>
                {text}
            </TextElementP>
            }
            </div>
        }

         {(element  == 'span') &&
            <TextElementSpan className={className} onClick={onClick}>
                {text}
            </TextElementSpan>
        }
        </ContainerElement>

    );
}

export default TextElement;

const ContainerElement = styled.div`
    display: contents;
`;

const TextElementP = styled.p`
    &.label-1{
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;  
        letter-spacing: 1px;
        margin-block-start: 0;
    }
    &.body-1{
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;  
        letter-spacing: 0px;
        margin-block-end: 0;
        margin-block-start: 0;
    }
    &.body-2{
        font-weight: normal;
        font-size: 14px;
        line-height: 24px;  
        letter-spacing: 0px;
        margin-block-end: 0;
        margin-block-start: 0;
    }
    &.caption {
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 24px;
        letter-spacing: 0.25px;
        margin-block-end: 0;
        margin-block-start: 0;
    }
    &.bold{
        font-weight: bold; 
    }
    &.uppercase{
        text-transform: uppercase;
    }
    &.light{
        color: var(--font-dark);
    }
    &.dark{
        color: var(--font-white);
    }
    &.center{
        text-align: center;
    }
`;



const TextElementSpan = styled.span`
    &.label-1{
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;  
        letter-spacing: 1px;
        margin-block-start: 0;
    }
    &.body-1{
        font-weight: normal;
        font-size: 16px;
        line-height: 14px;  
        letter-spacing: 0px;
        margin-block-start: 0;
    }
    &.body-1{
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;  
        letter-spacing: 0px;
        margin-block-start: 0;
    }
    &.caption {
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 20px;
        letter-spacing: 0.25px;
        margin-block-end: 0;
    }
    &.bold{
        font-weight: bold; 
    }
    &.uppercase{
        text-transform: uppercase;
    }
    &.light{
        color: var(--font-dark);
    }
    &.dark{
        color: var(--font-white);
    }
    &.center{
        text-align: center;
    }
`;
