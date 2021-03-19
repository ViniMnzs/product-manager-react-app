import styled from 'styled-components';
import { colors } from '../../assets/utils/colors';

export const Container = styled.div`
    width: 80%;
    height: auto;
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
    align-items: flex-start;
    flex-direction: column;
    line-height: 50px;

    h3 {
        color: ${colors.C8};
    }
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
    height: 50px;
    background-color: ${colors.orange};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    cursor:pointer;
    outline: 0;
    :hover { background-color: ${colors.orange_hover}; };

    @media screen and (max-width: 650px){
        width: 90%;
        margin-bottom: 5%;
    }
`;

export const Logo = styled.img`
    width: 400px;
    height: 400px;
    margin-left: 5%;

    @media screen and (max-width: 650px){
        width: 90%;
        height: 200px;
    }
`;
