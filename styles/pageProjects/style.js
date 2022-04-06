import styled from "styled-components";

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

//Componente estilizado UL, que terá a lista de repositórios
export const Ul = styled.ul`
    overflow-x: auto; //**Automatizando o tamanho das informações do repositorio dentro da caixa individual
    height: inherit;

    &::-webkit-scrollbar{ //**Barra geral de fundo do scroolbar
        width: 12px;
        border-radius: 10px;
        background-color: whitesmoke;
    }

    &::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background-color: darkgray;
    }
`;

export const Li = styled.li`
    display: flex;
    flex-direction: column;
    text-align: start;
    word-break: break-word; //**A quebra de linha será feita respeitando o limite da caixa
    margin: 10px 10px 20px;
    box-shadow: 1px 1px 1px 2px gray;
    gap: 5px; //**Espaçamento entre eles
    border-radius: 10px;
    padding: 10px;

    @media(max-width: 760px){ //**Se for menor que 760px
        font-size: 13px;
    }
`;

export const TitleProject = styled.strong``;

export const Url = styled.span``;

export const Created_at = styled.span``;

export const LinkUrl = styled.a``;