import React, { useEffect, useState } from 'react';
import { Actions, ActionsCard, AreaExposition, BottomCard, BottomText, Card, Container, Content, Loading, MediaCard, Script, SecondText, Title, TopCard } from '../../../styles/pageProjects/style';

export default function Projects() {

    const [itemsApi, setItemsApi] = useState([]);
    let capa = '';

    useEffect(() => {
        let abortController = new AbortController();

        function getGitHubAPI() {
            fetch('https://api.github.com/users/Elian-beep/repos')
                .then(async res => {
                    if (!res.ok) {
                        throw new Error(res.status);
                    }

                    var data = await res.json();
                    setItemsApi(data);
                })
                .catch(e => console.log(e));
        }

        getGitHubAPI();

        return () => abortController.abort();
    }, []);

    function checkOnline(url, error, ok) {
        try {
            var scriptElem = document.createElement('script');
            scriptElem.type = 'text/javascript';
            scriptElem.onerror = function () { error(); };
            scriptElem.onload = function () { ok(); };
            scriptElem.src = url;
            document.getElementsByTagName("body")[0].appendChild(scriptElem);
        } catch (err) {
            error(err);
        }
    };

    return (
        <>
            <Container>
                <Content>
                    <AreaExposition>

                        {
                            itemsApi.map(item => (
                                capa = "https://raw.githubusercontent.com/Elian-beep/" + item.name + "/main/capa/capa.png",
                                <Card key={item.id}>
                                    <TopCard>
                                        <Title>{item.name.toUpperCase()}</Title>
                                        <SecondText>Data de Criação: {Intl.DateTimeFormat('pt-BR').format(new Date(item.created_at))}</SecondText>
                                    </TopCard>

                                    <MediaCard>
                                        <img src={capa} alt="capa_projeto" loading='lazy' />
                                    </MediaCard>

                                    <BottomCard>
                                        <BottomText>{item.description}</BottomText>
                                        <ActionsCard>

                                            <Actions href={item.homepage} target='_blank' >Visitar Página</Actions>
                                            <Actions href={item.html_url} target='_blank'>Ver no Github</Actions>
                                        </ActionsCard>
                                    </BottomCard>
                                </Card>
                            ))
                        }

                    </AreaExposition>
                </Content>

            </Container>
            <Loading>
                {itemsApi.length <= 0 &&
                    <div>
                        <img src="/images/loading.svg" alt="loading..." />
                    </div>
                }
            </Loading>
        </>

    );
}