import styled, { css } from "styled-components";

export const InfoContainer = styled.div`
  position: fixed;
  transform: translateY(86%);
  width: 100%;
  height: 90%;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.0),
    rgba(255, 255, 255, 0.66),
    rgba(255, 255, 255, 0.89) 20%
  );
  backdrop-filter: blur(2px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  transition: transform 1.369s;

  ${({ active }) =>
    active &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      position: fixed;
      transform: translateY(12%);
      width: 100%;
      height: 90%;
    `}
`;

