import React from 'react';
import { Actions, ActionsCard, AreaExposition, BottomCard, BottomText, Card, Container, Content, MediaCard, SecondText, Title, TopCard } from '../../../styles/pageProjects/style';

export default function Projects() {
    return (
        <Container>
            <Content>
                <AreaExposition>
                    <Card>

                        <TopCard>
                            <Title>Titulo do Card</Title>
                            <SecondText>Exemplo de texto secundário</SecondText>
                        </TopCard>

                        <MediaCard>
                            <img src="/images/capa_projeto.jpg" alt="capa_projeto" />
                        </MediaCard>

                        <BottomCard>
                            <BottomText>Aqui é um exemplo de resumo de página ou do documneto que o card trata</BottomText>
                            <ActionsCard>
                                <Actions>Visitar Página</Actions>
                                <Actions>Ver no Github</Actions>
                            </ActionsCard>
                        </BottomCard>

                    </Card>

                    <Card>

                        <TopCard>
                            <Title>Titulo do Card</Title>
                            <SecondText>Exemplo de texto secundário</SecondText>
                        </TopCard>

                        <MediaCard>
                            <img src="/images/capa_projeto.jpg" alt="capa_projeto" />
                        </MediaCard>

                        <BottomCard>
                            <BottomText>Aqui é um exemplo de resumo de página ou do documneto que o card trata</BottomText>
                            <ActionsCard>
                                <Actions>Visitar Página</Actions>
                                <Actions>Ver no Github</Actions>
                            </ActionsCard>
                        </BottomCard>

                    </Card>

                    <Card>

                        <TopCard>
                            <Title>Titulo do Card</Title>
                            <SecondText>Exemplo de texto secundário</SecondText>
                        </TopCard>

                        <MediaCard>
                            <img src="/images/capa_projeto.jpg" alt="capa_projeto" />
                        </MediaCard>

                        <BottomCard>
                            <BottomText>Aqui é um exemplo de resumo de página ou do documneto que o card trata</BottomText>
                            <ActionsCard>
                                <Actions>Visitar Página</Actions>
                                <Actions>Ver no Github</Actions>
                            </ActionsCard>
                        </BottomCard>

                    </Card>

                    <Card>

                        <TopCard>
                            <Title>Titulo do Card</Title>
                            <SecondText>Exemplo de texto secundário</SecondText>
                        </TopCard>

                        <MediaCard>
                            <img src="/images/capa_projeto.jpg" alt="capa_projeto" />
                        </MediaCard>

                        <BottomCard>
                            <BottomText>Aqui é um exemplo de resumo de página ou do documneto que o card trata</BottomText>
                            <ActionsCard>
                                <Actions>Visitar Página</Actions>
                                <Actions>Ver no Github</Actions>
                            </ActionsCard>
                        </BottomCard>

                    </Card>
                </AreaExposition>
            </Content>
        </Container>
    );
}