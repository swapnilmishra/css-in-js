import React from "react";
import styled from "./styled";

const Button = styled.button`
  background-color: blue;
  padding: 10px 20px;
  color: white;
`;

const color = "white";

const AnotherButton = styled.button`
  background-color: blue;
  padding: 10px 20px;
  color: ${color};
`;

const Input = styled.input`
  padding: 10px 20px;
  color: white;
  background-color: ${props => (props.primary ? "red" : "palevioletred")};
`;

export default function App() {
  return (
    <div>
      <div>A div that need to be styled</div>
      <Button disabled>This is styled button</Button>
      <AnotherButton disabled>This is another styled button</AnotherButton>
      <Input type="text" />
    </div>
  );
}
