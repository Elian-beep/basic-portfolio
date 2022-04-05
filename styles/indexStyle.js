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
    justify-content: space-around;
    display: flex;
    align-items: center;
    padding: 20px;

    @media (max-width: 600px){ //**Se for menor que 600px
        padding: 5px;
    }

    @media (max-width: 760px){ //**Se for menor que 760px
        flex-direction: column-reverse; //**Organiza os elementos um abaixo do outro
    }
`;

//Componente estilizado INFOS, que terá os elementos introdutórias
export const Infos = styled.div`
    text-align: start;
    width: 50%; //**Vai ocupar a primeira metade da tela
    display: grid; //**Seus elementos estarão organizados entre os blocos de colunas e linhas grid

    @media(mas-width: 760px){ //**Se for menor que 760px
        font-size: 25px;
    }
`;

//Componente estilizado NAME, que terá o nome e saudação
export const Name = styled.span`
    font-size: 40px;
    font-weight: 500;

    @media(max-width: 760px){//**Se for menor que 760px
        font-size: 25px;
    }
`; 

//Componente estilizado FUNCTION, que terá função (trabalho prestado)
export const Function = styled.span`
    color: lightgray;
    margin-bottom: 10px;
`; 

//Componente estilizado INTRO, Informações necessárias para o assunto do portifólio (menos o avatar)
export const Intro = styled.span`
    color: lightgray;
    text-align: justify;

    @media(max-width: 760px){
        font-size: 15px;
    }
`; 

//Componente estilizado LINK-PROJECTS, Botão que direciona para a area de projetos no github
export const LinkProjects = styled.button`
    width: 10em;
    padding: 10px;
    display: flex;
    justify-content: space-around; //**Entre o texto do btn e o icon de seta
    margin-top: 20px;
    font-weight: bold;

    svg{
        font-size: 20px;
    }
`; 

//Componente estilizado LOGO, imagem do avatar
export const Logo = styled.div`
    width: 50% //**Vai ocupar a segunda metade da tela
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 25em;
        height: 25em;
    }

    @media(max-width: 760px){ //**Se for menor que 760px
        width: 90%; //**Vai ocupar maior parte da primeira parte da tela
    }

    @media(max-width: 600px){ //**Se for menor que 600px

        img{ //**Diminuir o tamnho da imagem
            width: 18rem;
            height: 18rem;
        }

    }
`; 

export const Img = styled.img``;