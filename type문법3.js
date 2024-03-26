"use strict";
const ab3 = { name: 'olivu0' };
// const c3: Co3 = { name: 'olivu0', age: 28 };
// const c3: Co3 = ab3; // error
// const ab3: ABo3 = c3; // 좁은 c3을 넓은 곳에 넣음
// 객체 리터럴을 바로 넣으면 타입이 넓냐 좁냐의 검사 + 잉여속성 검사를 하나 더 함
// const c3: Co3 = { name: 'olivu0', age: 28, married: false };
// 위의 error을 없애기 위해서는 중간에 데이터를 변수로 빼주면 됨
const obj3 = { name: 'olivu0', age: 28, married: false };
const c3 = obj3;
const objb33 = { a: 'hello', b: 'world' };
// const obja33: A33 = { a: 'hello', b: 'world' }; // error -> 변수로 빼보자
// type을 변수로 빼니까 error 안남
const obj33 = { a: 'hello', b: 'world' };
const obja33 = obj33;
// void (3가지 종류 있음 -> notion)
// fa3의 return type 값이 void로 추론됨
function fa3() {
    // return '3'; // error
    // return; // 가능
    return undefined; // 직접적으로 return 값이 없다는 얘기
}
// fb3의 type: void
const fb3 = fa3();
const human = {
    talk() {
        return 3;
    }, // typescript는 return 3을 아예 무시
};
// js에서는 bhuman의 값이 3이어야하지만 typescript에서는 3을 무시
// 애초에 void이면 return을 넣으면 안되는게 맞음 -> typescript가 예외로 만들어버린 것
// const bhuman = human.talk(); // bhuman의 type: void
// bhuman.toString(); // error(void형식에 toString 속성이 없습니다)
// 강제 타입 변환
const bhuman = human.talk();
bhuman.toString();
const human1 = {
    talk() { }, // void니까 talk 메소드 리턴값이 없다
    // talk() { return undefined; }
    // talk() { return; }
    // method의 return 값 존재해도 됨 -> return 값을 사용하지 않겠다는 의미
    // talk() {
    //   return 'abc';
    // }, // 이건 왜 될까?
};
// function forEach() { } // 구현부
let target = [];
// 함수 선언시 callback함수의 type은 undefined != push의 return type: number
// 위 콜백함수 undefined -> number로 바꾸면 error 안남
//                       void로 바꿔도 error 안남 -> 매개변수에서 쓰이는 void는 실제 리턴값이 뭐든 상관하지 않겠다는 의미
// 아래는 둘다 정상적인 코드
forEach([1, 2, 3], (el) => {
    target.push(el);
});
forEach([1, 2, 3], (el) => target.push(el)); // push는 return 값이 number 임 -> error
// void -> undefined 대입 안됨. undefined -> void 대입 가능
// void는 undefined와 다르다!
// 함수에서 선언한 return 값 void랑 method의 void는 서로 다르다
