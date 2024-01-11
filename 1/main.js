  // Lấy phần tử p6 và các nút bấm
  const paragraph = document.getElementById('p6');
  const increaseButton = document.getElementById('btn6-1');
  const decreaseButton = document.getElementById('btn6-2');

  // Đặt sự kiện click cho nút tăng font size
  increaseButton.addEventListener('click', function(event) {
    // Ngăn chặn mặc định của sự kiện
    event.preventDefault();

    // Lấy giá trị hiện tại của font size
    let currentSize = parseFloat(window.getComputedStyle(paragraph, null).getPropertyValue('font-size'));
    
    // Tăng font size lên 2px
    let newSize = currentSize + 2;
    
    // Thiết lập font size mới cho phần tử p6
    paragraph.style.fontSize = newSize + 'px';
  });

  // Đặt sự kiện click cho nút giảm font size
  decreaseButton.addEventListener('click', function(event) {
    // Ngăn chặn mặc định của sự kiện
    event.preventDefault();

    // Lấy giá trị hiện tại của font size
    let currentSize = parseFloat(window.getComputedStyle(paragraph, null).getPropertyValue('font-size'));
    
    // Giảm font size đi 2px, không để nó bé hơn 10px
    let newSize = Math.max(currentSize - 2, 10);
    
    // Thiết lập font size mới cho phần tử p6
    paragraph.style.fontSize = newSize + 'px';
  });



  function tinhCuocGrab(km) {
   const giaCoBan = 7500;
   const giaDacBiet = 8000;
   const kmDau = 1;
   const kmCuoi = 19;

   if (km >= kmDau && km <= kmCuoi) {
     if (km === kmDau) {
       return giaDacBiet;
     } else {
       const soKmVuot = km - kmDau;
       const cuocVuotGia = soKmVuot * giaCoBan;
       return giaDacBiet + cuocVuotGia;
     }
   } else {
     return "Vui lòng nhập khoảng cách từ 1km đến 19km.";
   }
 }

 const kmDiDuoc = 9;
 const cuocGrab = tinhCuocGrab(kmDiDuoc);
 console.log(`Cước Grab khi đi được ${kmDiDuoc} km là: ${cuocGrab} VND`);