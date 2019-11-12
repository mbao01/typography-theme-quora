// @flow
import gray from "gray-percentage"
import type { OptionsType } from "Types"

const theme: OptionsType = {
  title: "Quora",
  baseFontSize: "16px",
  baseLineHeight: 1.4,
  headerFontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen-Sans",
    "Ubuntu",
    "Cantarell",
    "Helvetica Neue",
    "sans-serif",
  ],
  bodyFontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen-Sans",
    "Ubuntu",
    "Cantarell",
    "Helvetica Neue",
    "sans-serif",
  ],
  googleFonts: [
    {
      name: 'Cantarell',
      styles: ['400', '700&display=swap']
    },
  ],
  scaleRatio: 2,
  bodyColor: "hsla(0,0%,0%,0.98)",
  headerWeight: 600,
  bodyWeight: "normal",
  boldWeight: 600,
  // Quora has all block elements use 5/7 rhythm which is equivalent to the base font size.
  blockMarginBottom: 5 / 7,
  overrideStyles: ({ rhythm }) => ({
    "body": {
      color: gray(27)
    },
    "h1,h2,h3,h4,h5,h6,ul,ol,li": {
      margin: 0,
      padding: 0,
    },
    "ul,ol": {
      listStyle: "none",
    },
    a: {
      background: "transparent",
      textDecoration: "none",
      color: "#2b6dad",
    },
    "a:hover,a:active": {
      textDecoration: "underline",
      outline: 0,
    },
    "input[type='text'],input[type='email']": {
      outline: 0,
    },
    "textarea": {
      resize: "none",
    },
    "button,input,optgroup,select,textarea": {
      color: gray(27),
    },
    "code": {
      whiteSpace: "pre",
      fontFamily: "Consolas, monaco, monospace",
    },
    "address,blockquote": {
      paddingLeft: `calc(${rhythm(5 / 7)} - 1px)`,
      color: gray(47),
      borderLeft: `2px solid ${gray(87)}`,
      margin: 0,
    },
    "pre": {
      margin: 0,
    },
    "hr": {
      borderStyle: "none",
      border: 0,
    },
    "p": {
      margin: 0,
      padding: 0,
    },
    "img": {
      color: "transparent",
    },
  }),
}

export default theme