import React from 'react'
import styled from 'styled-components'

function H2Element({ text, bold, theme, center, clearBoth, align, noMargin }){
    var className = '';
    if(bold){
        className = className + ' bold';
    }
    if(center){
        className = className + ' center';
    }
    if(clearBoth){
        className = className + ' clearBoth';
    }
    if(align){
        className = className + ' ' + align;
    }
    if(noMargin){
        className = className + ' noMargin';
    }
    className = className + ' ' + theme;
    return(
        <H2ElementDiv>
            <h2 className={className}>{text}</h2>
        </H2ElementDiv>
    );
}

export default H2Element;

const H2ElementDiv = styled.div`
    h2{
        font-weight: normal;
        font-size: 24px;
        line-height: 32px;  
        letter-spacing: -0.25px;
        position: relative;
        margin: 1rem 0;
    }
    h2.noMargin{
        margin: 0px;
    }
    h2.bold{
        font-weight: bold; 
    }
    h2.light{
        color: var(--font-dark);
    }
    h2.light-red{
        color: var(--font-red);
    }
    h2.dark{
        color: var(--font-white);
    }
    h2.center{
        text-align: center;
    }
    h2.left{
        text-align: left;
    }
    h2.right{
        text-align: right;
    }
    h2.clearBoth{
        clear: both;
    }
`;