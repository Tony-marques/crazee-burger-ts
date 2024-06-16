import styled from "styled-components";
import Logo from "../../common/Logo/Logo";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <LoginPageStyled>
      <Logo className="transform" />
      <LoginForm />
    </LoginPageStyled>
  );
};

export default LoginPage;

const LoginPageStyled = styled.div`
  min-height: 100vh;
  gap: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background: url("assets/images/burger-background.jpg") rgba(0, 0, 0, 0.7);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: darken;

  .transform {
    transform: scale(2.5);
  }
`;
