var number = 10;
function print() {
   console.log(number);
}

print();

// biến global (toàn cục): khi khai báo ở bên ngoài (sử dụng được ở mọi nơi)
// biến local (cục bộ): chỉ sử dụng trong phạm vi của nó, chính là function này
// ============================
var number4 = 1;

function a(){
   var number4 = 2;

   function b() {
      var number4 = 3;
   
      console.log("local b:", number4);

      c();
   }

   function c() {
      console.log("local c:", number4);
   }
   b();

   console.log("global a:", number4);
}
console.log("global:", number4);
a();