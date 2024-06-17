import styled from "styled-components";
import { theme } from "../../../../theme";
import { formatPrice } from "../../../../utils/maths";
import Button from "../../../common/Button/Button";

type MenuItemProps = {
  imageSource: string;
  title: string;
  price: number;
};

const MenuItem = ({ imageSource, title, price }: MenuItemProps) => {
  return (
    <MenuItemStyled>
      <img src={imageSource} alt={"burger " + title} />
      <h1>{title}</h1>
      <div className="bottom">
        <div className="price">{formatPrice(price)}</div>
        <Button label="Ajouter" className="button-menuitem" />
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
`;
