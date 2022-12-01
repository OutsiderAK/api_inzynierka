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
  const [text, setText] = useState("");
  const [reverse, setReverse] = useState("");
  const [updateMode, setUpdateMode] = useState(false);


  useEffect(() => {
    axios.get(searchByCard(id)).then(({ data }) => setFiszka(data[0]));
    setText(fiszka.text);
    setReverse(fiszka.reverse);
    console.log(text);
  }, [id]);

  

  const handleUpdate = async () => {
    try {
      const res = await axios.post(searchByCard(id), {
        id: fiszka.id,
        text: text,
        reverse: reverse,
        category: fiszka.category
      });
      console.log(res.data);
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
                value={text}
                autoFocus onChange={(e) => setText(e.target.value)}/>
                <StyledInput
                type="text"
                value={reverse}
                autoFocus onChange={(e) => setReverse(e.target.value)} />
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
            <h2>{text}</h2>
          </CardFront>
          <CardBack onClick = {() => setFlipped(false)}>
            <img src={reverse} alt={fiszka.text} />
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