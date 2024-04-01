// forEach 타입 직접 만들기
// 내가 직접 forEach를 만든다
interface Arr<T> {
  forEach(callback: (item: T, index: number) => void): void; // return 값 없을 때
}

// 아래를 보고 위의 interface Arr을 직접 만드는 중
const aforEach: Arr<number> = [1, 2, 3];

// index를 쓸 때, Arr에서 index 만들어도 상관없음 -> 처음부터 만들지 않아도 됨
aforEach.forEach((item, index) => {
  console.log(item, index);
  item.toFixed(1);
});

aforEach.forEach((item) => {
  console.log(item);
  return '3';
});

const bforEach: Arr<string> = ['1', '2', '3'];

bforEach.forEach((item) => {
  console.log(item);
  item.charAt(3);
});

bforEach.forEach((item) => {
  console.log(item);
  return '3';
});

const cforEach: Arr<string | number> = ['1', 2, '3'];
cforEach.forEach((item) => {
  console.log(item);
});

cforEach.forEach((item) => {
  console.log(item);
  return '3';
});

// 타입 만들어놓고 여러가지 예시로 검증을 하자
