import React from 'react'
import styled from 'styled-components'

function Display2Element({ text, bold, theme, center }){
    var className = '';
    if(bold){
        className = className + ' bold';
    }
    if(center){
        className = className + ' center';
    }
    className = className + ' ' + theme;
    return(
        <Display2ElementDiv>
            <h1 className={className}>{text}</h1>
        </Display2ElementDiv>
    );
}

export default Display2Element;

const Display2ElementDiv = styled.div`
    
    h1{
        font-weight: normal;
        font-size: 47px;
        line-height: 56px; 
        letter-spacing: -1px; 
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