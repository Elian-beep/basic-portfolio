import React from "react";
import { BsInstagram, BsGithub, BsLinkedin, BsWrench, BsFillFolderSymlinkFill } from "react-icons/bs";

import { Container, Content, Mid, Session, SociaisBtn, SociaisBox, TextInfo } from './style';

export default function Footer() {
    return (
        <Container>
            <Content>
                
                <Session>
                    <TextInfo>Desenvolvido por: Elian Batista</TextInfo>
                    <BsWrench></BsWrench>
                </Session>

                <Session>

                    <SociaisBox>

                        <SociaisBtn href="https://www.instagram.com/e_lianb/">
                            <TextInfo>@e_lianb <BsInstagram></BsInstagram></TextInfo>
                        </SociaisBtn>

                        <Mid>
                            <SociaisBtn href="https://github.com/Elian-beep">
                                <TextInfo>Elian-beep <BsGithub></BsGithub></TextInfo>
                            </SociaisBtn>
                        </Mid>

                        <SociaisBtn href="linkedin.com/in/elian-batista-2b5865237 ">
                            <TextInfo>Elian <BsLinkedin></BsLinkedin></TextInfo>
                        </SociaisBtn>

                    </SociaisBox>
                </Session>

            </Content>
        </Container>
    );
}