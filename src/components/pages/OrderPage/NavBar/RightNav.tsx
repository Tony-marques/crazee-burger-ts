import { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { theme } from "../../../../theme";
import UserProfil from "./UserProfil";
import ToggleButton from "../../../common/ToggleButton";

type RightNavProps = {
  name?: string;
};

const RightNav = ({ name }: RightNavProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleButton = () => {
    setIsChecked((prev) => !prev);
    if (!isChecked) toast.info("Mode admin activé");
  };

  return (
    <RightNavStyled>
      <ToggleButton
        onToggle={handleToggleButton}
        isChecked={isChecked}
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
        labelIfChecked="DÉSACTIVER LE MODE ADMIN"
      />
      <UserProfil name={name} />
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
