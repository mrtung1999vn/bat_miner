@echo off

set API_ENDPOINT=https://api.unminable.com/v4/address/0x4d438d0016cf4e8fed9bb4ce5d9aa03c8fc2637c?coin=USDT
set SQLITE_EXE="sqlite3.exe"  REM Thay đổi đường dẫn tới sqlite3.exe nếu cần thiết
set SQLITE_DB="unminable_data.db"

REM Tạo bảng trong cơ sở dữ liệu SQLite nếu chưa tồn tại
echo CREATE TABLE IF NOT EXISTS unminable_data (id INTEGER PRIMARY KEY, data TEXT); | %SQLITE_EXE% %SQLITE_DB%

REM Gửi yêu cầu API và lưu kết quả vào một tệp tạm thời
curl -X GET -H "Authorization: Bearer " %API_ENDPOINT% > address.json


rem Kết thúc các lệnh của bạn
exit