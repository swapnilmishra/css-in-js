import React from "react";
import styled from "./styled";
import { color } from "styled-system";

const Button = styled.button`
  background-color: blue;
  padding: 10px 20px;
  ${color}
`;

const prColor = "white";
const secondaryColor = "red";
const padding = "10px 20px";

const AnotherButton = styled.button`
  background-color: ${secondaryColor};
  padding: ${padding};
  color: ${prColor};
`;

const Input = styled.input`
  padding: 10px 20px;
  background-color: ${props => (props.primary ? "red" : "palevioletred")};
  color: white;
`;

export default function App() {
  return (
    <div>
      <div>A div that need to be styled</div>
      <Button color="red" disabled>
        This is styled button
      </Button>
      <AnotherButton disabled>This is another styled button</AnotherButton>
      <Input type="text" />
    </div>
  );
}
