function print_1() {}

var print_2 = function () {};

// -- Arrow Function --\
// không có cơ chế hosting
// -- Let, const không có cơ chế hosting --
const print_3 = () => {
   console.log("cyber");
};

print_3();

const total = (a, b) => {
   return a + b;
};

// Rut gon
// const total = (a, b) => a + b;
console.log(total(2, 3));

const number = (message = "yeu cầu nhập vào số") => {
   return message;
};
// rút gọn thì sẽ bỏ ngoặc nhọn và bỏ return

////////////////////////////////////
// rest params : khong quan tam nguoi dung nhap vao bao nhieu tham so
const calc = (...rest) => {
   console.log(rest);
};
calc(1, 2, 3, 4, 5, 6, 7, 8);