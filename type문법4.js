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
