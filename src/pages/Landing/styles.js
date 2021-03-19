import styled from 'styled-components';
import { colors } from '../../assets/utils/colors';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

export const Subcontainer = styled.div`
    width: 100%;
    height: 80vh;
    background-color: ${colors.B2};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
`;
