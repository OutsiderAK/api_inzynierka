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
    axios.get("http://127.0.0.1:8000/api/article/")
      .then((response) => {
        console.log(response);
        setNews(response.data)
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
              img: n.img,
              title: n.title,
              };
              return (
                <Card
              key={n.slug}
              onClick={() => push(`/article/${n.slug}`)}
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