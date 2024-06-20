import styled from "styled-components";
import { useProductContext } from "../../../../contexts/ProductContext";
import { formatPrice } from "../../../../utils/maths";
import MenuItem from "./MenuItem";
import { useAdminContext } from "../../../../contexts/AdminContext";

const MenuList = () => {
  const {isAdmin} = useAdminContext()
  const { products, selectedProductId } = useProductContext();

  return (
    <MenuListStyled>
      {products?.map(({ id, title, imageSource, price }) => (
        <MenuItem
          id={id}
          key={id}
          imageSource={imageSource}
          title={title}
          price={formatPrice(price)}
          $selected={isAdmin && selectedProductId === id}
          $isAdmin={isAdmin}
        />
      ))}
    </MenuListStyled>
  );
};

export default MenuList;

const MenuListStyled = styled.div`
  display: grid;
  justify-content: center;
  row-gap: 60px;
  column-gap: 85px;
  grid-template-columns: repeat(auto-fit, 240px);
  overflow-y: scroll;
  height: 100%;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  background: #f5f5f7;
  padding: 50px 50px 300px;
`;
