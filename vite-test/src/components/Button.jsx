import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  background-color: ${(props) => props.color};
  width: 130px;
  height: 40px;
  text-align: center;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export function Button({ label, color, buttonHandler, disabled }) {
  return (
    <ButtonWrapper onClick={buttonHandler} color={color} disabled={disabled}>
      {label}
    </ButtonWrapper>
  );
}
