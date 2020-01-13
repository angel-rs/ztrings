import {
  simplify,
  compress,
  prettify,
  linebreak,
} from './transformations';
import {
  restoreLineBreaks,
} from './helpers';

const isDev = false;

const s = simplify,
      c = compress,
      p = prettify;

// NOTE: the `compress` transformation removes all the linebreaks `\n`
//       so, as a workaround we treat linebreaks as as `$LINEBREAK$`
//       that way, for each `$LINEBREAK$` we restore `\n` in the original position.
const transformations = [
  linebreak,
  simplify,
  compress,
  prettify,
];

const chain = (string: string, transformations: any, ...args: any) =>
  transformations.reduce((input: any, _: string, index: number) => {
    const output = transformations[index](input, ...args);
    if (isDev) {
      console.log('-----------------------');
      console.log(`INPUT: ${JSON.stringify(input)}`);
      console.log(`INPUT RAW: ${input.raw}`);
      console.log(`ARGS: ${JSON.stringify(args)}`);
      console.log(`OUTPUT [${transformations[index].name}]: ${output}`);
      console.log(`OUTPUT RAW [${transformations[index].name}]: ${JSON.stringify(output)}`);
      console.log('-----------------------');
    }
    return output;
  }, string);

const z = (input: any, ...args: any) => {
  let output: string = input;

  if (isDev) {
    console.log(`RAW: ${input.raw}`);
    console.log(`ARGS: ${JSON.stringify(args)}`);
    console.log('-----------------------');
  }

  output = chain(input, transformations, ...args);
  output = restoreLineBreaks(output);
  return output;
}

export {
  z, // zstringify
  s, // simplify/simplur
  c, // compress/compress-tag
  p, // prettify/colors
};
