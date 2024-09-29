//yarn add styled-components precisa instlar o pacote
import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 1px solid #CDCDCD;
    background-color: #00AAFF;
    color: #FFFFFF;
    font-size: 24px;
    font-weigth: 700;
    flex: 1;

    &:hover {
        opacity: 0.6;
    }
`