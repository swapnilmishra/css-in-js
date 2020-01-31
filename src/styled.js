import React from "react";
import stylis from "stylis";
import hash from "hash-sum";

const styled = {};
let styleEl = null;
let stylesCache = new Map();
const tags = ["button", "input"];

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

function createStyleSheet(css, restProp, propFn) {
  const cssStr = preProcessCss(css, propFn, restProp).join("");
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

function preProcessCss(css, propFn, props) {
  const cssFromPropFn = propFn.map(rule => {
    if (typeof rule === "function") {
      return rule(props);
    } else {
      return rule;
    }
  });

  return css.map(rule => {
    if (rule.trim() === ";") {
      return cssFromPropFn.pop() + ";";
    }
    return rule;
  });
}

function styleIt({ tag, css, propFn }) {
  return ({ children, ...restProps }) => {
    const classname = createStyleSheet(css, restProps, propFn);
    return React.createElement(
      tag,
      { ...restProps, className: classname },
      children
    );
  };
}

function buildForTags() {
  tags.forEach(tag => {
    styled[tag] = (css, ...propFn) => {
      return styleIt({ tag, css, propFn });
    };
  });
}

buildForTags();

export default styled;
