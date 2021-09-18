import React from 'react'
import styled from 'styled-components'

function Display1Element({ text, bold, theme, center }){
    var className = '';
    if(bold){
        className = className + ' bold';
    }
    if(center){
        className = className + ' center';
    }
    className = className + ' ' + theme;
    return(
        <Display1ElementDiv>
            <h1 className={className}>{text}</h1>
        </Display1ElementDiv>
    );
}

export default Display1Element;

const Display1ElementDiv = styled.div`
    h1{
        font-weight: normal;
        font-size: 80px;
        line-height: 88px; 
        letter-spacing: -2px; 
        margin: 0px;
        position: relative;
    }
    h1.bold{
        font-weight: bold; 
    }
    h1.light{
        color: var(--font-dark);
    }
    h1.dark{
        color: var(--font-white);
    }
    h1.center{
        text-align: center;
    }
`;