/*alert("hi")*/
const a=5; //상수 표현
console.log(a+2);
console.log(a*2);
console.log(a/2);

//변수 선언
var integer=5
var string="Hello world"
var float=4.5;
console.log(integer);
//console.log(string);
console.log(float);

//var: 변수를 선언하는 방법->재할당과 재선언이 모두 가능하다.
//재선언
console.log("var 재선언테스트");
var varTest="test1";
console.log(varTest);
var varTest="test2";
console.log(varTest);
//재할당
console.log("var 재할당테스트");
var varTest2="test1";
console.log(varTest2);
varTest2="test2";
console.log(varTest2);

//let:변수를 선언하는 방법->재선언은 불가하고 재할당은 가능
//재선언
console.log("let 재할당테스트");
let letTest="test1";
console.log(letTest);
letTest="test2";
console.log(letTest);

//배열
const daysOfWeek=["mon","tue","wen","thu","fri","sat",];
const nonsense=[1,2,"hello",false,null,undefined]; //타입이 달라도 가능
console.log(daysOfWeek);
console.log(daysOfWeek[4]);
daysOfWeek.push("sun");
console.log(daysOfWeek);
console.log(nonsense);