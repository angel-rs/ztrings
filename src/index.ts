// @ts-ignore
import * as simplur from 'simplur';
import { compress } from 'compress-tag';

export const z = (s: any, ...args: any) => {
  console.log(s);
  const simplified = simplur(s, ...args);
  const compressed = compress(simplified, ...args);
  console.log(`simplified: ${simplified}`);
  console.log(`compressed: ${compressed}`);
};

export const run = () => {
  z`
    I have ${2} kitt[en|ies]\n\n

    hola

    {red funciono}
  `
}

