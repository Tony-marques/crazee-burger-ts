import styled from "styled-components";
import { useBasketContext } from "../../../../../contexts/BasketContext";
import { theme } from "../../../../../theme";
import { formatPrice } from "../../../../../utils/maths";
import CasinoEffect from "../../../../common/CasinoEffect/CasinoEffect";

const BasketHeader = () => {
  const { total } = useBasketContext();
  return (
    <BasketHeaderStyled>
      <div className="price-wrapper">
        <span className="total">total</span>
        {/* <span className="total-price">{formatPrice(total)}</span> */}
        <CasinoEffect count={formatPrice(total)} />
      </div>
    </BasketHeaderStyled>
  );
};

export default BasketHeader;

const BasketHeaderStyled = styled.div`
  display: flex;
  background-color: ${theme.colors.background_dark};
  height: 70px;
  font-family: "Amatic SC", sans-serif;
  font-size: 36px;
  font-weight: 400;
  letter-spacing: 2px;
  color: ${theme.colors.primary};

  .price-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 16px;
  }
`;
