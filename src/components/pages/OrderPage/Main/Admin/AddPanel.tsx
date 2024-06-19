import styled from "styled-components";
import ProductForm from "./ProductForm";

const AddPanel = () => {
  return (
    <AddPanelStyled>
      <ProductForm />
    </AddPanelStyled>
  );
};

export default AddPanel;

const AddPanelStyled = styled.div`
  /* border: 2px solid red; */
  min-height: 250px;
  
`;
