interface Array<T> {
  // unknown보다는 is 커스텀 타입 가이드가 낫지 않을까~?
  filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
  // unknown 은 타입추론 제대로 못해준다
  filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];

  // 추론 -> 대입해보니 결과는 string | number 가 될 수 밖에 없음
  filter<S extends string | number>(predicate: (value: string | number, index: number, array: string | number[]) => value is S, thisArg?: any): S[];

  filter(predicate: (value: string | number, index: number, array: string | number[]) => unknown, thisArg?: any): string | number[];
}

// 위의 것 쓴 것 value % 2는 당연히 number
const filtered = [1, 2, 3, 4, 5].filter((value) => value % 2);
const filtered2 = ['1', 2, '3', 4, '5'].filter((value) => typeof value === 'string'); // ['1', '3',' 5'] string[]으로 문자열만 골라내고 싶음
// 근데 ts가 filtered2 추론을 string | number로 함
// 왜 추론을 못할까? 다시 추론을 하게 하려면?
// 왜 filter 둘 중에 위의 것을 써야할까? S가 남아있기 때문에 string이 될 수도 있고 number가 될 가능성이 있기 때문에, 아래의 것은 string | number로 확정지어짐

// string extends string | number 가능하기 때문에
const predicate = (value: string | number): value is string => typeof value === 'string';
const filtered3 = ['1', 2, '3', 4, '5'].filter(predicate);
