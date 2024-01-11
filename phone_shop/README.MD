# TẠO file  quản lý dự án
`npm init` <br>
Enter <br>
#Package.json

File quản lý dự án của chúng ta <br>
- tên dự án
- thư viện được sử dụng trong dự án

# để cài thư viện cho dự án
`npm  install <tên thư viện>`

# để xóa
`npm uninstall <tên thư viện>`

# sau khi cài xong thư viện
- liệt kê thư viện được cài đặt trong file package.json. <br>
- tạo ra folder node_modules: chứa các thư viện được cài đặt trong dự án
- tạo ra file package-lock.json:

# so sánh package.json với package-lock.json
- package.json: liệt kê khoảng version được phép cài đặt trong dự án
- package-lock.json: liệt kê chính xác version mà chúng ta cài đặt trong dự án

# .gitignore
- Loại bỏ những folder hay file không muốn commit lên git <br>
- loại bỏ node_modules: vì quá nặng <br>