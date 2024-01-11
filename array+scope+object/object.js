/**
 * Object: đối tượng
 * 
 * gom tất cả thông tin vào một biến
 */

var tuoi =  20;
var ten = "trung";
var diaChi = "ha noi";
var sdt = "0399841952";

/**
 * dùng ngoặc {} để khởi tạo một đối tượng
 * 
 * chú ý: dùng dấu :để giá trị cho thuộc tính
 * kết thúc bằng dấu phẩy
 */

var sinhVien1 = {
   tuoi: 20,
   ten: "trung",
   diaChi: "ha noi",
   sdt: "0399841952",
};

// để lấy giá trị của từng thuộc tính. Truy xuất
// cách 1: dùng dấu chấm

console.log("tuoi", sinhVien1.tuoi);
console.log("ten", sinhVien1.ten);
console.log("diaChi", sinhVien1.diaChi);
console.log("sdt", sinhVien1.sdt);

// cách 2
// lý do: dùng để truy xuất tới tên thuộc tính có khoảng trống
console.log("tuoi", sinhVien1[tuoi]);
console.log("ten", sinhVien1[ten]);
console.log("diaChi", sinhVien1[diaChi]);
console.log("sdt", sinhVien1[sdt]);


// ==========================
/**
 * Phương thức: (method): function
 */

var sinhVien3 = {
   toan: 9,
   ly: 7,
   hoa: 8,
};

function tinhDiemTrungBinh (sv) {
   return (sv.toan + sv.ly + sv.hoa) / 3;
}

const dtb = tinhDiemTrungBinh(sinhVien3);
console.log(dtb);


// lớp đối tương: tổ chức cấu trúc một đối tượng
function hocVien(ten , tuoi) {
   this.ten = ten;
   this.tuoi = tuoi;

   this.an = function () {};
   this.hoc = function () {};
}

// dùng từ khóa new dienMotCaiGiDoVao() để tạo ra một đối tượng

var trung = new hocVien("trung", "18");
console.log("trung:", trung);