document.getElementById("btnHienThi").onclick = hienThiKetQua;
function hienThiKetQua() {
   const giaTriNhap = document.getElementById('giaTriNhap').value;
   document.getElementById('ketQuaHienThi').textContent = giaTriNhap;
}

// vidu2
document.getElementById('btnTinhTien').onclick = tinhTongLuong;
function tinhTongLuong(){
   const tienLuong = document.getElementById('tienLuong').value;
   const soGioLam = document.getElementById('soGioLam').value;

   let tongLuong = 0;

   tongLuong = soGioLam * tienLuong;
   document.getElementById('tongLuong').innerHTML = tongLuong.toLocaleString();
}

// vidu3