import { linebreakCode } from '../../transformations/linebreak/linebreak.transformation';

const restoreLineBreaks = (input: any, _args?: any): string => {
  return (String.raw`${input}`).split(linebreakCode).join('\n');
};

export {
  restoreLineBreaks,
};
