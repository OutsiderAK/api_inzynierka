import styled from "styled-components";
import { Colors } from "../Theme";

const TableWrapper = styled.div`
    width: 100%;
    margin: 50px 0px;
    align-items: center;
    border-spacing: 14px;
    display:flex;
    justify-content:center;
`;

const TableItems = styled.th`
    width:300px;
    text-align: left;
    font-size: 16px;
    color: ${Colors.Brand.Text};
`

const RankingTable = ({ data }) => {
    return (
      <TableWrapper>
        <tbody>
          <tr>
          <TableItems>Punkty</TableItems>
            <TableItems>Imie</TableItems>
            <TableItems>Email</TableItems>
          </tr>
          {data.map((item) => (

            <tr style={{'text-align':'left'}} key={item.id}>
               <td>{item.quiz_points}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
             
            </tr>
            
          ))}
        </tbody>
      </TableWrapper>
    );
  };
  
  export default RankingTable;