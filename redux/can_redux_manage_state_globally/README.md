# redux는 전역 상태관리가 가능할까?

### 동기

- react에서 redux를 사용하기 위해 react-redux를 통해서 바인딩을 해준다.
- react-redux에서 context api를 활용하는 것으로 알고 있는데, 그렇다면 redux 자체에서는 전역에서 상태관리를 못해주는 것일까?라는 의문이 들어서, 직접 해보기로 했습니다.

### 실습 내용

- store를 정의해준다. 값을 1 증가시키는 reducer를 만든다.
- 해당 store를 export 해준다.
- fileA 인스턴스에서 dispatch를 해줘서 값을 1 증가시킨다.
- 다른 파일의 클래스인 FileB의 인스턴스에서 store.getState를 해줬을때 value가 1이 나오는 지 확인

### 실습 실행 방법

- `index.js`에서 파일 실행

### 결과

```
FileA started
{ value: 1 }
incremented
FileB started
{ value: 1 }
```

- 위 결과처럼 redux의 store는 전역에서 공유가 가능하다...
- 그렇다면, react-redux를 왜 사용해주는 것일까?..라는 생각이드네...더 편하게 사용해줄 수 있어서? 지금 생각해보면 단순히 import를 각각 해주지 않기 위해서가 아닐까 한다.
