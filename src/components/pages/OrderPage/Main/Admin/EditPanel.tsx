import { HiCursorClick } from "react-icons/hi";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import EditProductForm from "./Form/EditProductForm";

// const EMPTY_PRODUCT: ProductType = {
//   id: 0,
//   imageSource: "",
//   title: "",
//   price: 0,
//   quantity: 0,
//   isAvailable: false,
//   isAdvertised: false,
// };

const EditPanel = () => {
  // const { selectedProduct } = useProductContext();
  // const hasAlreadyBeenClicked = selectedProduct !== EMPTY_PRODUCT;
  // // console.log(hasAlreadyBeenClicked);
  // console.log(selectedProduct);
  // console.log(EMPTY_PRODUCT);
  // console.log(EMPTY_PRODUCT === selectedProduct);

  return (
    <EditPanelStyled>
      {/* {selectedProduct.title !== "" ? ( */}
      <EditProductForm />
      {/* ) : ( */}
      {/* <p className="click-to-edit">
        <span>Cliquer sur un produit pour le modifier</span>
        <HiCursorClick />
      </p> */}
      {/* )} */}
    </EditPanelStyled>
  );
};

export default EditPanel;

const EditPanelStyled = styled.div`
  /* border: 1px solid red; */
  height: 251px;
  .click-to-edit {
    padding: 81px 71px;
    display: flex;
    align-items: center;
    /* border: 1px solid blue; */
    gap: 9px;
    font-family: "Amatic SC", sans-serif;
    font-size: 24px;
    font-weight: 400;
    color: ${theme.colors.greyBlue};
  }
`;
