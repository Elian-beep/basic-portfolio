import styled from 'styled-components';

//Componente estilizado CONTAINER, que acolherá todos os outroa componentes
export const Container = styled.div`
    @media (max-width: 600px) {
        display: flex;
        align-items: center;
        justify-content: center;
        height: calc(100vh - 100px); //**Irá ocupar 100vh da tela ignorando os 100px do header
    }
`;

//Componente estilizado CONTENT, que controlará os elementos específicos dentro do CONTAINER
export const Content = styled.div`

    justify-content: center;
    display: flex;
    align-items: center;
    
    @media(max-width: 600px){ //**Se for menor que 600px
        padding: 5px;
        width: 1120px;
        height: 100%;
    }
`;

export const Loading = styled.div`
    align-items: center;
    justify-content: center;
    height: calc(100vh - 100px); //**Irá ocupar 100vh da tela ignorando os 100px do header

    display: ${props => props.loading ? 'flex' : 'none'};
`;

//Componente estilizado AREA-EXPOSITION, Area de exibição dos cards
export const AreaExposition = styled.div`
    margin: 20px;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 600px 600px;
    place-items: center;

    

    @media (max-width: 600px) {
        margin: 0;
        display: flex;
        flex-direction: column;

        overflow-x: auto; //**Automatizando o tamanho das informações do repositorio dentro da caixa individual
        height: inherit;

        &::-webkit-scrollbar{ //**Barra geral de fundo do scroolbar
        width: 5px;
        border-radius: 10px;
        background-color: #1C1C1C;
        }

        &::-webkit-scrollbar-thumb{
            border-radius: 10px;
            background-color: #363636;
        }
    }

    
`;

//AREA DA ESTILIZAÇÃO DO CARD

//Componente estilizado AREA-EXPOSITION, Area de exibição dos cards
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
    word-break: break-word; //**A quebra de linha será feita respeitando o limite da caixa

    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 2px 23px #26395338;
    width: 500px;
    margin: 10px 10px;

    height: 85vh;

    @media(max-width: 600px){
        width: 370px;
    }
`;

//Componente estilizado AREA-EXPOSITION, Area de exibição dos cards
export const TopCard = styled.div`
    padding: 20px;
    padding-top: 0px;
`;

//Componente estilizado AREA-EXPOSITION, Area de exibição dos cards
export const Title = styled.h2`
    margin-top: 1em;
    color: #2b3d59;
`;

//Componente estilizado AREA-EXPOSITION, Area de exibição dos cards
export const SecondText = styled.span`
    color: #828fa1;
`;

//Componente estilizado AREA-EXPOSITION, Area de exibição dos cards
export const MediaCard = styled.div`
    img{
        height: 300px;
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
    display: flex;
    justify-content: space-between;
    margin-top: 0.5em;
`;

//Componente estilizado AREA-EXPOSITION, Area de exibição dos cards
export const Actions = styled.a`
    text-decoration: none;
    background: none;
    border: none;
    color: #2b3d59;
    padding: 4px;
    border-radius: 5px;
    border: 1px solid #2b3d59; 
`;

export const Script = styled.script``;