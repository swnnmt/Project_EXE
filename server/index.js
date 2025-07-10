const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const users = JSON.parse(fs.readFileSync(path.join(__dirname, 'User.json'), 'utf8'));
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.json({ success: true, message: 'Đăng nhập thành công!', user });
  } else {
    res.status(401).json({ success: false, message: 'Sai thông tin đăng nhập' });
  }
});
app.post('/api/register', (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ success: false, message: 'Vui lòng nhập đầy đủ thông tin' });
  }

  const filePath = path.join(__dirname, 'User.json');

  try {
    let users = [];
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf8');
      users = JSON.parse(data);
    }

    const exists = users.find(user => user.username === username || user.email === email);
    if (exists) {
      return res.status(400).json({ success: false, message: 'Tên đăng nhập hoặc email đã tồn tại' });
    }
  
    const newUser = {
      id: Date.now(),
      username,
      email,
      password, 
      avatar: ''
    };

     
    users.push(newUser);
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2), 'utf8');
      res.json({
      success: true,
      message: 'Đăng ký thành công!',
      user: {
        username: newUser.username,
        email: newUser.email,
        avatar: newUser.avatar
      }
    });
   
  } catch (err) {
    console.error('Lỗi đăng ký:', err);
    res.status(500).json({ success: false, message: 'Lỗi máy chủ' });
  }
});





app.listen(5000, () => console.log('Server chạy tại http://localhost:5000'));
