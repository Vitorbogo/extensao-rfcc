import { Link } from "react-router-dom";
import { Container, Header, MenuWrapper, Menu, Option } from "./styles";

const ColoUteroMenu = () => {
    return (
        <Container>
            <Header>Câncer de colo de útero</Header>
            <MenuWrapper>
                <Link to={"/cancer/oque-e"} target="_blank">
                    <Menu>
                        <Option>O que é?</Option>
                    </Menu>
                </Link>
                <Link to={"/cancer/causa"} target="_blank">
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
    );
};

export default ColoUteroMenu;
