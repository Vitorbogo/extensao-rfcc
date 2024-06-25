import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import AppLayout from '../../components/appLayout';
import { useHistory } from 'react-router-dom';
import { FaCalendarAlt, FaRegNewspaper } from 'react-icons/fa';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const NewsContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  animation: ${fadeIn} 1s ease-in;
`;

const NewsItem = styled.div`
  background: #ffc0cb;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

// Definindo o tipo para NewsContent
interface NewsContentProps {
  isOpen: boolean;
}

const NewsContent = styled.div<NewsContentProps>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  padding: 20px;
  border-top: 1px solid #ddd;
  margin-top: 10px;
  color: #555;
`;

const NewsTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
`;

const NewsDate = styled.p`
  font-size: 14px;
  color: gray;
  display: flex;
  align-items: center;
`;

const NewsText = styled.p`
  font-size: 16px;
  color: #555;
`;

const NewsIcon = styled(FaRegNewspaper)`
  margin-right: 10px;
  color: #ff69b4;
`;

const DateIcon = styled(FaCalendarAlt)`
  margin-right: 5px;
  color: #ff69b4;
`;

const NewsScreen = () => {
  const history = useHistory();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const newsData = [
    {
      title: 'Juramento 2023',
      date: '15 de agosto de 2023',
      content: 'Cerimônia de Juramento da RFCC de Itapema. Trabalho voluntário é um processo de autoconhecimento, de descobrir quem é você em relação ao outro...',
      imageUrl: 'https://www.redefemininaitapema.com.br/imagens/juramento-2023.jpg'
    },
    {
      title: 'Campanha Outubro Rosa - Palestras',
      date: '31 de agosto de 2023',
      content: 'A RFCC promove uma programação especial durante todo mês de outubro que inclui palestras, eventos sociais, esportivos e de integração...',
      imageUrl: 'https://www.redefemininaitapema.com.br/imagens/outubro-rosa.jpg'
    },
    {
      title: 'Doação de Cabelos',
      date: 'Diariamente',
      content: 'A confecção de perucas oferece uma oportunidade de recuperação da autoestima para quem está na luta contra o câncer...',
      imageUrl: 'https://www.redefemininaitapema.com.br/imagens/doacao-cabelos.jpg'
    },
    {
      title: 'Campanha de Vacinação',
      date: '20 de setembro de 2023',
      content: 'A RFCC de Itapema está organizando uma campanha de vacinação para aumentar a conscientização sobre a importância da imunização...',
      imageUrl: 'https://www.redefemininaitapema.com.br/imagens/vacinacao.jpg'
    },
    {
      title: 'Feira de Saúde',
      date: '10 de outubro de 2023',
      content: 'Participe da nossa Feira de Saúde onde teremos especialistas disponíveis para consultas e exames gratuitos...',
      imageUrl: 'https://www.redefemininaitapema.com.br/imagens/feira-saude.jpg'
    },
    {
      title: 'Corrida pela Vida',
      date: '5 de novembro de 2023',
      content: 'Participe da nossa Corrida pela Vida e ajude a arrecadar fundos para apoiar pacientes com câncer...',
      imageUrl: 'https://www.redefemininaitapema.com.br/imagens/corrida-vida.jpg'
    },
  ];

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AppLayout title='Notícias' history={history}>
      <NewsContainer>
        {newsData.map((news, index) => (
          <div key={index}>
            <NewsItem onClick={() => toggleOpen(index)}>
              <NewsTitle><NewsIcon />{news.title}</NewsTitle>
              <NewsDate><DateIcon />{news.date}</NewsDate>
              <NewsContent isOpen={openIndex === index}>
                <NewsText>{news.content}</NewsText>
              </NewsContent>
            </NewsItem>
          </div>
        ))}
      </NewsContainer>
    </AppLayout>
  );
}

export default NewsScreen;