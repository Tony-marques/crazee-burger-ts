import { TiDelete } from "react-icons/ti";
import styled from "styled-components";
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
};

const MenuItem = ({ id, imageSource, title, price }: MenuItemProps) => {
  const { isAdmin } = useAdminContext();
  const { handleDeleteProduct } = useProductContext();

  const handleOnClick = (idToDelete: number) => {
    handleDeleteProduct(idToDelete);
  };

  return (
    <MenuItemStyled>
      {isAdmin && (
        <TiDelete className="delete" onClick={() => handleOnClick(id)} />
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

const MenuItemStyled = styled.div`
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
`;
