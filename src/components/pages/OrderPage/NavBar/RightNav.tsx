import { toast } from "react-toastify";
import styled from "styled-components";
import { useAdminContext } from "../../../../contexts/AdminContext";
import { theme } from "../../../../theme";
import ToggleButton from "../../../common/ToggleButton/ToggleButton";
import UserProfil from "./UserProfil";

type RightNavProps = {
  name?: string;
};

const RightNav = ({ name }: RightNavProps) => {
  const { handleChangeIsAdmin, isAdmin } = useAdminContext();

  const handleToggleButton = () => {
    handleChangeIsAdmin();
    if (!isAdmin) toast.info("Mode admin activé");
  };

  return (
    <RightNavStyled>
      <ToggleButton
        onToggle={handleToggleButton}
        isChecked={isAdmin}
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
