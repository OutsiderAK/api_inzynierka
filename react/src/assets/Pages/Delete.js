import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Hero1 from '../components/Hero/Hero1';
import {Wrapper, CardContainer, CardInner, CardFront, CardBack } from './CreateCard';

const searchByCard = (id) => 'http://127.0.0.1:8000/api/fiszki/' + id;

export const Delete = () => {
  const { id } = useParams();
  const { push, goBack } = useHistory();
  const history = useHistory(); 
  const [fiszka, setFiszka] = useState([]);
  const [flipped, setFlipped] = useState(false)


  console.log(fiszka);
  window.location.reload();
  history.push("/fiszki");

  useEffect(() => {
    axios.delete(searchByCard(id)).then(({ data }) => setFiszka(data[0]));
  }, [id]);

  return (
    <>
        {/* <Hero1 />
      <Wrapper>
      <CardContainer>
        <CardInner className={flipped ? "flipped" : ""}>
          <CardFront onClick = {() => setFlipped(true)}>
            <h2>{fiszka.text}</h2>
          </CardFront>
          <CardBack onClick = {() => setFlipped(false)}>
            <img src={fiszka.reverse} alt={fiszka.text} />
          </CardBack>
        </CardInner>
      </CardContainer>
      </Wrapper> */}
      </>
  );
};
  