// // const myInfor = {

// //    name: 'trung quang',
// //    age: 18,
// //    address: 'ha noi, viet nam',
// //    getName: function() {
// //       return this.name;
// //    }
// // };
// // console.log(myInfor);


// // function User(firstName, lastName, avatar) {
// //    this.firstName = firstName;
// //    this.lastName = lastName;
// //    this.avatar = avatar;
// // };

// // const author = new User('trung', 'quang', 'Avatar');
// // const user = new User('vu', 'nguyen', 'Avatar');

// // console.log(author);
// // console.log(user);

// // function Pet(food, drink) { 
// //    this.drink = drink; 
// //    this.food = food; 
// //   } 
// //   Pet.prototype.getDetail = function () { 
// //    return "Food: " + this.food + "\n" + "Drink: " + this.drink; 
// //   }; 
// //   const dog = new Pet("Fish", "Milk"); 
// //   console.log(dog.getDetail());

// // const months = ['Jan','March','April','May',];
// // months.splice(1, 0, "Feb")

// // console.log(months);


// // !/[^aeiou]/  /[^A-z\s\d][\\\^]?/   /^[A-Za-z]+$/  /^[A-Z]/  match   replace   test  search

// // ! String\"s first character is uppercase String\"s first character is not uppercase

// // function upper_case(str) 
// // { 
// //  regexp = /^[A-Z]/; 
// //  if (regexp.test(str)) 
// //  { 
// //  console.log("String's first character is uppercase"); 
// //  } 
// //  else 
// //  { 
// //  console.log("String's first character is not uppercase"); 
// //  } 
// // } 
// // upper_case('Abcd'); 
// // upper_case('abcd');



// // var numbers = [5, 20, 10, 75, 50, 100]; 
// // numbers.pop(); 
// // console.log(numbers);

// // const obj = {
// //    name: "Trung",
// //    age: 18
// //   }

// // // !  obj["name"] = "Lydia Hallie"
// // //*   obj.name= "Lydia Hallie"

// //   console.log(obj);


// const myButton = document.getElementById("btn");

// myButton.onclick = function() {
//   const inputValue = parseInt(document.getElementById("myInput").value);
//   if(inputValue === 8){
//     alert("so 8");
//   } else if(inputValue === 9) {
//     alert("so 9");
//   } else {
//     alert ("not!");
//   }
// };





// for (let i = 1; i < 1911; i++) {
//   console.log(i + ', nằm');
// }

// Lương cơ bản
var luongCoBan = 324324324; // Thay đổi giá trị này theo nhu cầu của bạn

// Tính tổng lương của sếp
var tongLuongSep = luongCoBan * 3;

// In kết quả ra console
console.log("Tổng lương của sếp là: ", tongLuongSep);