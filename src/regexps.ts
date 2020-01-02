// used in
//  - prettify.transformations.ts
const prettifyRegexp = /{(?<color>reset|bright|dim|underscore|blink|reverse|hidden|black|red|green|yellow|blue|magenta|cyan|white|bgBlack|bgRed|bgGreen|bgYellow|bgBlue|bgMagenta|bgCyan|bgWhite)(?<isTherePrevSpace>\s)?(?<text>.*?)}/gmi;

// used in
//  - linebreak.helper.ts
const linebreaksRegexp = /(?<linebreak>\\n)/gmi;

export {
  prettifyRegexp,
  linebreaksRegexp,
};
