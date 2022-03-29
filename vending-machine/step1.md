## 220322

- typescript를 통해 인자와 반환값의 타입을 선언해주는 방법을 배웠다.


## 220323

- customevent, dispatchevent를 통해 view 객체들 사이에서 `인자를 넘길 필요 없이` 자유롭게 `이벤트`를 발생시키고 들을 수 있다.


## 220324

- typescript에서 implements를 활용해서 class를 미리 도메인 설계를 해줄 수있다.

## 220326

- 데이터 바인딩은 두 데이터 혹은 정보의 소스를 일치시키는 기법으로 화면에 보이는 데이터와 브라우저 메모리에 있는 데이터를 일치시키는 것을 말한다.

## 220329

- display:none vs dom 삭제/추가
   - dom을 삭제 추가를 하면 dom tree가 수정이 된다.
   - display:none은 cssom만 수정이 된다.
   ```

    element.appendChild(childRef); and element.removeChild(childRef); both make the browser to manipulate the DOM tree while changing CSS just changes one of the attributes.
   ````
