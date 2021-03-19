import styled from 'styled-components';
import { ReactComponent as LogoPf } from '../../assets/images/pfcardexp.svg';
import { colors } from '../../assets/utils/colors';

export const Container = styled.div`
    width: 80%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.w1};
    color: black;
    border-radius: 20px;
    flex-direction: column;
    padding-bottom: 5%;
    margin-bottom: 20%;
    
    * { 
        background-color: transparent;
    }

    @media screen and (max-width: 812px){
        height: auto;
    }
`;

export const SubContainer = styled.div`
    width: 100%;
    padding-top: 5%;
    display: flex;
    justify-content:center;
    align-items: center;

    @media screen and (max-width: 500px){
        flex-direction: column;
        margin-top: 5%;
        margin-bottom: 5%;
    }
`;

export const Title = styled.span`
    z-index: 999;
    position: relative;
    font-size: 26px;
    font-weight: bold;

    @media screen and (max-width: 650px){
        font-size: 16px;
    }
`;

export const BackTitle = styled.span`
    position: absolute;
    font-size: 100px;
    font-weight: bold;
    text-align: left;
    color: ${colors.backtitle};

    @media screen and (max-width: 650px){
        font-size: 40px;
    }
`;

export const Logo = styled(LogoPf)`
    height: 281px;

    @media screen and (max-width: 500px){
        width: 90%;
    }
`;

export const Line = styled.div`
    border: 0.5px solid black;
    border-radius: 16px;
    display: flex;
    width: 60vw;
    height: 8vh;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    * { font-size: 16px; }

    @media screen and (min-width: 501px) and (max-width: 812px){
        width: 50vw;
    }

    @media screen and (max-width: 500px){
        width: 70vw;
        height: 10vh;
    }
`;

export const Button = styled.button`
    border-right: 0.5px solid black; 
    background-color: ${(props) => (props.last ? 'black' : 'transparent')};
    color: ${(props) => (props.last ? 'white' : 'black')};
    border-top-right-radius: ${(props) => (props.last ? '16px' : '0')};
    border-bottom-right-radius: ${(props) => (props.last ? '16px' : '0')};
    height: 100%;
    width: 100%;
    cursor: pointer;
    outline: 0;
`;

export const TextContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 50%;

    @media screen and (max-width: 500px){
        margin-top: 5%;
        width: 90%;
    }
`;

export const Text = styled.p`
    text-align: left;
    font-size: 20px;
    line-height: 30px;
`;
