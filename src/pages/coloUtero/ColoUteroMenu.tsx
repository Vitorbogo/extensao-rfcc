import { Link, useHistory } from 'react-router-dom'
import { Container, Header, MenuWrapper, Menu, Option } from './styles'
import AppLayout from '../../components/appLayout'

export default function ColoUteroMenu() {
  const history = useHistory()

  return (
    <AppLayout title='Câncer de colo de útero' history={history}>
      <Container>
        <Header>Câncer de colo de útero</Header>
        <MenuWrapper>
          <Link to='/cancer/colo-utero/oque-e'>
            <Menu>
              <Option>O que é?</Option>
            </Menu>
          </Link>

          <Link to='/cancer/colo-utero/causa'>
            <Menu>
              <Option>Causa</Option>
            </Menu>
          </Link>

          <Link to='/cancer/colo-utero/sinais'>
          <Menu>
            <Option>Sinais e Sintomas</Option>
          </Menu>
          </Link>

          <Link to='/cancer/colo-utero/orientacao'>
          <Menu>
            <Option>Orientação para o exame</Option>
          </Menu>
          </Link>

          <Link to='/cancer/colo-utero/risco'>
          <Menu>
            <Option>Risco</Option>
          </Menu>
          </Link>

          <Link to='/cancer/colo-utero/preventivo'>
          <Menu>
            <Option>O que é o preventivo?</Option>
          </Menu>
          </Link>

          <Link to='/cancer/colo-utero/prevencao'>
          <Menu>
            <Option>Prevenção</Option>
          </Menu>
          </Link>

        </MenuWrapper>
      </Container>
    </AppLayout>
  )
}
