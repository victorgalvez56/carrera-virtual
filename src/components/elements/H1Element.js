import React from 'react'
import styled from 'styled-components'

function H1Element({ text, bold, theme, center, clearBoth, topText }){
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
    if(topText){
        className = className + ' enable-toptext';
    }
    return(
        <H1ElementDiv>
            {topText && <div className="h1-toptext center">{topText}</div>}
            <h1 className={className}>{text}</h1>
        </H1ElementDiv>
    );
}

export default H1Element;

const H1ElementDiv = styled.div`
    .h1-toptext{
        color: #BDBDBD;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        margin-top:10px;
        align-items: center;
        text-align: center;
        letter-spacing: 0.245em;
        padding: 10px;
        text-transform: uppercase;
    }

    h1.enable-toptext{
        margin-top:0px;
    }

    h1{
        font-weight: normal;
        font-size: 32px;
        line-height: 40px; 
        letter-spacing: -0.5px; 
        position: relative;
    }
    h1.bold{
        font-weight: bold; 
    }
    h1.light{
        color: var(--font-dark);
    }
    h1.light-red{
        color: var(--font-red);
    }
    h1.dark{
        color: var(--font-white);
    }
    h1.center{
        text-align: center;
    }
    h1.clearBoth{
        clear: both;
    }
`;