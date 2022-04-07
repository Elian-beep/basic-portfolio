import React, { useState, useEffect } from "react";
import { Container, Content, Created_at, Description, Li, LinksGroup, LinkUrl, Path, Script, Svg, TitleProject, Ul, Url } from "../../../styles/pageProjects/style";

export default function Projects() {

    const [itemsApi, setItemsApi] = useState([]); //Os valores de itemsApi iniciaram array vazio, mas pode mudar sua renderização dependendo do set

    useEffect(() => {
        let abortController = new AbortController(); //Para decidir o fim da requisição

        function getGitHubAPI() { //Função da requisição de informações da conta no github
            fetch('https://api.github.com/users/Elian-beep/repos')
                .then(async res => { //Se a reuisição der certo

                    if (!res.ok) { //Se não encontrar as informações
                        throw new Error(res.status); //Armazenar um erro
                    }

                    var data = await res.json(); //Armazenar as informações em um json
                    setItemsApi(data); //Passar para a lista de items retiradas da api
                })
                .catch(e => console.log(e)); //Se der erro, exibir o erro no console
        }

        getGitHubAPI();

        return () => abortController.abort(); //Realizando a finalização da requisição

    }, []);

    return (
        <Container>
            <Content>
                <Ul>

                    {itemsApi.map(item => ( //O 'item' vai mapear cada elemento do json que contem as iformações dos repositorios
                        <Li key={item.id}>

                            <TitleProject> {item.name.toUpperCase()} </TitleProject>
                            <Created_at>Data de Criação: {Intl.DateTimeFormat('pt-BR').format(new Date(item.created_at))} </Created_at>
                            <Description>Descrição: {item.description}</Description>

                            <LinksGroup>
                                <LinkUrl href={item.homepage}>
                                    <Url>Acessar HomePage</Url>
                                </LinkUrl>

                                <LinkUrl href={item.html_url}>
                                    <Url>Ver no GitHub</Url>
                                </LinkUrl>
                            </LinksGroup>

                        </Li>
                    ))}

                </Ul>

                {itemsApi.length <= 0 &&
                    <div>
                        <img src="/images/loading.svg" alt="" />
                    </div>
                }

            </Content>
        </Container>
    );

}