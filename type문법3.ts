// 타입을 집합으로 생각하자
type A3 = string | number; // 넓은 타입
type B3 = string; // 좁은 타입
// any: 전체집합, never: 공집합
type C3 = string & number; // type never

// rule: 좁은 타입 -> 넓은 타입(O), 넓은 타입 -> 좁은 타입(X)

// 객체
type Ao3 = { name: string }; // 속성이 적을수록 넓은 타입
type Bo3 = { age: number };

type ABo3 = Ao3 | Bo3;

// type Co3 = { name: string; age: number }; // 속성이 상세할수록(구체적일수록) 좁음
type Co3 = Ao3 & Bo3; // 위와 동일

const ab3: ABo3 = { name: 'olivu0' };
// const c3: Co3 = { name: 'olivu0', age: 28 };
// const c3: Co3 = ab3; // error
// const ab3: ABo3 = c3; // 좁은 c3을 넓은 곳에 넣음

// 객체 리터럴을 바로 넣으면 타입이 넓냐 좁냐의 검사 + 잉여속성 검사를 하나 더 함
// const c3: Co3 = { name: 'olivu0', age: 28, married: false };

// 위의 error을 없애기 위해서는 중간에 데이터를 변수로 빼주면 됨
const obj3 = { name: 'olivu0', age: 28, married: false };
const c3: Co3 = obj3;

// 좁은 타입을 넓은 타입에 대입했는데 왜 안되지? 할 때는 잉여 속성 검사라는 새로운 특성이 생겨서 안되는 거다 -> 따로 데이터를 변수에 집어넣자

// void의 두 가지 사용법
