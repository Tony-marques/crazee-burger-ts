import { useState } from "react";
import { PiUserCircleFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Logo from "../../../common/Logo/Logo";
import ToggleButton from "./ToggleButton";

const NavBar = ({ name }: { name: string | undefined }) => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/", { replace: true });
  };

  const handleToggleButton = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <NavBarStyled>
      <Logo className="transform" />
      <div className="right-nav">
        <ToggleButton
          isChecked={isChecked}
          labelIfUnchecked="ACTIVER LE MODE ADMIN"
          labelIfChecked="DÉSACTIVER LE MODE ADMIN"
          onToggle={handleToggleButton}
        />
        <div className="user">
          <div className="left">
            <p>
              Hey, <span>{name}</span>
            </p>
            <button onClick={handleOnClick}>Se déconnecter</button>
          </div>
          <div className="right">
            <PiUserCircleFill />
          </div>
        </div>
      </div>
    </NavBarStyled>
  );
};

export default NavBar;

const NavBarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  padding: 0 20px;
  background-color: ${theme.colors.white};

  .transform {
    transform: scale(1);
  }

  .right-nav {
    display: flex;
    gap: 60px;
    .user {
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: "Open Sans", sans-serif;
      margin-right: 50px;

      .left {
        text-align: right;
        p {
          color: ${theme.colors.greyBlue};

          span {
            color: ${theme.colors.primary};
            font-weight: 700;
          }
        }

        button {
          background-color: inherit;
          font-size: 10px;
          color: ${theme.colors.greyBlue};
          border: none;
          outline: none;
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }
      }

      .right {
        display: flex;
        justify-content: center;
        svg {
          color: ${theme.colors.greyBlue};
          font-size: ${theme.fonts.size.P4};
        }
      }
    }
  }
`;
