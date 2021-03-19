/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';
import { colors } from '../utils/colors';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        border: 0;
        box-sizing: border-box;
        background-color: ${colors.bgcolor};
        color: ${colors.B2};
    }

    *, input, button {
        font-family: 'Product Sans', sans-serif;
    }
`;
