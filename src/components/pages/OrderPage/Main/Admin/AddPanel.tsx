import styled from "styled-components";
import ProductForm from "./Form/ProductForm";

const AddPanel = () => {
  return (
    <AddPanelStyled>
      <ProductForm />
    </AddPanelStyled>
  );
};

export default AddPanel;

const AddPanelStyled = styled.div``;
