// type에 소문자 쓰자~
const s: string = 'hello';
const t: String = 'hell';

// type을 custom하게 만들 수 있음 + type을 정교하게 만들어줌
type World = 'world' | 'hell';
const w: World = 'world';

const v = `hello ${w}`;

type Greeting = `hello ${World}`; // type Greeting = hello world
const x: Greeting = 'hello hell'; // hello hell, hello world 추천 2개 뜸

// type 부분을 지우면 js 여야한다
let arr4: string[] = [];
let arr5: Array<string> = [];

// rest parameter
function rest(a, ...args: string[]) {
  console.log(a, args); // 1, [2, 3]
}

rest('1', '2', '3');

const tuple1: [string, number] = ['1', 1];
// tuple1[2] = 'hello'; // error -> 갯수 고정
tuple1.push('hello'); // error 안남

// enum, keyof, typeof
// enum -> 위에서부터 0, 1, 2, 3이라는 값이 부여됨(값을 지정하지 않았을 때)
// 값 지정도 가능, number, string 모두 가능
// 여러개의 변수를 하나의 그룹으로 묶고 싶을 때 많이 사용
const enum EDirection {
  Up = 3,
  Down,
  Left,
  Right,
}
const u = EDirection.Up; // 3
const l = EDirection.Left; // 5

// enum아닌 일반 객체 사용법
const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

// dir: Using the enum as a parameter
// dir: 위에서 정의된 4개 중에 하나여야함
function walk(dir: EDirection) {}

// enum을 안쓰면 이렇게 해야함 -> 이거 하기 싫으면 enum 쓰면 됨
type Direction = (typeof ODirection)[keyof typeof ODirection];
function run(dir: Direction) {}

walk(EDirection.Left);
run(ODirection.Right);

const obj1 = { a: '123', b: 'hello', c: 'world' } as const;
// a b c만 꺼내오고 싶다
// type Key = keyof obj1; // error -> obj1은 값인데 타입으로 쓰려고 하고 있어 error
// 값을 타입으로 쓰고 싶을 때, typeof 붙이면 됨
type Key = keyof typeof obj1; // typeof obj1에서 key만 뽑아내고 싶다 -> keyof
type Key1 = (typeof obj1)[keyof typeof obj1]; // value만 가져오고 싶다
// as const 붙이면 엄격하게 타이핑함. 고정된 값으로 타이핑해줌

type A = { aaa: string }; // A라는 type을 선언한다 + 내가 직접 type을 만든 것
// const aaa: { aaa: string } = { aaa: 'hello' }; // 이렇게 한번에 적어줘도 됨
const aaa: A = { aaa: 'hello' };

interface B {
  aaa: string;
}
const bbb: B = { aaa: 'hello' };

// union (|)
// 이 함수부터 잘못됐기 때문에 그 다음부터 계속 문제 생김
function addF(x: string | number, y: string | number): string | number {
  return x + y;
}
const re: string | number = addF(1, 2); // 이러면 re는 number인데 string이라고 착각할 수도 있음 -> 문제 생김
// re.charAt(); // error남
// addF부터 잘못된 것임
addF(1, 2);
addF('1', '2');
addF(1, '2');

// interSection(&)
type Inters = string & number; // string이면서 number 여야함 -> 이런건 당연히 없어~

// intersection 객체 적용
type Interse = { hello: 'world' } & { olivu: 'young' };
// 둘 다 만족하면 됨. 둘 중에 하나만 적으면 error
// const inter: Interse = { hello: 'world'}; // error
const inter: Interse = { hello: 'world', olivu: 'young' };

// hello 객체 또는 olivu 객체
type Uni = { hello: 'world' } | { olivu: 'young' };
// hello도 만족, olivu도 만족 -> ok (하나 지워도 괜찮음)
const unio: Uni = { hello: 'world', olivu: 'young' };

// 예시 (type을 상속하는 느낌)
type Animal = { breath: true };
type Mammal = Animal & { breed: true };
type Human = Mammal & { think: true };

const olivu0: Human = { breath: true, breed: true, think: true };

// 위의 type과 비슷하게 interface를 써서 할 수 있음
interface Animal1 {
  breath: true;
}

interface Mammal1 extends Animal1 {
  breed: true;
}

const b2: Mammal1 = { breath: true, breed: true };

// interface는 같은 이름으로 여러번 중복 사용 가능
// type은 중복 안됨
// 선언할때마다 합쳐짐 -> 라이브러리들이 대부분 다 타입이 아니라 인터페이스로 만들어놓음
// 나중에 다름 사람의 인터페이스를 확장할 수 있음
// 남의 라이브러리를 추가, 수정할 수 있음
interface Ts {
  talk: () => void;
}
interface Ts {
  eat: () => void;
}
interface Ts {
  shit: () => void;
}

const TsI: Ts = { talk() {}, eat() {}, shit() {}, sleep() {} };

// 내가 만들어진 라이브러리 수정가능
interface Ts {
  sleep: () => void;
}

// naming rule
// interface I -> 옛날엔 이렇게 변수명 앞에 붙였었음 -> 지금은 안붙임(에디터로 다 알 수 있음)
// type T
// enum E
