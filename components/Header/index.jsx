import React, { useState } from "react";
import { Ancora, AreaSwitchTheme, CloseSidebar, Container, Content, ContentTitle, InputCheckBox, Menu, NavLinks, SubTitle, Title, ToggleBar } from "./style";
import { FaBars, FaTimes, FaArrowCircleRight } from 'react-icons/fa';
import Link from "next/link";               //O link permite a navegação entre as rotas
import { useRouter } from "next/router";

export default function Header() {

    //--------------------------------------AREA DAS VARIAVEIS
    const [sidebar, setSidebar] = useState(false); //O sideBar iniciará oculto (0)
    const { asPath } = useRouter();

    const showSideBar = () => setSidebar(!sidebar); //A função modifica o valor do sidebar para o inverso de seu valor antigo (2)

    function activeLink(path) {
        return asPath === `/${path}` ? 'active' : ''; //O caminho (href) que estiver on, estará com seu respectivo ancora difernte (ativado)
    }

    return (
        <>
            <Container>
                <Content>

                    <ContentTitle>
                        <Title>
                            Elian Batista
                        </Title>
                        <SubTitle>
                            Portifólio Pessoal
                        </SubTitle>
                    </ContentTitle>

                    <Menu>
                        <FaBars onClick={showSideBar} /> {/* Ao clicar, ele modifica o valor do sidebar (1) */}
                    </Menu>

                    {/* Todo componente aqui tera a função de fechar o sidebar, pois cada ação nele fará o mesmo se ocultar */}
                    <NavLinks sidebar={sidebar}> {/* Passando o valor do sidebar para a condição de estilização do componente, que deicide se exibe ou não */}
                        <CloseSidebar onClick={showSideBar}> <FaTimes></FaTimes> </CloseSidebar>

                        <AreaSwitchTheme>
                            <InputCheckBox type="checkbox" id="toggle" />
                            <ToggleBar for="toggle" className="button" />
                        </AreaSwitchTheme>

                        <Link href="/">
                            <Ancora className={activeLink('')} onClick={showSideBar} >Home</Ancora>
                        </Link>

                        <Link href="projects">
                            <Ancora className={activeLink('projects')} onClick={showSideBar} >Projetos</Ancora>
                        </Link>

                        {/* <Link href="repos">
                            <Ancora className={activeLink('repos')} onClick={showSideBar} >Repositórios</Ancora>
                        </Link> */}

                        <Ancora href="https://prot-web-curriculo.vercel.app/" target='_blank' >Web Currículo <FaArrowCircleRight /></Ancora>



                    </NavLinks>



                </Content>

            </Container>
        </>
    );
}

