import styled, { css } from "styled-components";

export const InfoContainer = styled.div`
  font-family: "Roboto", sans-serif;
  position: fixed;
  transform: translateY(89%);
  width: 100%;
  height: 90%;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.7371323529411764) 58%,
    rgba(238, 238, 238, 0.7175245098039216) 67%
  );
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
      font-family: "Roboto", sans-serif;
      background-color: rgba(255, 255, 255, 0.842);
    `}
`;
