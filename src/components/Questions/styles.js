import styled from 'styled-components';
import { colors } from '../../assets/utils/colors';

export const Container = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: black;
    border-radius: 20px;
    flex-direction: column;
    padding-bottom: 5%;
    margin-bottom: 10%;
    * { 
        background-color: transparent;
        height: auto;
    }
`;

export const SubContainer = styled.div`
    width: 100%;
    padding-top: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5%;

    @media screen and (max-width: 500px){
        flex-direction: column;
        margin-top: 5%;
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

export const Collapse = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    background-color: ${colors.w1};
    border-radius: 50px;
    padding: 2%;
    font-size: 18px;
    margin: 2.5%;
    outline: 0;
    cursor: pointer;
    :hover {
        background-color:${colors.bgcolor};
    }

    @media screen and (max-width: 650px){
        width: 80vw;
        padding: 5%;
    }
`;
