import { useState } from "react";
import styled from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import MenuItem from "./MenuItem";
import { formatPrice } from "../../../../utils/maths";

const MenuList = () => {
  const [menu] = useState(fakeMenu2);

  return (
    <MenuListStyled>
      {menu?.map(({ id, title, imageSource, price }) => (
        <MenuItem
          key={id}
          imageSource={imageSource}
          title={title}
          price={formatPrice(price)}
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
  /* flex-wrap: wrap; */
`;
