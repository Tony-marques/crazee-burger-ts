import { TbTrashXFilled } from "react-icons/tb";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled, { css } from "styled-components";
import { useAdminContext } from "../../../../../contexts/AdminContext";
import { useBasketContext } from "../../../../../contexts/BasketContext";
import { useProductContext } from "../../../../../contexts/ProductContext";
import { theme } from "../../../../../theme";
import DEFAULT_IMAGE from "/assets/images/coming-soon.png";

type BasketProductProps = {
  imageUrl: string;
  title: string;
  price: string;
  quantity: number;
  id: number;
  $isSelected: boolean;
  $isClickable: boolean;
};

type BasketProductStyledType = {
  $isSelected: boolean;
  $isClickable: boolean;
};

const BasketProduct = ({
  imageUrl,
  title,
  price,
  quantity,
  id,
  $isSelected,
  $isClickable,
}: BasketProductProps) => {
  const { handleDeleteProductInBasket } = useBasketContext();
  const { handleSelectedProduct, inputTitleRef } = useProductContext();
  const {
    handleChangeSelectedTab,
    handleChangeIsCollapse,
    isCollapse,
    isAdmin,
  } = useAdminContext();

  const handleOnDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    handleDeleteProductInBasket(id);
  };

  const handleOnSelected = async () => {
    if (isAdmin) {
      await handleSelectedProduct(id);
      await handleChangeSelectedTab("edit");
      inputTitleRef?.current?.focus();
      if (!isCollapse) {
        handleChangeIsCollapse();
      }
    }
  };

  return (
    <BasketProductStyled
      $isSelected={$isSelected}
      $isClickable={$isClickable}
      onClick={handleOnSelected}
    >
      <img src={imageUrl ? imageUrl : DEFAULT_IMAGE} alt="" />
      <div className="product-informations">
        <div className="title">{title}</div>
        <div className="price">{price}</div>
      </div>
      <div className="quantity">
        <TransitionGroup>
          <CSSTransition
            key={quantity}
            classNames={"animated-quantities"}
            timeout={300}
          >
            <div className="quantities">x {quantity}</div>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <button className="remove-button" onClick={handleOnDelete}>
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
    display: inline-block;
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

    /* span {
      display: inline-block;
    } */

    .count-animated-enter {
      transform: translateY(100%);
    }
    .count-animated-enter-active {
      transition: 0.3s;
      transform: translateY(0);
    }

    .count-animated-exit {
      transform: translateY(0);
      position: absolute;
      right: 0;
    }
    .count-animated-exit-active {
      transition: 0.3s;
      transform: translateY(-100%);
    }
  }

  .animated-quantities-enter {
    transform: translateY(100%);
  }
  .animated-quantities-enter-active {
    transform: translateY(0);
  }

  .animated-quantities-exit {
    transform: translateY(0);
    position: absolute;
    right: 0;
  }
  .animated-quantities-exit-active {
    transition: 0.3s;
    transform: translateY(-100%);
  }

  .quantity {
    position: relative;
    overflow: hidden;
  }

  ${({ $isSelected }) => $isSelected && selected}
  ${({ $isClickable }) => $isClickable && clickable}
`;

const selected = css`
  background-color: ${theme.colors.primary};

  .product-informations {
    .price {
      color: ${theme.colors.white};
    }
  }
  .quantities {
    color: ${theme.colors.white};
  }
`;

const clickable = css`
  cursor: pointer;
`;
