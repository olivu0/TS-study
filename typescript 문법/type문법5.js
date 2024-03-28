// type guard
// 함수 return 값에 is가 들어있다! -> custom type guard 다!
const isRejected = (input) => {
    return input.status === 'rejected';
};
const isFulfilled = (input) => {
    return input.status === 'fulfilled';
};
// Promise -> Pending -> Settled(Fulfilled, Rejected)
// 프로미스 실행하면 비동기 -> 비동기로 실행하는 도중에는 pending 상태였다가 pending이 완료되면 settled 상태로 변하는 것
// settled 상태는 그냥 완료!, 성공(Fulfilled) or 실패(rejected)가 아님
// 성공했든 실패했든 settled는 맞음
// promises.then().catch() // then, catch 둘다 settled
// 그중 then은 Fulfilled, catch는 rejected라 부르는 것
// PromiseSettledResult PromiseRejectedReuslt PromiseFulfilledResult
const promises = await Promise.allSettled([Promise.resolve('a'), Promise.resolve('b')]);
// 에러난 것만 구별하고 싶으면 isRejected 쓰고
// 성공한 것만 구별하고 싶으면 isFulfilled 쓴다
// ts가 성공인지 실패인지는 모르겠고 완료됐다고 생각할래~ errors type: PromiseSettledReuslt(넓게 추론)
// const errors = promises.filter((a) => true);
// promise에서 실패한 것들만 모아놓은 코드 -> 근데 아직 PromiseSettledResult
// const errors = promises.filter((promise) => promise.status === 'rejected');
// 위의 커스텀 타입가드 함수 썼더니 이제야 PromiseRejectedResult
const errors = promises.filter(isRejected);
export {};
