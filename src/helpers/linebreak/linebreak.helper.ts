import {
  linebreaksRegexp,
} from '../../regexps';

const getLineBreaks = (input: any, ...args: any) => {
  const linebreaks = [];
  let temp: any = null;

  console.log(`RAW INPUT`);
  console.log(String.raw(input, ...args));

  do {
    temp = linebreaksRegexp.exec(String.raw(input, ...args));
    if (temp?.index) {
      const { index } = temp;
      linebreaks.push(index);
    }
  } while (temp);

  return linebreaks;
};

const restoreLineBreaks = (input: string, linebreaks: any): string => {
  let output: string = input;

  console.log(`RAW INPUT`);
  console.log(input);
  console.log(`LINEBREAKS`);
  console.log(linebreaks);

  linebreaks.forEach((linebreakIndex: number) => {
    output = `${output.substr(0, linebreakIndex)}\n${output.substr(linebreakIndex)}`;
  });

  return output;
};

export {
  getLineBreaks,
  restoreLineBreaks,
};
