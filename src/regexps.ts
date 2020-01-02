// used in
//  - prettify.transformation.ts
const prettifyRegexp = /(?<isBegginingOfLine>\s)?{(?<color>reset|bright|dim|underscore|blink|reverse|hidden|black|red|green|yellow|blue|magenta|cyan|white|bgBlack|bgRed|bgGreen|bgYellow|bgBlue|bgMagenta|bgCyan|bgWhite)(?<isTherePrevSpace>\s)?(?<text>.*?)}/gmi;

// used in
//  - linebreak.transformation.ts
const linebreaksRegexp = /\N/g;

export {
  prettifyRegexp,
  linebreaksRegexp,
};
