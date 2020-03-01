Attempt at creating a simple `css-in-js` lib

See filename `src/styled.js` for the implementation and `src/App.js` for an example usage.

External dependencies used:

- [hash-sum](https://www.npmjs.com/package/hash-sum)
- [stylis](https://www.npmjs.com/package/stylis)

#### Usage with variables

```js
const prColor = "white";
const secondaryColor = "red";
const padding = "10px 20px";

const AnotherButton = styled.button`
  background-color: ${secondaryColor};
  padding: ${padding};
  color: ${prColor};
`;
```

#### Usage with `styled-system`

```js
const Button = styled.button`
  background-color: blue;
  padding: 10px 20px;
  ${color}
`;
```

#### Usage with custom function which returns CSS

```js
const Input = styled.input`
  padding: 10px 20px;
  background-color: ${props => (props.primary ? "red" : "palevioletred")};
  color: white;
`;
```

### TODO

- [ ] `extend` function to extend a component
- [ ] A bit of writeup
