interface Axios {
  get(): void;
}
class CustomError extends Error {
  response?: {
    data: any;
  };
}
declare const axios: Axios;

// 위에서 타입을 직접 만들어서 밑에서 발생하는 에러들을 해결
async () => {
  try {
    await axios.get();
  } catch (err) {
    // if (err instanceof CustomError) {
    //   const customError = err as CustomError;
    //   console.error(customError.response?.data);
    //   // err.response?.data //위에서 err이 CustomError라고 정의했는데 다시 unknown으로 바뀜 -> 일회성이기 때문에 매번 수정해야함
    //   customError.response?.data; // 계속 이렇게 해주면 코드 계속 반복
    // }
    if (err instanceof CustomError) {
      console.error(err.response?.data);
      err.response?.data;
    }
  }
};
