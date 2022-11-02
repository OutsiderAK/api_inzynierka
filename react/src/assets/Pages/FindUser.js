import { useEffect, useState } from "react";
import Table from "../components/Table";
import axios from "axios";
import styled from "styled-components";
import { Colors } from "../Theme"; 

const Wrapper = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Search = styled.input`
  margin-left: 100px;
  background: none;
  width: 300px;
  padding: 10px;
  font-size: 16px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  border-color: ${Colors.Brand.Button};
  border: none;
  outline: none;
  color: ${Colors.Brand.Text};
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #6B10B1;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: ${Colors.Brand.Text};
    font-weight: 100;
    font-size: 1rem;
  }
  `;


export default function FindUser() {
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const res = await axios.get(`http://127.0.0.1:8000/api/auth/login/?q=${query}`);
        setData(res.data);
      };
      if (query.length === 0 || query.length > 1) fetchData();
    }, [query]);
  
    return (
      <Wrapper>
          <Search
            placeholder="Dodaj znajomego..."
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
        {<Table data={data} />}
      </Wrapper>
    );
  }
  