import styled from 'styled-components';
import { colors } from '../../assets/utils/colors';

export const Container = styled.div`
    width: 80%;
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

export const Banner = styled.div`
    background-color: black !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    border-radius: 20px;
    width: 40%;
    height: 280px;
    padding: 5%;
    *{
        color: white;
        width: 100%;
        text-align: center;
    }
    span { font-size: 12px; };

    @media screen and (max-width: 650px){
        width: 100%;
    }
`;

export const Line = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 5%;
`;

export const Row = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 10%;

    @media screen and (max-width: 650px){
        flex-wrap: wrap;
    }
`;

export const Column = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
    text-align: center;
`;
