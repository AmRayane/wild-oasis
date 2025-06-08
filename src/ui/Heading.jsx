import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as == "h1" &&
    css`
      font-size: 2rem;
      line-height: 1.4;
    `}
`;

export default Heading;
