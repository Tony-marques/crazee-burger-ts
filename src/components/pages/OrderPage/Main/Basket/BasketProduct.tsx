import { TbTrashXFilled } from "react-icons/tb";
import styled from "styled-components";
import { theme } from "../../../../../theme";

type BasketProductProps = {
  imageUrl: string;
  title: string;
  price: string;
  quantity: number;
};

const BasketProduct = ({
  imageUrl,
  title,
  price,
  quantity,
}: BasketProductProps) => {
  return (
    <BasketProductStyled>
      <img src={imageUrl} alt="" />
      <div className="product-informations">
        <div className="title">{title}</div>
        <div className="price">{price}</div>
      </div>
      <div className="quantities">x {quantity}</div>
      <button className="remove-button">
        <TbTrashXFilled />
      </button>
    </BasketProductStyled>
  );
};

export default BasketProduct;

const BasketProductStyled = styled.div`
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: -4px 4px 15px 0px #00000033;
  background-color: ${theme.colors.white};
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  min-height: 86px;

  &:hover .remove-button {
    width: 76px;
  }

  img {
    width: 85px;
    height: 70px;
    object-fit: contain;
  }

  .product-informations {
    .title {
      font-family: Amatic SC;
      font-size: 24px;
      font-weight: 700;
      color: ${theme.colors.dark};
    }

    .price {
      font-family: Open Sans;
      font-size: 15px;
      font-weight: 400;
      color: ${theme.colors.primary};
    }
  }

  .quantities {
    font-family: Open Sans;
    font-size: 15px;
    font-weight: 400;
    color: ${theme.colors.primary};
  }

  .remove-button {
    background-color: ${theme.colors.red};
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: width 0.2s;
    width: 0;

    svg {
      color: ${theme.colors.white};
      width: 24px;
      height: 24px;
    }
  }
`;
