import styled from "styled-components";
import { useState, useEffect } from 'react';
import axios from "axios";
import { List } from "../education/List"
import { Card } from "../education/Card";
import { useHistory } from 'react-router-dom';
import Hero1 from "../components/Hero/Hero1";

const Wrapper = styled.main`
  padding: 2rem 0;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;
`;

function Education() {

  const [news, setNews] = useState([])

  const { push } = useHistory();

  useEffect(() => {
    axios.get("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=599b3bac3de04a1f926badbb088d4d02")
      .then((response) => {
        console.log(response);
        setNews(response.data.articles)
      })
  }, []);
  return (
    <>
    <Hero1 />
    <Wrapper>
      <Container>

      <List>
          {
            news.map((n) => {
              const countryInfo = {
              img: n.urlToImage,
              title: n.title,
              };
              return (
                <Card
              key={n.title}
              onClick={() => push(`/article/${n.title}`)}
              {...countryInfo}
            />
             );
        })}
      </List>
      </Container>
      </Wrapper>
      </>
  )
}

export default Education;