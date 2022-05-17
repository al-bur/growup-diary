function AbstractionZero() {
  return (
    <>
      <Button onClick={showConfirm}>전송</Button>
      {isShowConfirm && (
        <Confirm
          onClick={() => {
            showMessage('성공');
          }}
        />
      )}
    </>
  );
}

/**
 * 특징
 *
 * - isShowConfirm의 여부에 따라 조건부 렌더링 하는 부분이 AbstractionZero 컴포넌트에서 알고있다.
 * - Confirm 컴포넌트에 showMessage라는 메서드를 입력해주고 있다. 굳이? showMessage라는 메서드는 Confirm에만 있어도 될 것 같은데? message만 알려줘도 될 것 같다.
 */
