"use strict";
// unknown과 any
// any 쓰기보단 unknown을 쓰자
// any를 쓰면 그 다음부터는 type checking을 하지 않음. type 검사 포기 선언
// unknwon은 error가 뜸
// type을 직접 정해줘야함
const a4 = {
    talk() {
        return 3;
    },
};
// any는 이 다음부터 타입 검사를 포기함
// const b4: any = a4.talk();
// b4.method(); // error 나야하는데 error 안남. 존재하지 않는 것 써도 error 안남
// unknown은 내가 지금 당장 타입을 모르겠을 때 씀
const b4 = a4.talk();
b4.talk; // 나중에 이렇게 쓸 때, 타입을 직접 정의해줌
// -> 타입검사를 포기한 any와는 다름
try {
}
catch (error) {
    // error.message // error는 unknown형식입니다 -> error
    error.message; // 직접 type 정해줌(typescript가 제공하는 error의 기본 타입 Error)
}
// undefined는 void에 대입가능하다
function funca() {
    return undefined;
}
// null은 void에 대입가능하지 않다
function funcb() {
    return null;
}
// 타입 가드
function numOrStr(a) {
    // 이 안에서 다짜고짜 이렇게 쓰면 error
    // typescript는 모든 가능성을 고려함 -> a가 number이면 당연히 toFixed 쓸 수 있지만 string이면 error 나기 때문에 경고를 띄워줌
    // a.toFixed(1);
    a.toFixed(1); // a가 number이 확실하다는 것을 알려줌 -> 위험한 코드(내가 실수했을 수도 있음) -> as 왠만하면 쓰지 말자
    // type guard 기법
    // a가 숫자인 것이 확실함
    if (typeof a === 'number') {
        a.toFixed(1);
    }
    else {
        // typescript else문도 파악 가능 -> if가 number이니까 else는 string이겠구나
        a.charAt(3);
    }
    if (typeof a === 'string') {
        a.charAt(3);
    }
    if (typeof a === 'boolean') {
        a.toString(); // a의 type: never, 절대 실행될 수 없는 코드(never가 되면 사용할 수 없음)
    }
}
numOrStr('123');
numOrStr(1);
function numOrNumArray(a) {
    // 내가 받은 매개변수가 배열인지 아닌지는 어떻게 판단?
    if (Array.isArray(a)) {
        a.concat(4); // number[]
    }
    else {
        a.toFixed(3); // number
    }
}
numOrNumArray(123);
numOrNumArray([1, 2, 3]);
// -> 원시값일때는 typeof 쓰고, 배열일때는 Array.isArray 쓰고
// 클래스 이름 자체가 type자리에 올 수 있음
// 클래스 자체의 타입은 typeof 클래스(typeof classA)이다
class classA {
    aaa() { }
}
class classB {
    bbb() { }
}
// 클래스 이름이 type자리에 올 수 있지만 클래스 자체를 의미하는게 아니라 new classA() 한 얘들(인스턴스)을 의미함
function aOrB(param) {
    // param은 반드시 classA라는 것이 보장됨
    if (param instanceof classA) {
        param.aaa();
    }
}
aOrB(classA()); // error
aOrB(new classA());
aOrB(new classB());
// 내부의 속성으로 구분하게 해줌(같은 속성이지만 값이 다름)
function typeCheck(a) {
    if (a.type === 'b') {
        a.bbb;
    }
    else if (a.type === 'c') {
        a.ccc;
    }
    else {
        a.ddd;
    }
}
// 속성 이름으로 구분
function typeCheckName(a) {
    if ('bbb' in a) {
        a.type;
    }
    else if ('ccc' in a) {
        a.ccc;
    }
    else {
        a.type;
    }
}
// 객체에 태그를 달아둔다 + 라벨을 달아둔다 -> 이런 습관 들이는 것이 좋음
// 타입검사하기 편하게 객체 만들때는 type을 하나씩 넣어주자
// 그래야 if문 써서 구별하기 쉬움
// type을 달아두지 않았다면 차이점을 찾아라
// const human4 = { type: 'human4', talk()};
// const dog4 = { type: 'dog4', bow() };
// const cat4 = { type: 'cat4', meow() };
if ('talk' in a) {
    // a가 human4인 것을 찾아낼 수 있음
}
// 커스텀하게 함수를 만들어줄 수도 있음
function catOrDog(a) {
    // 타입 판별을 내가 직접 만듬
    if (a.meow) {
        return false;
    }
    return true;
}
function pet(a) {
    // 위의 함수 사용(직접 만든 타입 가드)
    if (catOrDog(a)) {
        console.log(a.bow);
    }
    // 이렇게 써도 무방
    if ('meow' in a) {
        console.log(a.meow);
    }
}
// return 값에 is가 들어가있는 것들은 커스텀 타입가드 함수이다
// 커스텀 타입가드 함수는 if문 안에 쓰는 것이다
// if문 안에 써서 ts한테 정확한 타입이 뭔지 알려주는 것
// type 판별하는 부분은 내가 직접 코딩을 해야함
