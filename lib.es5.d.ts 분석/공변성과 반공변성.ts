// 공변성, 반공변성, 이변성, 불변성,,,
// 함수간에 서로 대입할 수 있냐 없냐를 따지는 것

// 매개변수로 문자열을 받아서 숫자를 리턴하는 함수
function agong(x: string): number {
  return +x;
}
agong('1'); // 1

// 문자열 받아서 숫자 | 문자열 리턴하는 타입
type Bgong = (x: string) => number | string;
// 대입 가능할까? O
// agong(number) -> bgong(number | string) 대입 가능
const bgong: Bgong = agong; // 대입이 왜 될까?

// 리턴값을 더 넓은 타입으로 대입할 수 있음

// number|string -> number X 대입 불가
// 리턴값 넓은 타입에서 -> 좁은 타입으로 대입 불가
// (x: string) => string 또는 (x: string) => number
function cgong(x: string): string | number {
  return +x;
}
type Dgong = (x: string) => number;
// let Egong: Dgong = cgong; // 대입 안됨 error

//----------------------------------------------------------

// 매개변수는 좁은 타입으로 대입된다(리턴값이랑 반대다)
// 좁은 타입 -> 넓은 타입 대입 불가
function fgong(x: string | number): number {
  return 0;
}

type Ggong = (x: string) => number;
let Hgong: Ggong = fgong; // 매개변수 좁은 타입 -> 넓은 타입 대입 가능

//-----------------------------------------------------------

function igong(x: string | number): number {
  return 0;
}

type Jgong = (x: string) => number | string;
let k: Jgong = igong;

let lgong = 5; //타입 넓히기
// 타입 좁히기 -> 타입 가드 사용(if문 typeof 사용해서)
