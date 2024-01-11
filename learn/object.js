const name = "Mi";
const age = 20;

/**
 * const obj = {
 * name: name,
 * age: age,
 * };
 *
 * nếu tên thuộc tính và tên biến trùng nhau thì có thể rút gọn về còn 1.
 */

const obj = {
  name,
  age,
};

// -- ten thuoc tinh duoc truyen thong qua bien --
const thuocTinh = "dayLaThuocTinhDongg";
const stu = {
  addr: "da nang",

  //dayLaThuocTinhDong: true,
  [thuocTinh]: true,
};
console.log(stu);

//////////////////////////////////////

let iNum = 5;
if (true) {
  iNum = 10;
  console.log(iNum);
}
console.log(iNum);

var eNum = 5;
if ("") {
  var eNum = 11;
  console.log("eNum1", eNum);
}
console.log("eNum2", eNum);

var a = 11;
var trung = function () {
  var a = 0;
  console.log(a);
};
trung();

////////////////////////////
// const button = document.getElementById("btn");
// button.onclick = function() {
//    alert("btn!");
// };

var btn = document.getElementsByTagName('button');
for (let i = 0; i < 3; i++) {
   btn[i].onclick = function () {
      alert(i);
   }; 
}
