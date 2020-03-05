import React from "react";
import styled, { css } from "./lib/styled";
import { color } from "styled-system";

const Button = styled.button`
  background-color: yellow;
  padding: 10px 20px;
  ${color}
`;

const primaryColor = "white";
const secondaryColor = "green";
const padding = "10px 20px";
const bgColor = "black";

const AnotherButton = styled.button`
  background-color: ${secondaryColor};
  padding: ${padding};
  color: ${primaryColor};
`;

const Input = styled.input`
  padding: 10px 20px;
  background-color: ${props => (props.primary ? "gray" : "palevioletred")};
  color: white;
`;

const AnotherInput = styled(Input)`
  background-color: yellow;
  color: green;
`;

const divCls = css`
  background-color: ${bgColor};
  width: 50px;
  height: 50px;
  color: white;
`;

export default function App(props) {
  return (
    <div>
      <div>A div that need to be styled</div>
      <Button color="red" disabled>
        This is styled button
      </Button>
      <AnotherButton disabled>This is another styled button</AnotherButton>
      <Input type="text" primary />
      <AnotherInput placeholder="Another input" />
      <div className={divCls}>Content</div>
      <div
        className={css`
          background-color: ${props.bgColor};
          width: 50px;
          height: 50px;
          color: white;
        `}
      >
        Content
      </div>
    </div>
  );
}
