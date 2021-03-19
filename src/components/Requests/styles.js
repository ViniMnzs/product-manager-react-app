import styled from 'styled-components';
import { ReactComponent as Mail } from '../../assets/images/mail.svg';
import { ReactComponent as MiniMail } from '../../assets/images/minimail.svg';
// import { colors } from '../../assets/utils/colors';

export const Container = styled.div`
    width: 100%;
    height: 50vh;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 20%;
    * {
        color: white;
        text-align: left;
        margin-bottom: 5%;
        background-color: transparent;
    }
`;

export const SubContainer = styled.div`
    width: 50%;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding-left: 10%;

    p {
        font-size: 16px;
    }
    span {
        font-size: 12px;
    }

    @media screen and (max-width:600px){
        p { font-size: 12px; };
        span { font-size: 12px; };
        h1: { font-size: 16px; };
    }
`;

export const Input = styled.input`
    width: 50%;
    height: 10%;
    background: #FFFFFF26;
    border-radius: 16px;
    padding-left: 5%;
    color: #E5E5E5;

    @media screen and (max-width:600px){
        width: 100%;
    }
`;

export const Line = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;

    @media screen and (max-width:600px){
        align-items: flex-start;
    }
`;

export const MailIcon = styled(Mail)`
    width: 30%;
    position: absolute;
    opacity: 0.8;
`;

export const MiniMailIcon = styled(MiniMail)`
    stroke: white;
    position: relative;
    left: 22%;
    width: 30%;
    z-index: 999;
`;
