import { compress as c } from 'compress-tag';

function compress(input: string, ..._args: any[]) {
  return c(input);
}

export { compress };
