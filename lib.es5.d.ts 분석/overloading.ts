// 타입 오버로딩 -> 같은 타입을 여러번 선언하는 것
declare function add(x: number, y: number): number;
declare function add(x: number, y: number, z: number): number;
// 함수 구현부 안만드려고 declare -> 타입 정의만 하고 실제 코드는 다른 곳에 있다고 ts를 속일 수 있음, body 구현 안해도 됨

add(1, 2);
add(2, 3, 4);
// 가장 베스트는 아래의 것
declare function add(x: number, y: number, z?: number): number;

declare function add(x: string, y: string): string;
add('1', '2');

// filter 함수 2개 있었음 -> 오버로딩의 실제 예시
// 타이핑을 한줄에 한번에 하는 것이 가장 베스트지만 타이핑을 한가지 방식으로 못하겠다 할 때, 두가지로 하는 것

// 함수에서만 오버로딩 되는 것이 아니라 클래스, 인터페이스에서도 오버로딩이 가능함

interface Add {
  // 오버로딩
  (x: number, y: number): number;
  (x: string, y: string): string;
}
// 구현부가 any여도 ts가 알아서 오버로딩 파트를 찾아줌
const addOver: Add = (x: any, y: any) => x + y;
addOver(1, 2);
addOver('1', '2');
// addOver(1, '2'); // error

class AddClass {
  add(x: number, y: number): number;
  add(x: string, y: string): string;
  add(x: any, y: any) {
    return x + y;
  }
}

const AddClassValue = new AddClass().add(1, 2);
