import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import { useAdminContext } from "../../../../contexts/AdminContext";
import { useProductContext } from "../../../../contexts/ProductContext";
import { menuAnimation } from "../../../../theme/animations";
import { formatPrice } from "../../../../utils/maths";
import Ribbon from "../../../common/Ribbon/Ribbon";
import MenuItem from "./MenuItem";

const MenuList = () => {
  const { isAdmin } = useAdminContext();
  const { products, selectedProduct } = useProductContext();

  return (
    <MenuListStyled>
      <TransitionGroup component={null}>
        {products?.map(
          ({ id, title, imageSource, price, isAvailable, isAdvertised }) => (
            <CSSTransition
              classNames={"menuitem-animated"}
              key={id}
              timeout={300}
            >
              <div className="card-container">
                {isAdvertised && <Ribbon label="nouveau"/>}
                <MenuItem
                  id={id}
                  key={id}
                  imageSource={imageSource}
                  title={title}
                  price={formatPrice(price)}
                  isAvailable={isAvailable}
                  $selected={isAdmin && selectedProduct.id === id}
                  $isAdmin={isAdmin}
                />
              </div>
            </CSSTransition>
          )
        )}
      </TransitionGroup>
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

  ${menuAnimation}

  .card-container {
    position: relative;
  }
`;
