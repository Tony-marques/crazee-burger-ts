import { TbTrashXFilled } from "react-icons/tb";
import styled, { css } from "styled-components";
import { useBasketContext } from "../../../../../contexts/BasketContext";
import { theme } from "../../../../../theme";
import DEFAULT_IMAGE from "/assets/images/coming-soon.png";

type BasketProductProps = {
  imageUrl: string;
  title: string;
  price: string;
  quantity: number;
  id: number;
  $isSelected: boolean;
};

type BasketProductStyledType = {
  $isSelected: boolean;
};

const BasketProduct = ({
  imageUrl,
  title,
  price,
  quantity,
  id,
  $isSelected,
}: BasketProductProps) => {
  const { handleDeleteProductInBasket } = useBasketContext();

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    handleDeleteProductInBasket(id);
  };

  return (
    <BasketProductStyled $isSelected={$isSelected}>
      <img src={imageUrl ? imageUrl : DEFAULT_IMAGE} alt="" />
      <div className="product-informations">
        <div className="title">{title}</div>
        <div className="price">{price}</div>
      </div>
      <div className="quantities">x {quantity}</div>
      <button className="remove-button" onClick={handleOnClick}>
        <TbTrashXFilled />
      </button>
    </BasketProductStyled>
  );
};

export default BasketProduct;

const BasketProductStyled = styled.div<BasketProductStyledType>`
  padding: 8px 16px;
  display: flex;
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
    margin-right: 15px;
  }

  .product-informations {
    width: 120px;
    .title {
      font-family: Amatic SC;
      font-size: 24px;
      font-weight: 700;
      color: ${theme.colors.dark};
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
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
    margin-left: 10px;
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

    &:hover svg {
      color: black;
    }

    &:active svg {
      color: ${theme.colors.white};
    }

    svg {
      color: ${theme.colors.white};
      width: 24px;
      height: 24px;
      transition: color 0.2s;
    }
  }

  ${({ $isSelected }) => $isSelected && isSelected}
`;

const isSelected = css`
  background-color: ${theme.colors.primary};
`;
