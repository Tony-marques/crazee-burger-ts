import styled from "styled-components";
import AddProductForm from "./Form/AddProductForm";

const AddPanel = () => {
  return (
    <AddPanelStyled>
      <AddProductForm />
    </AddPanelStyled>
  );
};

export default AddPanel;

const AddPanelStyled = styled.div``;
