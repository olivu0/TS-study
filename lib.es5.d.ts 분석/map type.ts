// map 타입 직접 만들기
interface Arr<T> {
  map<S>(callback: (v: T, i: number) => S): S[];
}

const aMap: Arr<number> = [1, 2, 3];
const bMap = aMap.map((v, i) => v + 1); // [2, 3, 4];
const cMap = aMap.map((v) => v.toString()); // ['2', '3', '4'];
const dMap = aMap.map((v) => v % 2 === 0); // [false, true, false]; boolean[]

const eMap: Arr<string> = ['1', '2', '3'];
const fMap = eMap.map((v) => +v); // 문자열의 배열을 숫자로 바꾸는
