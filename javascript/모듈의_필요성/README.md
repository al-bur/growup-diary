## 동기

- javascript 파일을 모듈화하지 않으면 전역에 선언된 변수들이 서로 침범한다는 것을 직접 테스트해보기 위해

## 결과

- 정말로, 서로 침범한다...
- javascript 파일을 모듈로서 작동시키기 위해서는 script tag에 type attribute를 추가하여 module이라는 값을 줘야한다.
