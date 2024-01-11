document.getElementById('tinhHoaDonBtn').addEventListener('click', tinhHoaDon);
document.getElementById('loaiKhachHang').addEventListener('change', hienThiNhapKetNoi);

function tinhHoaDon() {
   const maKhachHang = document.getElementById("maKhachHang").value;
   const loaiKhachHang = document.getElementById("loaiKhachHang").value;
   const soKetNoi = document.getElementById("soKetNoi").value;
   const soKenhCaoCap = document.getElementById("soKenhCaoCap").value;

   let phiXuLyHoaDon = 0;
   let phiDichVuCoBan = 0;
   let phiThueKenhCaoCap = 0;

   if (loaiKhachHang === "nhaDan") {
       phiXuLyHoaDon = 4.5;
       phiDichVuCoBan = 20.5;
       phiThueKenhCaoCap = 7.5 * soKenhCaoCap;
   } else if (loaiKhachHang === "doanhNghiep") {
       phiXuLyHoaDon = 15;
       phiDichVuCoBan = 75 + (soKetNoi - 10) * 5;
       phiThueKenhCaoCap = 50 * soKenhCaoCap;
   }

   let tongTien = phiXuLyHoaDon + phiDichVuCoBan + phiThueKenhCaoCap;

   let ketQua = "Mã Khách Hàng: " + maKhachHang + "\n";
   ketQua += "Loại Khách Hàng: " + (loaiKhachHang === "nhaDan" ? "Nhà Dân" : "Doanh Nghiệp") + "\n";
   ketQua += "Tổng Tiền: $" + tongTien.toFixed(2);

   document.getElementById("ketQua1").innerHTML = ketQua;
}

function hienThiNhapKetNoi() {
   const loaiKhachHang = document.getElementById("loaiKhachHang").value;
   const inputSoKetNoi = document.getElementById("inputSoKetNoi");

   if (loaiKhachHang === "doanhNghiep") {
       inputSoKetNoi.style.display = "block";
       soKetNoi.style.display = "block";
   } else {
       inputSoKetNoi.style.display = "none";
   }
};