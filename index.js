// -----Bài tập 1 (start)-----
/** Mô hình 3 khối:
 * - Đầu vào: số tiền lương, số ngày làm.
 *
 * - Các bước xử lí: số tiền lương nhân viên = số tiền lương 1 ngày * số ngày làm
 *
 * - Đầu ra: số tiền lương cho nhân viên
 */
// Bài làm:
document.getElementById("btn1").onclick = function () {
  var luongMotNgay = document.getElementById("luongMotNgay").value * 1;
  var soNgayLam = document.getElementById("soNgayLam").value * 1;
  var ketQua1 = "";
  ketQua1 = luongMotNgay * soNgayLam;
  document.getElementById("ketQua1").innerHTML = ketQua1.toLocaleString(
    "it-IT",
    {
      style: "currency",
      currency: "VND",
    }
  );
};
// -----Bài tập 1 (end)-----

// -----Bài tập 2 (start)-----
/** Mô hình 3 khối:
 * - Đầu vào: 5 giá trị là số thực bất kì do người dùng nhập vào.
 *
 * - Các bước xử lí: giá trị trung bình = (giá trị 1 + giá trị 2 + giá trị 3 + giá trị 4 + giá trị 5) / 5
 *
 * - Đầu ra: giá trị trung bình của 5 số
 */
// Bài làm:
document.getElementById("btn2").onclick = function () {
  var soThu1 = document.getElementById("soThu1").value * 1;
  var soThu2 = document.getElementById("soThu2").value * 1;
  var soThu3 = document.getElementById("soThu3").value * 1;
  var soThu4 = document.getElementById("soThu4").value * 1;
  var soThu5 = document.getElementById("soThu5").value * 1;
  var ketQua2 = "";
  ketQua2 = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5;
  document.getElementById("ketQua2").innerHTML = ketQua2;
};
// -----Bài tập 2 (end)-----

// -----Bài tập 3 (start)-----
/** Mô hình 3 khối:
 * - Đầu vào: số tiền USD.
 *
 * - Các bước xử lí: tính số tiền quy đổi ra VND, bằng cách lấy số tiền USD người dùng nhập vào nhân cho giá trị USD mặc định là: 1$=23.500VND. Số tiền quy đổi = số tiền USD * 23500
 *
 * - Đầu ra: Số tiền quy đổi ra giá trị VND
 */
// Bài làm:
document.getElementById("btn3").onclick = function () {
  var soTienUSD = document.getElementById("soTienUSD").value * 1;
  const USD = 23500;
  var ketQua3 = "";
  ketQua3 = soTienUSD * USD;
  document.getElementById("ketQua3").innerHTML = ketQua3.toLocaleString(
    "it-IT",
    {
      style: "currency",
      currency: "VND",
    }
  );
};
// -----Bài tập 3 (end)-----

// -----Bài tập 4 (start)-----
/** Mô hình 3 khối:
 * - Đầu vào: chiều dài, chiều rộng hình chữ nhật.
 *
 * - Các bước xử lí: tính chu vi và diện tích hình chữ nhật theo công thức:
 * diện tích = chiều dài * chiều rộng
 * chu vi = (chiều dài + chiều rộng) * 2
 *
 * - Đầu ra: chu vi và diện tích hình chữ nhật
 */
// Bài làm:
document.getElementById("btn4").onclick = function () {
  var chieuDai = document.getElementById("chieuDai").value * 1;
  var chieuRong = document.getElementById("chieuRong").value * 1;
  var chuVi = (chieuDai + chieuRong) * 2;
  var dienTich = chieuDai * chieuRong;
  var ketQua4 = "";
  ketQua4 = `Chu vi là ${chuVi}, diện tích là ${dienTich}.`;
  document.getElementById("ketQua4").innerHTML = ketQua4;
};
// -----Bài tập 4 (end)-----

// -----Bài tập 5 (start)-----
/** Mô hình 3 khối:
 * - Đầu vào: nhập số tự nhiên bất kì có 2 chữ số.
 *
 * - Các bước xử lí:
 * + cách lấy chữ số hàng chục: lấy số vừa nhập chia cho 10 (soHangChuc = soCo2ChuSo / 10)
 * + cách lấy chữ số hàng đơn vị: lấy số vừa nhập chi lấy dư cho 10 (soHangDonVi = soCo2ChuSo % 10)
 * + tổng = soHangChuc + soHangDonVi
 *
 * - Đầu ra: tổng 2 ký số từ số vừa nhập
 */
// Bài làm:
document.getElementById("btn5").onclick = function () {
  var soCo2ChuSo = document.getElementById("soCo2ChuSo").value * 1;
  var soHangChuc = "";
  var soHangChuc = Math.floor(soCo2ChuSo / 10);
  var soHangDonVi = "";
  var soHangDonVi = soCo2ChuSo % 10;
  console.log("soHangDonVi");
  var tong = soHangChuc + soHangDonVi;
  var ketQua5 = "";
  if (soCo2ChuSo < 10 || soCo2ChuSo > 99) {
    ketQua5 = `Bạn cần nhập số có 2 chữ số`;
  } else {
    ketQua5 = `Tổng ký số bạn vừa nhập là ${tong}.`;
  }
  //   ketQua5 = `Tổng ký số bạn vừa nhập là ${tong}.`;
  document.getElementById("ketQua5").innerHTML = ketQua5;
};

// -----Bài tập 5 (end)-----
