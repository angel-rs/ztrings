import {
  linebreaksRegexp,
} from '../../regexps';

const linebreakCode = '$LINEBREAK$';

function linebreak(input: any, _args?: any[]) {
  return input.map((s: any) => {
    return s.replace(linebreaksRegexp, linebreakCode)
  })
}

export {
  linebreak,
  linebreakCode,
};
