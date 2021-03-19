import styled from 'styled-components';
import { ReactComponent as LogoPf } from '../../assets/images/pf.svg';
// import { colors } from '../../assets/utils/colors';

export const Container = styled.div`
    width: 100%;
    height: 30%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding-left: 10%;
    padding-right: 10%;

    * {
        background-color: transparent;
        font-size: 16px;
    }

    @media screen and (max-width:600px){
        justify-content: center;
        height: auto;
        padding-top: 10%;
    }
`;

export const IconsDiv = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width:600px){
        width: 100%;
    }
`;

export const Logo = styled(LogoPf)`
`;
