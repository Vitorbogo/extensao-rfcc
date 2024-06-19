import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px; /* Espaçamento para o conteúdo */
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Header = styled.div``

export const Img = styled.img``

export const Body = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & p {
    margin-top: 20px;
  }

  & ul {
    margin-bottom: 0;
  }

  & a {
    text-decoration: none;
    transition: 0.3s ease-in-out;
  }

  & a:hover {
    color: pink;
  }
`

export const GridWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const ColumnOne = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`
export const ColumnTwo = styled.div`
  display: flex;
  width: 100%;
`

export const ColumnOneSection = styled.div`
  display: flex;
  width: 50%;
`
export const ColumnTwoSection = styled.div`
  display: flex;
  width: 50%;
`
