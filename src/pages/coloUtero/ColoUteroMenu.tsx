import { Link } from 'react-router-dom'
import { Container, Header, MenuWrapper, Menu, Option } from './styles'
import AppLayout from '../../components/appLayout'

export default function ColoUteroMenu() {
  return (
    <AppLayout title='Câncer de colo de útero'>
      <Container>
        <Header>Câncer de colo de útero</Header>
        <MenuWrapper>
          <Link to='/cancer/oque-e'>
            <Menu>
              <Option>O que é?</Option>
            </Menu>
          </Link>
          <Link to='/cancer/causa'>
            <Menu>
              <Option>Causa</Option>
            </Menu>
          </Link>
          <Menu>
            <Option>Sinais e Sintomas</Option>
          </Menu>
          <Menu>
            <Option>Orientação para o exame</Option>
          </Menu>
          <Menu>
            <Option>Risco</Option>
          </Menu>
          <Menu>
            <Option>O que é o preventivo?</Option>
          </Menu>
          <Menu>
            <Option>Prevenção</Option>
          </Menu>
        </MenuWrapper>
      </Container>
    </AppLayout>
  )
}
