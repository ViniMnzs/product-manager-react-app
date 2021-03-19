import styled from 'styled-components';
import { ReactComponent as LogoPf } from '../../assets/images/pf.svg';
import { colors } from '../../assets/utils/colors';

export const Container = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.w1};
    color: black;
    border-radius: 20px;
    padding-bottom: 5%;
    margin-bottom: 20%;
    flex-wrap: wrap;
    
    * { 
        background-color: transparent;
    }

    @media screen and (max-width: 812px){
        height: auto;
    }

    p {
        line-height: 30px;
    }
`;

export const Logo = styled(LogoPf)`
    fill: ${colors.w1};
    width: 50px;
    height: 50%;
`;

export const SubContainer = styled.div`
    width: 30%;
    padding-top: 5%;
    display: flex;
    justify-content:flex-end;
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
    padding-right: 20%;

    @media screen and (max-width: 650px){
        font-size: 15px;
        padding-bottom: 15%;
    }
`;

export const BackTitle = styled.span`
    position: absolute;
    font-size: 100px;
    font-weight: bold;
    color: ${colors.backtitle};

    @media screen and (max-width: 650px){
        font-size: 40px;
    }
`;

export const Banner = styled.div`
    background-color: black !important;
    display: flex;
    flex-wrap: wrap;
    border-radius: 20px;
    width: 40%;
    height: 280px;
    padding: 5%;
    position: relative;
    bottom: 150px;

    *{
        color: white;
        width: 100%;
        text-align: center;
    }
    span { font-size: 12px; };

    @media screen and (max-width: 650px){
        width: 100%;
        padding: 10%;
        bottom: 0;
    }
`;

export const Line = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    margin-bottom: 5%;
`;

export const Row = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    @media screen and (max-width: 650px){
        flex-wrap: wrap;
    }
`;

export const Column = styled.div`
    width: 20%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    margin-top: 5%;
`;

export const Text = styled.p`
    text-align: left;
    font-size: 12px;
    line-height: 25px;
    padding-left: 1%;

    @media screen and (max-width: 650px){
        width: 100%;
    }
`;

export const Button = styled.button`
    width: 50%;
    height: 30px;
    background-color: ${colors.orange};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor:pointer;
    outline: 0;
    :hover { background-color: ${colors.orange_hover}; };
`;

export const Strong = styled.strong`
    margin-bottom: 5%;
`;

export const Span = styled.span`
    margin-top: 5%;
    font-size: 12px;
`;

export const LogoContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
