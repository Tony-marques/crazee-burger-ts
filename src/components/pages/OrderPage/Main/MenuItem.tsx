import { TiDelete } from "react-icons/ti";
import styled, { css } from "styled-components";
import { useAdminContext } from "../../../../contexts/AdminContext";
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
  const { handleDeleteProduct, handleSelectedProduct } = useProductContext();

  const handleOnDelete = (idToDelete: number) => {
    handleDeleteProduct(idToDelete);
  };

  const handleOnSelected = (selectedProductId: number | undefined) => {
    if (isAdmin) {
      handleSelectedProduct(selectedProductId);
      handleChangeSelectedTab("edit");
      if (!isCollapse) {
        handleChangeIsCollapse();
      }
    }
  };

  return (
    <MenuItemStyled
      onClick={() => handleOnSelected(id)}
      $selected={$selected}
      $isAdmin={$isAdmin}
    >
      {isAdmin && (
        <TiDelete className="delete" onClick={() => handleOnDelete(id)} />
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
  transition: background-color 0.2s;
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

  button {
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
  }
`;

const hoverButtonProduct = css`
  button {
    &:hover {
      border-color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      span {
        color: ${theme.colors.white};
      }
    }
  }
`;
