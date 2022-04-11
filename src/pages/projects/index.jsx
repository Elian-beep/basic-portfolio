import React, { useEffect, useState } from 'react';
import { Actions, ActionsCard, AreaExposition, BottomCard, BottomText, Card, Container, Content, MediaCard, SecondText, Title, TopCard } from '../../../styles/pageProjects/style';

export default function Projects() {

    const [itemsApi, setItemsApi] = useState([]);

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

    return (
        <Container>
            <Content>
                <AreaExposition>
                    {itemsApi.map(item => (
                        <Card key={item.id}>
                            <TopCard>
                                <Title>{item.name.toUpperCase()}</Title>
                                <SecondText>Exemplo de texto secundário</SecondText>
                            </TopCard>

                            <MediaCard>
                                <img src={"https://raw.githubusercontent.com/Elian-beep/"+ item.name+ "/main/capa/capa.png"} alt="capa_projeto" />
                            </MediaCard>

                            <BottomCard>
                                <BottomText>{item.description}</BottomText>
                                <ActionsCard>
                                    <Actions>Visitar Página</Actions>
                                    <Actions>Ver no Github</Actions>
                                </ActionsCard>
                            </BottomCard>
                        </Card>
                    ))}

                </AreaExposition>
            </Content>
        </Container>
    );
}