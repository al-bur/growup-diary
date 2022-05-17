// 영상 보기전에 해본 것
function AbstractionOne() {
  return (
    <>
      <Button onClick={showConfirm}>전송</Button>
      <Confirm isShow={isShowConfirm} successMessage='성공' />
    </>
  );
}

/**
 * 추상화 해볼 것
 * - showMessage라는 메서드를 Confirm만 알고 있게 하는 게 좋을듯하다. 왜냐면, AbstractionOne에서는 알고있을 필요가 없으니~
 * - 현재 Button이 조건부 렌더링 되어 있지 않아서 isShownConfirm도 내부로 숨겨야겠다?
 *
 */

// 영상에서 나온 것 - 원하는 메서드를 넘길 수 있다

function AbstractionOne() {
  return (
    <>
      <ConfirmButton
        onConfirm={() => {
          showMessage;
          ('성공');
        }}
      >
        전송
      </ConfirmButton>
    </>
  );
}
