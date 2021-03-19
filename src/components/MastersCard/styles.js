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

export const Logo = styled.img`
    height: 150px;
    width: 150px;
    border-radius: 20px;
`;

export const Line = styled.div`
    // background-color: 
    display: flex;
    width: 90%;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;

    @media screen and (max-width: 650px){
        width: 100%;
        justify-content: center;
    }
`;
export const Card = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1%;

    @media screen and (max-width: 650px){
        width: 100%;
        justify-content: center;
    }
`;

export const Text = styled.p`
    text-align: center;
    font-size: 14px;
    line-height: 30px;
`;

export const Shadow = styled.div`
    background-color: transparent;
    border-radius: 20px;
    cursor: pointer;

    :hover {
        background-color: black;
        opacity: 0.1;
    }
`;
