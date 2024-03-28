"use strict";
// type에 소문자 쓰자~
const s = 'hello';
const t = 'hell';
const w = 'world';
const v = `hello ${w}`;
const x = 'hello hell'; // hello hell, hello world 추천 2개 뜸
// type 부분을 지우면 js 여야한다
let arr4 = [];
let arr5 = [];
// rest parameter
function rest(a, ...args) {
    console.log(a, args); // 1, [2, 3]
}
rest('1', '2', '3');
const tuple1 = ['1', 1];
// tuple1[2] = 'hello'; // error -> 갯수 고정
tuple1.push('hello'); // error 안남
const u = 3 /* EDirection.Up */; // 3
const l = 5 /* EDirection.Left */; // 5
// enum아닌 일반 객체 사용법
const ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
};
// dir: Using the enum as a parameter
// dir: 위에서 정의된 4개 중에 하나여야함
function walk(dir) { }
function run(dir) { }
walk(5 /* EDirection.Left */);
run(ODirection.Right);
const obj1 = { a: '123', b: 'hello', c: 'world' };
// const aaa: { aaa: string } = { aaa: 'hello' }; // 이렇게 한번에 적어줘도 됨
const aaa = { aaa: 'hello' };
const bbb = { aaa: 'hello' };
// union (|)
// 이 함수부터 잘못됐기 때문에 그 다음부터 계속 문제 생김
function addF(x, y) {
    return x + y;
}
const re = addF(1, 2); // 이러면 re는 number인데 string이라고 착각할 수도 있음 -> 문제 생김
// re.charAt(); // error남
// addF부터 잘못된 것임
addF(1, 2);
addF('1', '2');
addF(1, '2');
// 둘 다 만족하면 됨. 둘 중에 하나만 적으면 error
// const inter: Interse = { hello: 'world'}; // error
const inter = { hello: 'world', olivu: 'young' };
// hello도 만족, olivu도 만족 -> ok (하나 지워도 괜찮음)
const unio = { hello: 'world', olivu: 'young' };
const olivu0 = { breath: true, breed: true, think: true };
const b2 = { breath: true, breed: true };
const TsI = { talk() { }, eat() { }, shit() { }, sleep() { } };
// naming rule
// interface I -> 옛날엔 이렇게 변수명 앞에 붙였었음 -> 지금은 안붙임(에디터로 다 알 수 있음)
// type T
// enum E
