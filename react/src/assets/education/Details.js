import styled from "styled-components";
import H1 from "../components/styled/H1.styled";
import S1 from "../components/styled/S1.styled";
import { Colors } from "../Theme";
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Hero1 from "../components/Hero/Hero1";
import { HomeEl } from "../Pages/Home1";

const HeroEl = styled.article`
  padding: 0 6.4rem;
  display: flex;

  flex-direction: column;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Content = styled.section`
  display: flex;
`;


const Title = styled(H1)`
  width: 476 px;
  margin-top: 1rem;
  padding-top: 3rem;
  color: ${Colors.Brand.Text};
`;
const SubTitle = styled(S1)`
  margin-top: 1rem;
  padding-bottom: 1.75rem;
  color: ${Colors.Brand.Text};
`;

const searchByArticle = (slug) => 'http://127.0.0.1:8000/api/article/' + slug + "/";

export const Details =() => {
    const { slug } = useParams();
    const [article, setArticle] = useState([]);

    useEffect(() => {
      axios.get(searchByArticle(slug)).then(({ data }) => setArticle(data[0]));
    }, [slug]);
    console.log(article);
    return (
      <HomeEl>
          <Hero1 />
          <HeroEl>
            <Content>
            <span>
            <img src={article.img} alt={article.title} width="450px" />
              <Title>{article.title}</Title>
              <SubTitle>{article.author}
              </SubTitle>
            </span>
            </Content>
            <Content>{article.section}</Content>
          </HeroEl>
        </HomeEl>
    );
};