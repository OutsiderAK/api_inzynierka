import styled from "styled-components";
import { Colors } from "../Theme";

const TableWrapper = styled.div`
    width: 100%;
    margin: 50px 0px;
    border-spacing: 15px;
    align-items: center;
    display:flex;
    justify-content:center;
`;

const TableItems = styled.th`
    width:250px;
    text-align: left;
    font-size: 16px;
    color: ${Colors.Brand.Text};
`
  
const Table = ({ data }) => {
    return (
      <TableWrapper>
        <tbody>
          <tr>
            <TableItems>Name</TableItems>
            <TableItems>Email</TableItems>
          </tr>
          {data.map((item) => (
            <tr style={{'text-align':'left'}} key={item.id}>
              <td>{item.username}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </TableWrapper>
    );
  };
  
  export default Table;