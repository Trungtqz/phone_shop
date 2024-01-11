var a = 10;
if (3<5) {
   var a= 20;
}
console.log(a); // 20

//* let : gán lại giá trị [ES6]
//* const : không thể gán lại giá trị  [ES6]
//* var : gnas lại giá trị  [ES5]

/**
 * --scope--
 * 1. Global (là khai báo biến ở bên ngoài)
 * 2. Local (function) (là khai báo trong function)
 * 3. block (block scope là mở đóng dấu ngoặc nhọn {})
 */

//! --bug--
// 1. var: không phân biệt được block scope
// 2. var: có thể khai báo trùng tên biến.

let b = 10;
if (3 < 5) {
   let b = 20;
}
// thử thêm 2 giá trị sau
b = 40;
b = 30;
console.log(b); // mong muốn 10 || thực tế 10
/**
 *! kết luận
 * 2. let phân biệt được block scope -> nên là giải quyết được vấn đề của var.
 */

// -- Hosting --
// Đưa khai báo biến, [__] lên trên đầu trang.
// 1. var: có cơ chế hosting
console.log("d", d);
var d = 50;
// 2. let, const có cơ chế hosting hay không?
// => let,const không có cơ chế hosting
// ! let, const có cơ chế hosting nhưng được đưa vào vùng Temporal Dead Zone mà không được sử dụng trước khi nó khởi tạo.
console.log("e", e);
let e = 1;