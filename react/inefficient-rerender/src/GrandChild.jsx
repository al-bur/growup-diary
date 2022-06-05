function GrandChild({ order }) {
  console.log(`${order + 1}번째 GrandChild 컴포넌트가 렌더링되었습니다`);

  return <div>grandChild</div>;
}

export default GrandChild;
