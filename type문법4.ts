// unknown과 any
// any 쓰기보단 unknown을 쓰자
// any를 쓰면 그 다음부터는 type checking을 하지 않음. type 검사 포기 선언
// unknwon은 error가 뜸
// type을 직접 정해줘야함

interface A4 {
  talk: () => void;
}

const a4: A4 = {
  talk() {
    return 3;
  },
};

// any는 이 다음부터 타입 검사를 포기함
// const b4: any = a4.talk();
// b4.method(); // error 나야하는데 error 안남. 존재하지 않는 것 써도 error 안남

// unknown은 내가 지금 당장 타입을 모르겠을 때 씀
const b4: unknown = a4.talk();
(b4 as A4).talk; // 나중에 이렇게 쓸 때, 타입을 직접 정의해줌
// -> 타입검사를 포기한 any와는 다름

try {
} catch (error) {
  // error.message // error는 unknown형식입니다 -> error
  (error as Error).message; // 직접 type 정해줌(typescript가 제공하는 error의 기본 타입 Error)
}

// undefined는 void에 대입가능하다
function funca(): void {
  return undefined;
}

// null은 void에 대입가능하지 않다
function funcb(): void {
  return null;
}

// 타입 가드
function numOrStr(a: number | string) {
  // 이 안에서 다짜고짜 이렇게 쓰면 error
  // typescript는 모든 가능성을 고려함 -> a가 number이면 당연히 toFixed 쓸 수 있지만 string이면 error 나기 때문에 경고를 띄워줌
  // a.toFixed(1);
  (a as number).toFixed(1); // a가 number이 확실하다는 것을 알려줌 -> 위험한 코드(내가 실수했을 수도 있음) -> as 왠만하면 쓰지 말자
  // type guard 기법
  // a가 숫자인 것이 확실함
  if (typeof a === 'number') {
    a.toFixed(1);
  } else {
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

function numOrNumArray(a: number | number[]) {
  // 내가 받은 매개변수가 배열인지 아닌지는 어떻게 판단?
  if (Array.isArray(a)) {
    a.concat(4); // number[]
  } else {
    a.toFixed(3); // number
  }
}

numOrNumArray(123);
numOrNumArray([1, 2, 3]);

// -> 원시값일때는 typeof 쓰고, 배열일때는 Array.isArray 쓰고

// 클래스 이름 자체가 type자리에 올 수 있음
// 클래스 자체의 타입은 typeof 클래스(typeof classA)이다
class classA {
  aaa() {}
}
class classB {
  bbb() {}
}
// 클래스 이름이 type자리에 올 수 있지만 클래스 자체를 의미하는게 아니라 new classA() 한 얘들(인스턴스)을 의미함
function aOrB(param: classA | classB) {
  // param은 반드시 classA라는 것이 보장됨
  if (param instanceof classA) {
    param.aaa();
  }
}
aOrB(classA()); // error
aOrB(new classA());
aOrB(new classB());

type B4 = { type: 'b'; bbb: string };
type C4 = { type: 'c'; ccc: string };
type D4 = { type: 'd'; ddd: string };

function typeCheck(a: B4 | C4 | D4) {
  //내부의 속성으로 구분하게 해줌
  if (a.type === 'b') {
    a.bbb;
  } else if (a.type === 'c') {
    a.ccc;
  } else {
    a.ddd;
  }
}
