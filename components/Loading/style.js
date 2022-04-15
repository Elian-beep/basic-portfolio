import styled from 'styled-components';

export const AreaLoading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 100px); //**Irá ocupar 100vh da tela ignorando os 100px do header
`;

export const ContentLoading = styled.div`
    @media(max-width: 600px){ //**Se for menor que 600px
        padding: 5px;
        width: 1120px;
        height: 100%;

        justify-content: center;
        display: flex;
        align-items: center;
    }
`;