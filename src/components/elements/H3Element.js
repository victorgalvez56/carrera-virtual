import React from 'react'
import styled from 'styled-components'

function H3Element({ text, bold, theme, center, clearBoth }){
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
    className = className + ' ' + theme;
    return(
        <H3ElementDiv>
            <h3 className={className}>{text}</h3>
        </H3ElementDiv>
    );
}

export default H3Element;

const H3ElementDiv = styled.div`
    h3{
        font-weight: normal;
        font-size: 18px;
        line-height: 32px;  
        letter-spacing: -0.25px;
        position: relative;
        margin: 0;
        margin-bottom: 5px;
    }
    h3.bold{
        font-weight: bold; 
    }
    h3.light{
        color: var(--font-dark);
    }
    h3.dark{
        color: var(--font-white);
    }
    h3.center{
        text-align: center;
    }
    h3.clearBoth{
        clear: both;
    }
`;