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
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 20px 0px #00000033 inset;
  overflow-y: hidden;
`;
