import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow, media } from '../../lib/styleUtil';

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${oc.teal[3]};
    z-index:-1;
`;
const ChatBackground = ({children}) =>{
    return(
        <Background>
            {children}
        </Background>

    )
}
export default ChatBackground;
