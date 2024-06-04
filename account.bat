@echo off

set A_VALID_UUID = "ca44e76b-b778-4156-8117-73503dede074"
set API_ENDPOINT="https://api.unminable.com/v4/account/ca44e76b-b778-4156-8117-73503dede074" 

REM Gửi yêu cầu API và lưu kết quả vào một tệp tạm thời
curl -X GET -H "account: account " %API_ENDPOINT% > account.json

rem Kết thúc các lệnh của bạn
exit