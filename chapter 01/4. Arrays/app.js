// 배열(Arrays) - 여러 개의 데이터를 하나의 변수에 담을 수 있는 자료형
const fruits = ["apple", "banana", "orange"];
console.log(fruits);

// 인덱스(Index) - 배열의 각 요소에 접근할 수 있는 번호 
console.log(fruits[0]); // apple

// 추가(push) - 배열의 끝에 요소를 추가
fruits.push("grape"); 
console.log(fruits); // ["apple", "banana", "orange", "grape"]

// 제거(pop) - 배열의 끝에 요소를 제거
fruits.pop(); 
console.log(fruits); // ["apple", "banana", "orange"]