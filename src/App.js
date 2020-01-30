import React from "react";
import styled from "./styled";

const Button = styled.button`
  background-color: blue;
  padding: 10px 20px;
  color: white;
`;

export default function App() {
  return (
    <div>
      <div>A div that need to be styled</div>
      <Button disabled>This is styled button</Button>
    </div>
  );
}
