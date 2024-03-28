"use strict";
// 옵셔널, 제네릭 기본
// 옵셔널
// ? : 있어도 되고 없어도 되는 것
// 갯수가 정해져 있는데 몇개만 옵셔널로 하고 싶을 때
function abc(a, b, c) { }
// 4개 짜리도 되게 하려면? -> 갯수 상관 없게 받을 수 있음
function abcd(...args) { }
abc(1);
abc(1, 2);
abc(1, 2, 3);
abc(1, 2, 3, 4); // error
abcd(1, 2, 3, 4);
// 옵셔널은 interface나 type에서도 됨
// b는 있어도 되고 없어도 됨 + 대신 c같은 다른 것은 있으면 안됨
let obj7 = { a: 'hello', b: 'world' };
obj7 = { a: 'hello' };
// 제네릭
// 제네릭 왜 필요할까?
// 아래 함수는 내가 원하는 대로 작동하지 않음 -> 잘못된 함수
function add(x, y) {
    return x + y;
}
// 아래 것을 원해서 add함수를 저렇게 만들어 준 것인데 이건 잘못된 것
add(1, 2); // 3
add('1', '2'); // '12'
// 아래처럼 될 가능성을 배제하지 못했기 때문에 이건 잘못됐다
add(1, '2'); // '12'
add('1', 2); // '12'
// 지금 현재 type은 모르겠는데 나중에 정할래요 -> type을 변수처럼 만드는 것
// function에는 이름 뒤에다가 보통 <T>라고 많이 적음
function addG(x, y) {
    return x + y;
} // 같은 타입은 같은 문자로 표현함
// 함수를 만들때는 무슨 타입인지 모르다가 실제로 함수를 사용할 때 타입이 정해짐
addG(1, 2);
addG('1', '2');
addG('1', 2); // 이제 이런거 안됨. 타입이 서로 다름
addG(1, '2');
// T가 어떤 타입이든 다 될 수 있다 -> 너무 범위가 넓음 -> T에 제한을 둘 수 있음
addG(true, false); // 이런 것도 됨 -> 원치 않음
// T의 타입을 string으로 제한함
function addGe(x, y) {
    return x + y;
}
addGe(1, 2); // 안됨
addGe('1', '2');
function addGen(x, y) {
    return x + y;
}
addGen(1, 2);
addGen('1', '2');
addGen(true, false); // 안됨
function addGene(x, y) {
    return x + y;
}
addGene(1, '2');
// 제네릭에 extends를 하면 제한을 둘 수 있음
function addGener(x) {
    return x;
}
addGener({ a: 'hello' });
function addGeneri(x) {
    return x;
}
addGeneri(['1', '2', '3']);
// 콜백함수의 형태로 제한
function addGeneric(x) {
    return x;
}
addGeneric((a) => +a); // a: string, +a : number
// 모든 함수 가능 -> 제한걸때는 any 써도 됨
function addGenericAny(x) {
    return x;
}
function addGenericConstructor(x) {
    return x;
}
// 클래스 자체를 넣고 싶을 때
class Aconstructor {
} // 생성자
addGenericConstructor(Aconstructor);
// <T extends {...}> // 특정 객체
// <T extends any[]> // 모든 배열
// <T extends (...args: any) => any> // 모든 함수
// <T extends abstract new (...args: any) => any> // 생성자 타입
// <T extends keyof any> // string | number | symbol
// 기본값 타이핑
// 기본값을 통해서 자동으로 추론을 함
// 기본값 있을 때 헷갈릴 수 있으니 주의하기
const basic = (b = 3, c = 5) => {
    return '3';
};
const basicObj = (b = { children: 'olivu0' }) => {
    return;
};
// react -> jsx에서는 <T>부분이 error가 남, <div>같은 거랑 헷갈려서
const basicGeneric = (x, y) => ({ x, y });
// react일때는
const reactGeneric = (x, y) => ({ x, y });
const reactGeneric2 = (x, y) => ({ x, y });
const reactGeneric3 = (x, y) => ({ x, y });
const result7 = reactGeneric(1, 2);
const result77 = reactGeneric2(1, 2);
const result777 = reactGeneric3(1, 2);
