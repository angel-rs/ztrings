import * as s from 'simplur';

function simplify(input: string, ...args: any[]) {
  return s(input, ...args);
}

export { simplify };
