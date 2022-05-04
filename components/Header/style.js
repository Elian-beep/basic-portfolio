import styled from 'styled-components';

//Componente estilizado CONTAINER, que acolherá todos os outroa componentes
export const Container = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid white;
    background-color: #121214;
    z-index: 999; //**Para sobrepor qualquer outro elemento

    gap: 10px;
    
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

//Componente estilizado CONTENT-TITLE, Area que controla todos os titulos e subtitulos agrupados no Header
export const ContentTitle = styled.div`
    text-align: end;
`;

//Componente estilizado TITLE, Titulo principal do Header
export const Title = styled.div`
    font-size: 30px;
`;

//Componente estilizado SUBTITLE, um span abaixo do titulo principal dentro do contenttitle
export const SubTitle = styled.span``;





//Componente estilizado NAVLINKS, Items do menu
export const NavLinks = styled.nav`
    display: flex;
    gap: 20px;  //**Espaçamento entre os elementos

    @media (max-width: 560px){ //**Quando o tamanho da tela for menos que 560px
        flex-direction: column;
        background-color: #161616;
        position: fixed;
        height: 100%;

        gap: 0px;
        top: 0px;
        right: 0px;
        width: 60%; //**Para os items de menu nao ocuparem tda a tela
        right: ${props => props.sidebar ? '0' : '-100%'};
        transition: 0.5s;

        a{
            margin-top: 100px;
            display: flex;
            align-items: center;
            justify-content: space-around;
        }
    }
`;

//Componente estilizado ANCORA, uma ancora (a) que será item de menu da navbar
export const Ancora = styled.a`
    font-size: 20px;
    height: 100px;
    transition: 0.3s;

    text-decoration: none;
    outline: none;
    color: #FFF;

    &.active{ //** Quando a pagina em questao for da ancora clicada
        border-bottom: 1px solid white;
        margin-bottom: 1em;
    }

    @media (min-width: 560px){
        align-items: center;
        display: flex;
        padding: 0px 10px;
    }
`;

//Componente estilizado MENU, servirá como controle de exibição dos itens de menu dependendo do tamanho da tela
export const Menu = styled.div`
    font-size: 30px;
    display: none;
    cursor: pointer;

    @media (max-width: 560px){
        display: flex;
    }
`;

//Componente estilizado CLOSE-SIDE-BAR, botao para fechar/abrir o menu coluna
export const CloseSidebar = styled.div`
    font-size: 30px;
    right: 15px;
    top: 35px;
    position: absolute;
    display: none;
    cursor: pointer;

    @media (max-width: 560px){
        display: flex;
    }
`;

//----------------------AREA PARA O BTN DE MUDAR O TEMA

//Componente estilizado AreaSwitchTheme, area que irá conter o btn de mudar o tema
export const AreaSwitchTheme = styled.div`
    position: relative;
    bottom: -3rem;
    width: 7rem;
`;

//Componente estilizado InputCheckBox, botão que irá mudar o tema
export const InputCheckBox = styled.input`
    &#toggle{
        display: none;
    }

    &#toggle:checked + .button::after{
        content: url('/images/sun-regular.svg');
        background-color: #e7b51d;
        transform: translateX(2.5rem) rotate(360deg);
    }
`;

//Componente estilizado ToggleBar, barra de rolagem do icone de mudar o tema
export const ToggleBar = styled.label`
    display: none;

    &.button{
        display: inline-block;
        width: 4rem;
        height: 1rem;
        background: #fff;
        border-radius: 30px;
        position: relative;
        cursor: pointer;
    }

    &.button::after{
        content: url('/images/moon-regular.svg');
        width: 1.5rem;
        height: 1.5rem;
        background-color: #0053e3;
        border: 2px solid #fff;
        border-radius: 50%;
        box-shadow: 0 0 5px rgba(0, 0, 0, .25);
        position: absolute;
        top: -6px;
        left: 0;
        place-content: center;
        line-height: 0;
        transition: background-color 0.3s, transform 0.3s ease-in;
    }
`;