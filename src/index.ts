import {
  simplify,
  compress,
  prettify,
} from './transformations';
import {
  getLineBreaks,
  restoreLineBreaks,
} from './helpers';

const isDev = false;

const s = simplify,
      c = compress,
      p = prettify;

// NOTE: in one of the transformations the linebreaks `\n` gets lost
//       so, as a workaround we prepend `\` for each `\n`and add it back again
const transformations = [
  simplify,
  compress,
  prettify,
];

const chain = (string: string, transformations: any, ...args: any) =>
  transformations.reduce((input: string, _: string, index: number) => {
    const output = transformations[index](input, ...args);
    if (isDev) {
      console.log(`${transformations[index].name}: ${output}`);
      console.log('-----------------------');
    }
    return output;
  }, string);

const z = (input: any, ...args: any) => {
  const linebreaks = getLineBreaks(input, ...args);
  const ztringified = chain(input, transformations, ...args);
  const output = restoreLineBreaks(ztringified, linebreaks);
  return output;
}

const run = () => {
    console.log(z`
    I have ${23} color[|s]\n\n\n\n

    {bright bright}
    {dim dim}
    {underscore underscore}
    {blink blink}
    {reverse reverse}
    {hidden hidden}
    {black black}
    {red red}
    {green green}
    {yellow yellow}
    {blue blue}
    {magenta magenta}
    {cyan cyan}
    {white white}
    {bgBlack bgBlack}
    {bgRed bgRed}
    {bgGreen bgGreen}
    {bgYellow bgYellow}
    {bgBlue bgBlue}
    {bgMagenta bgMagenta}
    {bgCyan bgCyan}
    {bgWhite bgWhite}
    {bgRed dim Test}
  `);
};

export {
  z, // zstringify
  s, // simplify/simplur
  c, // compress/compress-tag
  p, // prettify/colors
};

run();
