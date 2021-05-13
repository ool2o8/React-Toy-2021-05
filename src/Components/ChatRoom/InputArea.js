import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow, media } from '../../lib/styleUtil';
import { IoIosSend } from "react-icons/io";
import { BiCapsule } from "react-icons/bi";
// 하단 고정, 그림자
const Positioner = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 0px;
    width: 100%;
`;

// 흰 배경, 내용 중간 정렬
const WhiteBackground = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    height: auto;
`;

const HeaderContents = styled.div`
    width: 1200px;
    height: 55px;
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-right: 1rem;
    padding-left: 1rem;
    ${media.wide`
        width: 992px;
    `}

    ${media.tablet`
        width: 100%;
    `}
`;

// 중간 여백
const Spacer = styled.div`
    flex-grow: 1;
`;

// 하단 그래디언트 테두리
const GradientBorder = styled.div`
    height: 3px;
    background: linear-gradient(to right, ${oc.teal[6]}, ${oc.cyan[5]});
`;

const ChatRoomButton = styled.div`
        margin-top: 0.2rem;
        padding-top: 0.4rem;
        padding-bottom: 0.1rem;

        width: 43px;

        background: white;

        border-radius: 10px;
        boder-color: ${oc.teal[5]};

        text-align: center;
        font-size: 1rem;
        font-weight: 500;

        letter-spacing: 3px;
        font-family: 'Rajdhani';

        cursor: pointer;
        user-select: none;
        transition: .2s all;
        
        &:hover {
        background: ${oc.teal[1]};
        ${shadow(1)}
    }

    &:active {
        background: ${oc.teal[5]};
    }
    `;
const Input = styled.input`
    width: 100%;
    border: 1px solid ${oc.teal[3]};
    margin-left: 10px;
    margin-right:10px;
    outline: none;
    border-radius: 10px;
    line-height: 2.5rem;
    font-size: 1.2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
`;
const Header = ({children}) => {
    
    return (
        <Positioner>
            <WhiteBackground>
                <HeaderContents>
                    <Spacer/>
                    <ChatRoomButton><BiCapsule size="30" color="#20c997"/></ChatRoomButton>
                    <Input></Input>
                    <ChatRoomButton><IoIosSend size="30" color="#20c997"/></ChatRoomButton>
                </HeaderContents>
            </WhiteBackground>
            <GradientBorder/>
        </Positioner>
    );
};

export default Header;