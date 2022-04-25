## 220425

- useEffect의 의존성 배열은 해당 배열에 들어있는 값이 재렌더링될 시에 다른 값일때만 내부를 실행해준다.
- 하지만, 아래와 같은 상황에서는 코드를 봤을 때는 fruits에 변화가 없으면 useEffect 내부의 로직이 실행될 것 같지 않지만, 사실상 그렇지 않다. Fruits 컴포넌트가 리렌더링 될때마다 fruits 변수는 재선언되고 다른 참조값이 할당 되기 때문에 useEffect는 이전과 다른 참조 값이기 때문에 리렌더링을 하게된다. 이를 위해 `useMemo`와 `useCallback`을 사용해준다.

```javascript

function Fruits({fruits}) {
  const fruits = fruits.split(" ")
  
  useEffect(() => {
    console.log('refresh render')
  }, [fruits])


 ...생략
}


```
