import * as simplur from 'simplur';
import { compress } from 'compress-tag';

export const z = (s: any, ...args: any) => {
  const simplified = simplur(s, ...args);
  const compressed = compress(simplified, ...args);
  return compressed;
};

