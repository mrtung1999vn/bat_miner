@echo off

REM 5. Hiển thị GET payments

set A_VALID_UUID = "ca44e76b-b778-4156-8117-73503dede074"
set API_ENDPOINT="https://api.unminable.com/v4/account/ca44e76b-b778-4156-8117-73503dede074/payments?page=1" 

REM Gửi yêu cầu API và lưu kết quả vào một tệp tạm thời
curl -X GET -H "payments: payments " %API_ENDPOINT% > payments.json

rem Kết thúc các lệnh của bạn
exit