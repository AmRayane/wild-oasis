import { CiLogout } from "react-icons/ci";
import ButtonIcon from "../../ui/ButtonIcon";
import styled from "styled-components";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

const Span = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export default function Logout() {
  const { logout, isLoading } = useLogout();
  return (
    <ButtonIcon onClick={() => logout()}>
      <Span>
        {isLoading ? (
          <SpinnerMini />
        ) : (
          <>
            Log out <CiLogout />
          </>
        )}
      </Span>
    </ButtonIcon>
  );
}
