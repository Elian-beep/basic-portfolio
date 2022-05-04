import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa';
import { Container, Content, Function, Img, Infos, Intro, LinkProjects, Logo, Name } from '../../styles/indexStyle'

export default function Home() {
  return (
    <Container>
      <Content>

        <Infos>
          <Name>Olá, sou Elian Batista</Name>
          <Function>Desenvolvedor Front End</Function>

          <Intro>Cursando Ciência da Computação, formado como Técnico em Informática, Conhecimento sobre
            as técnologias de desenvolvimento front end (HTML, CSS, JS, Bootstrap e React).
          </Intro>

          <Link href="projects">
            <LinkProjects>PROJETOS <FaArrowRight /> </LinkProjects>
          </Link>
        </Infos>

        <Logo>
          <Img src='/images/Avatar-Elian.svg' />
        </Logo>

      </Content>
    </Container>
  )
}