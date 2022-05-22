const A = {
  age: 10,
  sex: 'male',
  move: function () {
    console.log('움직인다.');
  },
};

// 생성자 함수
function Person(age, sex) {
  this.age = age;
  this.sex = sex;
  this.move = function () {
    console.log('움직인다');
  };
}

const D = new Person(10, 'male');
const B = new Person(12, 'male');
const C = new Person(10, 'female');

console.log(D, B, C, '상속X');

// 생성자 함수
function PersonWithoutMove(age, sex) {
  this.age = age;
  this.sex = sex;
}
PersonWithoutMove.prototype.move = function () {
  console.log('움직인다');
};

const person1 = new PersonWithoutMove(10, 'male');
const person2 = new PersonWithoutMove(12, 'male');
const person3 = new PersonWithoutMove(10, 'female');

console.log(person1, person2, person3, '상속O');

console.log(D.move());
console.log(person1.move());

console.log(person1.__proto__, 'proto');
console.log(person1.__proto__.constructor, 'proto의 constructor는 생성자함수다');
console.log(
  person1.__proto__.constructor.prototype,
  'proto의 constructor는 생성자함수이고 prototypedlek'
);
console.log(person1.__proto__.__proto__, 'proto의 proto');

// 의문? person1에는 move라는 메서드가 없었다? 근데 어떻게 여기서 움직인다가 출력이될까?
