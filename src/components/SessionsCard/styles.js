import styled from 'styled-components';
import { ReactComponent as LogoPf } from '../../assets/images/pfcardexp.svg';
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

export const Logo = styled(LogoPf)`
    height: 127px !important;
    width: 127px;
    border-radius: 50px;
`;

export const Line = styled.div`
    // background-color: 
    border-left: 6px solid black;
    display: flex;
    width: 80%;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    * { font-size: 20px; }

    @media screen and (min-width: 501px) and (max-width: 812px){
        width: 60vw;
        padding-left: 10px;
    }

    @media screen and (max-width: 500px){
        width: 70vw;
        padding-left: 10px;
    }
`;

export const SubLine = styled.div`
    // background-color: 
    display: flex;
    width: 80%;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    border-left: 5px solid ${colors.WF8};

    * { font-size: 20px; }

    @media screen and (min-width: 501px) and (max-width: 812px){
        width: 60vw;
        padding-left: 10px;
    }

    @media screen and (max-width: 500px){
        width: 70vw;
        padding-left: 10px;
    }
`;

export const LabelContainer = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 12px;
    margin-left: 2%;
    padding-right: 5%;
    background-color: ${colors.WF8};
`;

export const Label = styled.div`
    display: flex;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
    font-size: 16px;
    padding-left: 1%;

    @media screen and (max-width: 500px){
        font-size:12px;
    }
`;

export const TextContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 75%;

    @media screen and (max-width: 500px){
        margin-top: 5%;
        width: 90%;
    }
`;

export const Text = styled.p`
    text-align: left;
    font-size: 16px;
    line-height: 30px;
`;
