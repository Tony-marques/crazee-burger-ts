import styled from "styled-components";
import { useAdminContext } from "../../../../../../contexts/AdminContext";
import Button from "../../../../../common/Button/Button";
import EmptyMessage from "./EmptyMessage";

const EmptyMessageContainer = () => {
  const { isAdmin } = useAdminContext();
  return (
    <EmptyMessageContainerStyled>
      {isAdmin && (
        <EmptyMessage
          title="Le menu est vide ?"
          paragraphe="Cliquez ci-dessous pour le réinitialiser"
          Button={
            <Button
              label="Générer de nouveaux produits"
              $variant="primary"
              $size="auto"
              className="empty-message-button"
            />
          }
        />
      )}
      {!isAdmin && (
        <EmptyMessage
          title="Victime de notre succès ! :D"
          paragraphe="De nouvelles recettes sont en cours de préparation."
          lastParagraphe="À très vite !"
        />
      )}
    </EmptyMessageContainerStyled>
  );
};

export default EmptyMessageContainer;

const EmptyMessageContainerStyled = styled.div`
  /* border: 1px solid red; */
  height: 100%;

  .empty-message-button{
    padding: 19px 25px;
  }
`;
