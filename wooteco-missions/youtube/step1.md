# 220308 ~


### 220314 (배운것)

- 테스트 코드를 어떻게 하면 더 테스트 코드답게 작성할 수 있을지 배웠다.
    - ex) 100개까지만 저장할 수 있는지 테스트하는 코드라면, 이전에는 100개의 데이터가 있는지만 체크하고 끝났다면, 지금은 거기에 더해서 새로운 데이터를 저장했을때 에러를 체크해주고 해당 데이터가 저장소에 있는지 없는지도 추가로 테스트하면서 진정으로 기능을 세부적으로 테스트 할 수 있게 되었다.

<br>

- 모달을 닫아주는 이벤트 핸들러를 굳이 document(전역)에 달아줄 필요가 없다. 
    ```
    전역에서 사용되는 document에 click event listener를 추가하는 방식은 불필요한 이벤트 감지가 자주 발생하여 권해 드리기 어렵습니다
    지금은 혼자 개발하지만 대부분은 협업으로 개발을 진행하게 되는데, 이때 전역에 매핑�된 이벤트 리스너는 의도치 않은 동작을 발생시킬 수 있습니다
    이벤트를 매핑하는 영역은 내가 다루고 있는 컴포넌트 영역으로 한정하시면 좋을 것 같습니다
    ```



### 220315 (배운것)

- button type이 `submit`이 아니면 지정해줘야한다.
- css에서 색깔을 변수로 설정해주는 것에 대한 장점을 배웠다.
    ```
    모든 컬러를 다 관리하고 있다는 의미를 부여할 수 있어용
    ```

- monitorEvent의 존재를 알게되었다...


### 220316 (배운것)

- 글쓰기는 `내가 생각하고 있는 것을 내 언어로 정리하기 위해`, `글로 표현하지 않은 생각과 감정이 사라지는 것을 막기위해` 작성한다.


### 220317 (배운것)

- 싱글톤에 대해서 간략히 알게 되었다. 하나만의 인스턴스만이 필요할때..


### 220318 (배운것)

- css html에서 재활용할 수 있도록 추상화를 해보는 연습을 해봐라
 - 이걸 연습하는 방법은 ex) 현재 youtube 미션에서 api를 호출하는 로직이 vimeo로 대체되었을때나 db와 직접 통신할 때 가능한지를 토대로 UI와 도메인이 분리 잘 되었는지 볼 수 있다.
