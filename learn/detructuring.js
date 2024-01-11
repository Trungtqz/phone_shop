const listStudent = [
   {
      age: 18,
      name: "Nguyen Van A"
   },
   {
      age: 19,
      name: "Nguyen Van B"
   },
   {
      age: 20,
      name: "Nguyen Van C"
   },
];

// -- detructuring --
const [stu_1, stu_3, stu_2] = listStudent;
console.log("stu_1, stu_3, stu_2", stu_1, stu_3, stu_2);

console.log("listStudent", listStudent);

// const age = stu_1.age;
// const name = stu_2.name;
// const address = stu_3.address;
//* bóc tách thuôc tính và tạo biến có tên giống đối tượng.
// tên thuộc tính muốn bóc tách: tên biến muốn tạo ra.
//          address            :         addr
const { age, address: addr} = stu_1;
console.log("stu_1", stu_1)