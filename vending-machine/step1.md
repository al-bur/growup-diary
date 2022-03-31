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


- textcontent를 활용해서 DOM 내용 변경해주는 것
  - 요소 노드에 자식 노드가 있는 경우 요소 노드의 textContent 프로퍼티에 문자열을 할당하면 요소 노드의 모든 자식 노드가 제거되고 할당한 문자열이 텍스트로 추가된다.


- label for와 id의 관계
   - label과 id를 가진 요소를 연결해주기 위해
   - 왜?
     ```
      <label> 을 <input> 요소와 연결하면 몇 가지 이점이 있습니다:

      label 텍스트는 텍스트 입력과 시각적으로 관련이 있을뿐만 아니라 프로그래밍적으로도 관련이 있습니다. 예를 들어, 화면리더기(screenreader) 는 폼 입력(form          input)에서 label 을 읽어서 보조기술(assistive technology) 사용자가 입력해야하는 텍스트가 무엇인지 더 쉽게 이해할 수 있게 합니다. 
      관련 label 을 클릭해서 input  자체에 초점을 맞추거나 활성화를 시킬 수 있습니다. (활성되어서)늘어난 누를 수 있는 영역(hit area)은 터치스크린 사용자를 포함해         입력하려하는 모든 사람에게 이점을 줍니다.

      ```
      
## 220331

- 아래처럼 태그를 설정해도 작동한다. 어떤 태그인지 상관이 없지만, semantic tag는 `A semantic element clearly describes its meaning to both the browser and the developer.` 때문이라서 사용하나보다.

```html
      <product-manage-page></product-manage-page>
      <charge-money-page></charge-money-page>
      <purchase-product-page></purchase-product-page>
```
     
