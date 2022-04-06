import styled from 'styled-components';

//Componente estilizado CONTAINER, que acolherá todos os outroa componentes
export const Container = styled.div`
    height: 90px;
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
`;

//Componente estilizado SOCIAIS-BOX, organizará os icones e textos das redes sociais
export const SociaisBox = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
`;

//Componente estilizado SOCIAIS-BTN, Botão que redirecionará para o link da rede social
export const SociaisBtn = styled.a`
    outline: none;
    text-decoration: none;
`;

//Componente estilizado TEXT-INFO, Titulos e labels informativos do rodape
export const TextInfo = styled.span`
    text-decoration: none;
    outline: none;
    color: white;
`;

//Componente estilizado MID, elemento do meio
export const Mid = styled.div`
    padding: 0 20px;
    border-left: 1px solid white;
    border-right: 1px solid white;
`;

//Componente estilizado SESSION, cada session terá as colunas de informações do rodape
export const Session = styled.div``;