import colors from './colors';
import { prettifyRegexp } from '../../regexps';
import { ColorGroup } from '../../typings/ColorGroup.d';

function prettify(input: string, ..._args: any[]) {
  let prettified: string = input;
  let temp: any;

  do {
    temp = prettifyRegexp.exec(input);
    if (temp) {
      const [rawSegment] = temp;
      const { groups } = temp;
      const { color, text, isTherePrevSpace } = groups as ColorGroup;
      const prettifiedSegment = `${isTherePrevSpace ? ' ' : ''}${colors[color]}${text}${colors.reset}`;
      prettified = prettified.replace(rawSegment, prettifiedSegment);
    }
  } while (temp);

  return prettified;
}

export { prettify };
