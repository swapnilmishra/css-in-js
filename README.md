Attempt at creating a simple `css-in-js` lib

See filename `src/styled.js` for the implementation and `src/App.js` for an example usage.

External dependencies used:

- [hash-sum](https://www.npmjs.com/package/hash-sum)
- [stylis](https://www.npmjs.com/package/stylis)

TODO

- [x] Support `props` e.g.

```js
const Input = styled.input`
  padding: 10px 20px;
  color: white;
  background-color: ${props => (props.primary ? "red" : "palevioletred")};
`;
```

- [ ] `extend` function to extend a component
- [ ] A bit of writeup
