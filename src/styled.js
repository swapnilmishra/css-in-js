import React from "react";
import stylis from "stylis";
import hash from "hash-sum";

const styled = {};

let styleEl = null;
let stylesCache = new Map();

function createStyleElement() {
  styleEl = document.createElement("style");
  document.head.appendChild(styleEl);
}

function addStylesheetRules(rule) {
  if (styleEl === null) {
    createStyleElement();
  }
  const styleSheet = styleEl.sheet;
  styleSheet.insertRule(rule, styleSheet.cssRules.length);
}

function createStyleSheet(css) {
  const cssStr = css.join("");
  const hashSum = hash(cssStr);
  let classname = null;
  classname = `css-${hashSum}`;
  if (!stylesCache.has(hashSum)) {
    const compiledCSS = stylis(`.${classname} `, cssStr);
    addStylesheetRules(compiledCSS);
    stylesCache.set(hashSum, compiledCSS);
  }
  return classname;
}

const tags = ["button", "input"];
buildForTags();

function buildForTags() {
  tags.forEach(tag => {
    styled[tag] = css => {
      const classname = createStyleSheet(css);
      return styleIt({ tag, className: classname });
    };
  });
}

function styleIt({ tag, className: classname }) {
  return ({ children, ...restProps }) => {
    return React.createElement(
      tag,
      { ...restProps, className: classname },
      children
    );
  };
}

export default styled;
