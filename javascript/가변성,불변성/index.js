const numb = 200
const object = {
  key: 'unchanged'
}

console.log(numb) // 200
console.log(object) // { key : 'unchanged' }

const change = function (numb, obj) {
  numb = 100;
  obj.key = 'changed'
}


change(numb, object)

console.log(numb) // 200
console.log(object) // { key: 'changed' }

/*

- primitive 타입은 인자로 전달되었을 때 값이 복사되어서 전달해주어서 불변성을 지킬 수 있고
- 참조 타입은 인자로 전달되었을 때 object가 저장되어 있는 참조 값을 복사해서 전달해주기 때문에 change 함수 내에서 인자의 프로퍼티를 변경하면 object도 같이 변겅이 된다.

**/
