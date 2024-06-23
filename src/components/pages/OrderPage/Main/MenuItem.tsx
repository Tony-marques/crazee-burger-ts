import { TiDelete } from "react-icons/ti";
import { useParams } from "react-router-dom";
import styled, { css } from "styled-components";
import { useAdminContext } from "../../../../contexts/AdminContext";
import { useBasketContext } from "../../../../contexts/BasketContext";
import { useProductContext } from "../../../../contexts/ProductContext";
import { theme } from "../../../../theme";
import Button from "../../../common/Button/Button";
import DEFAULT_IMAGE from "/assets/images/coming-soon.png";

type MenuItemProps = {
  id: number;
  imageSource: string;
  title: string;
  price: string;
  $selected: boolean;
  $isAdmin: boolean;
};

type MenuItemStyledType = {
  $selected: boolean;
  $isAdmin: boolean;
};

const MenuItem = ({
  id,
  imageSource,
  title,
  price,
  $selected,
  $isAdmin,
}: MenuItemProps) => {
  const {
    isAdmin,
    handleChangeSelectedTab,
    handleChangeIsCollapse,
    isCollapse,
  } = useAdminContext();
  const {
    handleDeleteProduct,
    handleSelectedProduct,
    inputTitleRef,
    products,
  } = useProductContext();
  const { name } = useParams();
  const { handleAddProductInBasket } = useBasketContext();
  const { handleDeleteProductInBasket, basketProducts } = useBasketContext();

  const handleOnDelete = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    idToDelete: number
  ) => {
    e.stopPropagation();
    handleDeleteProduct(idToDelete, name);

    const productAlreadyInBasket = basketProducts.find(
      (product) => product.id === idToDelete
    );

    if (productAlreadyInBasket) {
      handleDeleteProductInBasket(idToDelete);
    }
  };

  const handleOnSelected = async (selectedProductId: number) => {
    if (isAdmin) {
      await handleSelectedProduct(selectedProductId);
      await handleChangeSelectedTab("edit");
      inputTitleRef.current?.focus();
      if (!isCollapse) {
        handleChangeIsCollapse();
      }
    }
  };

  const handleOnAdd = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();

    const productToAdd = products.find((product) => product.id === id);

    if (productToAdd) {
      handleAddProductInBasket(productToAdd);
    }
  };

  return (
    <MenuItemStyled
      onClick={() => handleOnSelected(id)}
      $selected={$selected}
      $isAdmin={$isAdmin}
    >
      {isAdmin && (
        <button className="delete" onClick={(e) => handleOnDelete(e, id)}>
          <TiDelete />
        </button>
      )}
      <img
        src={imageSource ? imageSource : DEFAULT_IMAGE}
        alt={"burger " + title}
      />
      <h1>{title}</h1>
      <div className="bottom">
        <div className="price">{price}</div>
        <Button
          label="Ajouter"
          className="button-menuitem"
          $variant="primary"
          $size="full"
          onClick={(e) => handleOnAdd(e)}
        />
      </div>
    </MenuItemStyled>
  );
};

export default MenuItem;

const MenuItemStyled = styled.div<MenuItemStyledType>`
  /* max-width: 300px; */
  height: 330px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  border-radius: ${theme.borderRadius.extraRound};
  position: relative;
  transition: background-color 0.2s, box-shadow 0.2s;
  img {
    max-width: 100%;
    height: 145px;
    object-fit: contain;
    margin-bottom: 15px;
  }

  h1 {
    font-family: "Amatic sc";
    margin-bottom: 6.75px;
    font-size: 36px;
    font-weight: 700;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .bottom {
    display: flex;
    align-items: center;
    width: 100%;

    .price {
      min-width: 50%;
      font-family: "Open Sans";
      font-size: 16px;
      font-weight: 400;
      color: ${theme.colors.primary};
    }
  }

  .button-menuitem {
    padding: 12px;
    font-size: 11px;
  }

  .delete {
    position: absolute;
    right: 15px;
    top: 15px;
    font-size: 30px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: inherit;
    color: ${theme.colors.primary};
    transition: color 0.2s;
    cursor: pointer;

    &:hover {
      color: ${theme.colors.red};
    }
  }

  ${({ $selected }) => $selected && selectedProduct}
  ${({ $isAdmin }) => $isAdmin && hoverProduct}
  ${({ $isAdmin, $selected }) => $isAdmin && $selected && hoverButtonProduct}
`;

const selectedProduct = css`
  background-color: ${theme.colors.primary};

  .button-menuitem {
    background-color: ${theme.colors.white};

    span {
      color: ${theme.colors.primary};
    }
  }

  .delete,
  .bottom .price {
    color: ${theme.colors.white};
  }
`;

const hoverProduct = css`
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 8px 0 ${theme.colors.primary};
  }
`;

const hoverButtonProduct = css`
  .button-menuitem {
    &:hover {
      border-color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      span {
        color: ${theme.colors.white};
      }
    }
  }
`;
