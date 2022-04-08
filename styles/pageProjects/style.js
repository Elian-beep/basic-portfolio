import styled from 'styled-components';

//Componente estilizado CONTAINER, que acolherá todos os outroa componentes
export const Container = styled.div`
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid white;
    background-color: #121214;
    
    //**Tentando fixar o Header
    position: -webkit-sticky; //** Necessário para funcionar no Safari
    position: sticky;
    top: 0;
`;

//Componente estilizado CONTENT, que definirá um limte vertical de espaço para os itens no Header
export const Content = styled.div`
    width: 1120px; //**O limite vertical
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;

    @media(max-width: 760px){
        flex-direction: column;
    }
`;

export const AreaExposition = styled.div`
    overflow-x: auto; //**Automatizando o tamanho das informações do repositorio dentro da caixa individual
    height: inherit;
`;