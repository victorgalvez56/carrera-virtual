import React from 'react'
import styled,{css} from 'styled-components'

const HrElementHr = styled.hr`
        ${css`
            background-color: transparent;
            border: 0px;
            border-bottom: 1px solid ${props => props.theme && props.theme === 'dark' ? '#252525' : '#c5c5c5'};
            width: 100%;
        `}
    `;

function HrElement({theme}){
    return(
        <HrElementHr theme={theme}/>
    );
}

export default HrElement;

