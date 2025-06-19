import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as == "h1" &&
    css`
      font-size: 2rem;
      line-height: 1.4;
    `}
  ${(props) =>
    props.as == "h4" &&
    css`
      font-size: 2rem;
      line-height: 1.4;
      font-weight: 600;
      margin: 0 auto;
    `}
`;

export default Heading;
