// app.js
const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route để render trang web chứa danh sách các tập tin JSON và hiển thị dữ liệu của tập tin được chọn
app.get('/json-file', (req, res) => {
    // Danh sách tên tập tin JSON
    const jsonFiles = ['account.json', 'address.json', 'payments.json', 'referrals.json', 'start.json', 'worker.json'];
    res.render('jsonFileList', { jsonFiles });
});

app.use(express.static(path.join(__dirname, 'public')));

// Route để render trang web
app.get('/', (req, res) => {
    res.render('index');
});

// Route để xử lý yêu cầu mở tập tin .bat
app.get('/open-bat-file', (req, res) => {
    const { exec } = require('child_process');
    const batFile = req.query.batFile;
    if (!batFile) {
        res.status(400).send('Vui lòng chọn tập tin .bat để mở.');
        return;
    }
    const batProcess = exec(`start ${batFile}`);
    
    batProcess.on('exit', (code) => {
        res.render('batSuccess', { batFile })
    });
});


// Danh sách tập tin JSON
const jsonFiles = ['account.json', 'address.json', 'payments.json', 'referrals.json', 'start.json', 'worker.json'];

// Route để render trang web chứa danh sách các tập tin JSON và hiển thị dữ liệu của tập tin được chọn
app.get('/json-file', (req, res) => {
    res.render('jsonFileList', { jsonFiles });
});

// Route để hiển thị nội dung của tập tin JSON được chọn
app.get('/json-file/:file', (req, res) => {
    const fileName = req.params.file;
    const filePath = path.join(__dirname, 'json_files', fileName);

    // Đọc nội dung của tập tin JSON
    fs.readFile(filePath, 'utf8', async (err, data) => {
        if (err) {
            res.status(404).send('Không tìm thấy tập tin JSON.');
            return;
        }
        // Parse nội dung JSON
        const jsonData = JSON.parse(data);
        res.render('jsonFileContent', { fileName, jsonData });
    });
});



app.listen(3000, () => {
    console.log('Server đang chạy tại http://localhost:3000');
});