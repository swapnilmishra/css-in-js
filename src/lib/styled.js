import React from "react";
import stylis from "stylis";
import hash from "hash-sum";
import tags from "./tags";

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

const toDashedCase = str =>
  str.replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`);

const fromObjectToCss = cssObj => {
  const cssArr = [];
  Object.keys(cssObj).forEach(key => {
    cssArr.push(`${toDashedCase(key)}:${cssObj[key]};`);
  });

  return cssArr;
};

function preProcessCss({ css, props = {}, propFn }) {
  const cssFromPropFnMapping = propFn.map(rule => {
    if (typeof rule === "function") {
      const cssAfterFn = rule(props);
      // if rule function returns object
      /* e.g {
          backgroundColor : white
      }
      */
      if (typeof cssAfterFn === "object") {
        css = css.concat(fromObjectToCss(cssAfterFn));
      }
      return cssAfterFn;
    }
    return rule;
  });

  const allCss = css.map(rule => {
    if (cssFromPropFnMapping.length > 0) {
      return `${rule}${cssFromPropFnMapping.shift()}`;
    }
    return rule;
  });

  return allCss;
}

function createStyleSheet({ css, props, propFn }) {
  const cssStr = preProcessCss({ css, props, propFn }).join("");
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

function styleIt({ tag, css, propFn }) {
  return ({ children, ...restProps }) => {
    const classname = createStyleSheet({ css, props: restProps, propFn });
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

export function css(css, ...propFn) {
  const classname = createStyleSheet({ css, propFn });
  return classname;
}

buildForTags();

export default styled;
