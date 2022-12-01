import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Hero1 from '../Hero/Hero1';
import styled from "styled-components";
import Button from '../../components/styled/Button.styled';
import {Wrapper, CardContainer, CardInner, CardFront, CardBack } from '../../Pages/CreateCard';
import { AppEl, StyledInput, InputContainer } from '../../Pages/Create';

const ButtonContainer = styled.div`
  margin: -1.5rem 0 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;

const searchByCard = (id) => 'http://127.0.0.1:8000/api/fiszki/' + id;

export const Fiszka = () => {
  const { id } = useParams();
  const { push } = useHistory();
  const [fiszka, setFiszka] = useState([]);
  const [flipped, setFlipped] = useState(false);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [updateMode, setUpdateMode] = useState(false);


  useEffect(() => {
    axios.get(searchByCard(id)).then(({ data }) => setFiszka(data[0]));
    console.log(fiszka.text);
    setTitle(fiszka.text);
    setUrl(fiszka.reverse);
  }, [id]);

  

  const handleUpdate = async () => {
    try {
      await axios.put(searchByCard(id), {
        title,
        url,
      });
      setUpdateMode(false)
    } catch (err) {}
  };

  return (
    <>
        <Hero1 />
        {updateMode ? (
          <Wrapper>
          <AppEl>
            <formik>
              <InputContainer>
                <StyledInput 
                type="text"
                value={title}
                autoFocus onChange={(e) => setTitle(e.target.value)}/>
                <StyledInput
                type="text"
                value={url}
                autoFocus onChange={(e) => setUrl(e.target.value)} />
              </InputContainer>
            </formik>
            <Button onClick={handleUpdate}>Edytuj</Button>
          </AppEl>
          </Wrapper>
        ) :(
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
      <ButtonContainer>
      <Button onClick={() => setUpdateMode(true)}>Edytuj</Button>
      <Button onClick={() => push(`/delete/${id}`)}> Usuń </Button>
      </ButtonContainer>
      </Wrapper>
        )}
      </>
  );
};