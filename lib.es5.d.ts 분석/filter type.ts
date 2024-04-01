// filter 타입 직접 만들기
interface Arr<T> {
  filter<S extends T>(callback: (v: T) => v is S): S[];
}

const aFilter: Arr<number> = [1, 2, 3];
const bFilter = aFilter.filter((v): v is number => v % 2 === 0); // [2] number[]

const cFilter: Arr<number | string> = [1, '2', 3, '4', 5];
const dFilter = cFilter.filter((v): v is string => typeof v === 'string'); // ['2', '4] string[]
const predicateE = (v: number | string): v is number => typeof v === 'number';
const eFilter = cFilter.filter(predicateE); // [1, 3, 5] number[];
