import React from 'react'
import AppLayout from '../../components/appLayout'
import { Body, Container, Description, Header, Img } from './style'
import { useHistory } from 'react-router-dom'


const About: React.FC = () => {

  const history = useHistory()

  return (
    <AppLayout title='Sobre Nós' history={history}>
      <Container>
        <Header>
          <Img src='/assets/images/logo_rfcc.png' width={'120px'}></Img>
        </Header>

        <Body>
          <Description>
            A RFCC itapema é uma instituição não governamental, sem fins lucrativos, cujo objetivo é
            prevenir o câncer de colo de útero, realizar diagnóstico precoce do câncer de mama e
            apoiar pacientes mastectomizadas. A Rede Feminina de itapema teve início em 07 de agosto
            de 2001. Elegeu a primeira diretoria com as senhoras: Dra. Gladis Deisvaldi Pitol, (in
            memoriam) Cleia Rocha Haenachen, Eliane Lobato, juntamente com algumas pessoas da
            cidade. com muita dedicação e comprometimento no intuito de prestar serviço em prol da
            saúde e bem estar das mulheres itapemenses, Iniciou seus trabalhos junto ao posto de
            saúde básica do bairro, após algum tempo teve início a construção do prédio para sede
            própria, a partir de 30 de novembro de 2010 foi inaugurada sua sede e desde então vem
            contando, ao longo dos anos, com o trabalho dedicado de inúmeras voluntárias que assumem
            um compromisso pela vida na busca incessante pela saúde e valorização da mulher.
          </Description>
        </Body>
      </Container>
    </AppLayout>
  )
}

export default About
