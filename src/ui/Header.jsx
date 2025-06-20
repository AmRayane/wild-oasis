import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import { useNavigate } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi";
import ButtonIcon from "./ButtonIcon";
import UserAvatar from "../features/authentication/UserAvatar";
const StyleadHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

export default function Header() {
  const navigate = useNavigate();
  return (
    <StyleadHeader>
      <StyledHeaderMenu>
        <li>
          <UserAvatar />
        </li>
        <li>
          <ButtonIcon onClick={() => navigate("/account")}>
            <HiOutlineUser />
          </ButtonIcon>
        </li>
        <li>
          <Logout />
        </li>
      </StyledHeaderMenu>
    </StyleadHeader>
  );
}
