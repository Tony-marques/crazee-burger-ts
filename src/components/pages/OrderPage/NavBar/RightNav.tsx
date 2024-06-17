import { useState } from "react";
import { PiUserCircleFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { theme } from "../../../../theme";
import ToggleButton from "./ToggleButton";

type RightNavProps = {
  name?: string;
};

const RightNav = ({ name }: RightNavProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/", { replace: true });
  };

  const handleToggleButton = () => {
    setIsChecked((prev) => !prev);
    if (!isChecked) toast.info("Mode admin activé");
  };
  return (
    <RightNavStyled>
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
    </RightNavStyled>
  );
};

export default RightNav;

const RightNavStyled = styled.div`
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
`;
