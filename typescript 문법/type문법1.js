"use strict";
const a = 5; // type이 5라고 vscode에서 알아서 추론해줌
// const a: number = 5; // a를 number라고 type을 지정해주는 순간 더 부정확해짐
// 5라는 정확한 type을 더 넓은 범위의 부정확한 타입으로 만들어버림
const b = 'hi';
const c = true;
const d = null;
const e = undefined;
const f = '123';
// 함수 타이핑 하는 방법
// 방법1
// function add1(x: number, y: number): number {
//   return x + y;
// }
function add1(x, y) {
    return x + y;
}
const result = add1(1, 2); // result type이 number라고 알아서 추론해줌
// 방법2
const add2 = (x, y) => x + y;
const add4 = (x, y) => x + y;
const add3 = (x, y) => x + y;
// 객체
// const obj: { lat: number; lon: number } = { lat: 37.5, lon: 127.5 };
const obj = { lat: 37.5, lon: 127.5 };
// 배열
// const arr: string[] = ['123', '456'];
const arr = ['123', '456']; // type이 string이라고 알아서 추론해줌
// const arr2: number[] = [123, 456];
const arr2 = [123, 456];
// <>: 제네릭
const arr3 = [123, 456];
// 튜플: 길이가 고정된 배열
const tuple = [123, 456, 'hello'];
// 나는 값을 무조건 true만 받을 거야
const g = true;
// 숫자 고정
const h = 5;
// const true하면 i는 절대 바뀔 일이 없음, i는 평생 true
// type이 boolean일 필요가 없음 -> type은 최대한 정확하게 잡는 것이 중요함
const i = true;
// type 빼고 선언만
function add5(x, y) {
    return x + y;
}
let aa = 123; // aa type number라고 추론 (aa: number)
// 억지로 문자열을 다른 것으로 바꿀 수 있음
// aa = 'hello'; // error
// 'hello'의 type을 강제로 바꿔줌
aa = 'hello'; // error 사라짐 + as 뒷부분 모두 사라짐
// never 타입과 느낌표(non-null assertion)
try {
    // const array = []; // type: never
    // array[0];
    const array = []; // 빈배열을 선언할 때는 반드시 타이핑 지정하기
    array.push('hello'); // 그래야 Push 가능
}
catch (error) {
    error;
}
// 태그를 가리키는 Element 타입이 있음
// const head: Element = document.querySelector('#head');
// console.log(head);
// const head: Element | null
const head = document.querySelector('#head');
if (head) {
    head.innerHTML = 'hello world'; // f12 누르면 이미 innerHtml type이 지정되어 있음
    console.log(head);
}
// 나는 head가 있음에 전재산을 걸 수 있어! head가 없어서 발생하는 에러는 내가 다 책임질거야!!! 할 때 쓰는게 마지막에 느낌표
const head1 = document.querySelector('#head');
