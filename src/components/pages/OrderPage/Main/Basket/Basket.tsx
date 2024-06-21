import styled from "styled-components";
import BasketBody from "./BasketBody";
import BasketFooter from "./BasketFooter";
import BasketHeader from "./BasketHeader";

const Basket = () => {
  return (
    <BasketStyled>
      <BasketHeader />
      <BasketBody />
      <BasketFooter />
    </BasketStyled>
  );
};

export default Basket;

const BasketStyled = styled.div`
  background-color: red;
  display: flex;
  flex-direction: column;
`;
