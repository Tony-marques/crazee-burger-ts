import styled from "styled-components";
import { theme } from "../../../theme";
import Container from "./Container";

const OrderPage = () => {
  // const { handleUsername, username } = useProductContext();
  // const { name } = useParams();

  // useEffect(() => {
  //   handleUsername(name);
  //   console.log("useeffect orderpage");
  //   console.log(username);
  // }, []);

  return (
    <OrderPageStyled>
      <Container />
    </OrderPageStyled>
  );
};

export default OrderPage;

const OrderPageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primary};
  height: 100vh;
`;
