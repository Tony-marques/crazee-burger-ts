import { useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import NavBar from "./NavBar";

const OrderPage = () => {
  const { name } = useParams();

  return (
    <OrderPageStyled>
      <NavBar name={name} />
    </OrderPageStyled>
  );
};

export default OrderPage;

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  height: 100vh;
`;
