"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AB_c;
// {}와 object
// ???? {}는 객체 아니야? 근데 왜 문자열이 들어가????
// -> {}와 Object는 모든 타입
const x6 = 'hello';
// const w6: {} = null;
const y6 = 'hi';
// 객체 타이핑할때는, object 지양, interface, type, class 지향
const xx6 = 'hi'; // 이게 진짜 객체
const yy6 = { hello: 'world' };
const z6 = 'hi';
// unknown = {} | null | undefined
if (z6) {
    z6; // unknown을 if문안에 넣으면 {}이 나옴
    // {}는 객체가 아니라 모든 타입을 가리킨다
}
else {
    z6; // unknown
}
const aaaa = { a: 'hello', b: 'world' };
// 실수로 바꾸려는 것을 못바꾸게 막아줌
aaaa.a = '123'; // 이렇게 바꿀 수 있음 (js)-> 읽기 전용으로 못바꾸게 함(ts)
const bbbb = { a: 3, b: 4 };
const dddd = { Human: 5, Mammal: 6, Animal: 4 };
const ffff = { Human: 'Animal', Mammal: 'Mammal', Animal: 'Human' };
// 클래스의 새로운 기능들
class AB {
    constructor(a, b = 123) {
        _AB_c.set(this, 123); // js private (protected 안됨)
        // ts에서의 private을 실제 코드로 바꾸면 public으로 바뀜(바뀌기 전 정교함)
        this.d = '123'; // ts private(이거 쓰는게 낫다)
        this.a = a;
        this.b = b;
    }
    method() {
        console.log(__classPrivateFieldGet(this, _AB_c, "f"), this.d);
    }
}
_AB_c = new WeakMap();
// 클래스를 가리키는 것이 아니라 아래의 것을 가리킴(클래스의 이름은 instance를 가리킨다)
const ab = new AB('123');
// 클래스 자체를 가리키는 것 = 클래스 자체의 타입
const abab = AB;
// ts에만 있는 키워드 implements(구현하다), private, protected
// 클래스는 인터페이스를 구현할 수 있다(클래스는 인터페이스를 따라야함)
class BBB {
    constructor() {
        this.a = '123'; // 여러개 복합해서 쓰는 것 가능
        this.b = 'world';
        this.c = 'wow'; // public인데 이건 기본이여서 안써도 됨
    }
    method() {
        console.log(this.a); // private이렇게는 사용 가능9
        console.log(this.c);
        console.log(this.b); // protect도 안에서 사용 가능
    }
}
class C extends BBB {
    method() {
        console.log(this.a); // 접근안됨
        console.log(this.c);
        console.log(this.b); // 상속한 것까지는 사용 가능(부모의 protected쓸 수 있음)
    }
}
new C().a; // private은 접근하지 못함 + class BBB안에서만 써야함
new C().b; // 인스턴스에서 protect쓰지 못함
new C().c; // 인스턴스에서 접근되는 것이 public
// 그럼 private, protected 다른 점? -> 상속받았을 때 쓸수 있냐 없냐
//           public      protected      private
// 클래스 내부    O            O              O
// 인스턴스      O            X              X
// 상속 클래스   O            O              X
// js로 변환하면 private, protected 전부 사라짐
// ts 자체가 type 검사할때만 이렇게 부여를 해준 것
// 굳이 클래스에 인터페이스를 임플리먼츠 하지 않아도 됨
// 인터페이스에서 하는 것 거의 다 클래스에서 할 수 있음
// js에서도 남아있어야하면 class(interface는 사라짐)
