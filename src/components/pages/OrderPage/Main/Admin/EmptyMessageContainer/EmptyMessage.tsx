import styled from "styled-components";
import { theme } from "../../../../../../theme";

type EmptyMessageProps = {
  title: string;
  paragraphe: string;
  lastParagraphe?: string;
  Button?: JSX.Element;
};

const EmptyMessage = ({
  title,
  paragraphe,
  lastParagraphe,
  Button,
}: EmptyMessageProps) => {
  return (
    <EmptyMessageStyled>
      <h1>{title}</h1>
      <p>{paragraphe}</p>
      {lastParagraphe && <p>{lastParagraphe}</p>}
      {Button && Button}
    </EmptyMessageStyled>
  );
};

export default EmptyMessage;

const EmptyMessageStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 21px;
  font-family: "Amatic SC";

  h1 {
    color: ${theme.colors.greyBlue};
    font-size: 36px;
    font-weight: 700;
  }

  p {
    color: ${theme.colors.greyBlue};
    font-size: 36px;
    font-weight: 400;
  }
`;
