Attempt at creating a simple `css-in-js` lib

See filename [lib/styled.js](https://github.com/swapnilmishra/css-in-js/blob/master/lib/styled.js) for the implementation and [example/src/App.js](https://github.com/swapnilmishra/css-in-js/blob/master/example/src/App.js) for an example usage.

External dependencies used:

- [hash-sum](https://www.npmjs.com/package/hash-sum)
- [stylis](https://www.npmjs.com/package/stylis)

#### Usage with variables

```js
import styled from "lib/styled";

const primaryColor = "white";
const secondaryColor = "red";
const padding = "10px 20px";

const AnotherButton = styled.button`
  background-color: ${secondaryColor};
  padding: ${padding};
  color: ${primaryColor};
`;
```

#### Usage with `styled-system`

```js
import styled from "lib/styled";
import { color } from "styled-system";

const Button = styled.button`
  background-color: blue;
  padding: 10px 20px;
  ${color}
`;

<Button color="red" disabled>
  This is styled button
</Button>;
```

#### Usage with custom function which returns CSS

```js
import styled from "lib/styled";

const Input = styled.input`
  padding: 10px 20px;
  background-color: ${props => (props.primary ? "red" : "palevioletred")};
  color: white;
`;

<Input type="text" primary />;
```

#### Usage with className property

```js
import { css } from "lib/styled";

const bgColor = "black";
const containerCls = css`
  background-color: ${bgColor};
  width: 50px;
  height: 50px;
  color: white;
`;

<div className="{containerCls}">Content</div>;
```

or

```jsx
import { css } from "lib/styled";

<div
  className={css`
    background-color: ${props.bgColor};
    width: 50px;
    height: 50px;
    color: white;
  `}
>
```

#### Extending components

```js
const Input = styled.input`
  padding: 10px 20px;
  background-color: ${props => (props.primary ? "gray" : "palevioletred")};
  color: white;
`;

const AnotherInput = styled(Input)`
  background-color: yellow;
  color: green;
`;
```

### TODO

- [ ] A bit of writeup
