import styled from 'styled-components';

export const Form = styled.form`
    flex-grow: 2;
    box-shadow:  0 0 4px rgba(0,0,0, 0.3);
    z-index: 1;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 12px 40px;
`;

export const TextArea = styled.textarea`
    margin-top: 8px;
    padding: 4px;
    border:  none;
    background-color: var(--fundo-detalhes);
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 100;
`;

export const Button = styled.button`
    margin-top: 8px;
    padding: 4px;
    border:  none;
    align-self: flex-end;
    width: 30%;
    background-color: var(--secundaria);
    color:white;
    font-weight: 400;

    &:active {
        background-color: var(--secundaria-ativa);
    }
`;