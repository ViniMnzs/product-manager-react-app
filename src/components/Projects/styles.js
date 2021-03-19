import styled from 'styled-components';
import { colors } from '../../assets/utils/colors';

export const Container = styled.div`
    width: 100%;
    height: auto;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 10%;
    * {
        text-align: left;
        margin-bottom: 5%;
        background-color: transparent;
    }

    @media screen and (max-width:600px){
        height: auto;
    }
`;

export const Row = styled.div`
width: 100%;
height: 80%;
background-color: transparent;
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: row;
flex-wrap: wrap;
margin-bottom: 10%;
* {
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
        width: 100%;
        align-items: center;
        padding-left: 0;
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

export const Page = styled.div`
    background-color: #C9C9C9;
    width:150px; 
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`;

export const GreyContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 350px;
    background-color: #C9C9C9;
    border-radius: 15px;

    @media screen and (max-width:600px){
        width: 100%;
    }
`;

export const WhiteContainer = styled.div`
    display: flex;
    margin-top: 70%;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 350px;
    background-color: white;
    border-radius: 15px;

    @media screen and (max-width:600px){
        width: 80%;
        height: 300px;
    }
`;

export const TitleContainer = styled.div`
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
