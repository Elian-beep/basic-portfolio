import styled from 'styled-components';

//Componente estilizado CONTAINER, que acolherá todos os outroa componentes
export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 100px); //**Irá ocupar 100vh da tela ignorando os 100px do header
`;

//Componente estilizado CONTENT, que controlará os elementos específicos dentro do CONTAINER
export const Content = styled.div`
    width: 1120px;
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    padding: 20px;

    @media(max-width: 600px){ //**Se for menor que 600px
        padding: 5px;
    }
`;

//Componente estilizado AREA-EXPOSITION, Area de exibição dos cards
export const AreaExposition = styled.div`
    overflow-x: auto; //**Automatizando o tamanho das informações do repositorio dentro da caixa individual
    height: inherit;
    gap: 20px;

    &::-webkit-scrollbar{ //**Barra geral de fundo do scroolbar
        width: 5px;
        border-radius: 10px;
        background-color: #1C1C1C;
    }

    &::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background-color: #363636;
    }
`;

//AREA DA ESTILIZAÇÃO DO CARD

//Componente estilizado AREA-EXPOSITION, Area de exibição dos cards
export const Card = styled.div`
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 2px 23px #26395338;
    width: 500px;
    margin: 20px 10px;

    @media(max-width: 600px){
        width: 400px;
    }
`;

//Componente estilizado AREA-EXPOSITION, Area de exibição dos cards
export const TopCard = styled.div`
    padding: 20px;
    padding-top: 0px;
`;

//Componente estilizado AREA-EXPOSITION, Area de exibição dos cards
export const Title = styled.h2`
    color: #2b3d59;
`;

//Componente estilizado AREA-EXPOSITION, Area de exibição dos cards
export const SecondText = styled.span`
    color: #828fa1;
`;

//Componente estilizado AREA-EXPOSITION, Area de exibição dos cards
export const MediaCard = styled.div`
    img{
        height: 350px;
        width: 100%;
    }
`;

//Componente estilizado AREA-EXPOSITION, Area de exibição dos cards
export const BottomCard = styled.div`
    padding: 20px;
`;

//Componente estilizado AREA-EXPOSITION, Area de exibição dos cards
export const BottomText = styled.p`
    color: #445b73;
`;

//Componente estilizado AREA-EXPOSITION, Area de exibição dos cards
export const ActionsCard = styled.div`
`;

//Componente estilizado AREA-EXPOSITION, Area de exibição dos cards
export const Actions = styled.button`
    background: none;
    border: none;
    color: purple;
`;