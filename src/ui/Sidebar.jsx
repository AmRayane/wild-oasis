import React from "react";
import styled from "styled-components";

const Aside = styled.aside`
  background-color: var(--color-grey-0);
  grid-row: 1 / -1;
`;

export default function SideBar() {
  return <Aside>SideBar</Aside>;
}
