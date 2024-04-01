// 제네릭은 항상 이름 뒤에 온다
// T의 자리 때문에 T가 정해지면 알아서 타입이 정해짐
interface Array<T> {
  forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
  map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
}

const aFor: Array<number> = [1, 2, 3];
aFor.forEach((value) => {
  console.log(value);
});
[1, 2, 3].forEach((value) => {
  console.log(value);
}); // 콘솔에 1, 2, 3
['1', '2', '3'].forEach((value) => {
  console.log(value);
}); // 콘솔에 '1', '2', '3'
[true, false, true].forEach((value) => {
  console.log(value);
});
['123', 123, true].forEach((value) => {
  console.log(value);
});

const strings = [1, 2, 3].map((item) => item.toString()); // ['1', '2', '3'] string[]
const stringsI = [1, 2, 3].map((item) => item + 1); // [2, 3, 4] number[]
