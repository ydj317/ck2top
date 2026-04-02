const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const PORT = process.env.PORT || 3000;

// EJS 템플릿 엔진 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// express-ejs-layouts 설정
app.use(expressLayouts);
app.set('layout', 'layout');
app.set('layout extractScripts', true);
app.set('layout extractStyles', true);

// 정적 파일 제공
app.use(express.static(path.join(__dirname, 'assets')));

// 라우트 설정
app.get('/', (req, res) => {
  res.render('index', {
    title: '托普沃德',
    page: 'home',
    activeMenu: 'home',
    extraCSS: ['/css/main.css'],
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: '关于我们 - 托普沃德',
    page: 'about',
    activeMenu: 'about',
    extraCSS: ['/css/about.css'],
  });
});

app.get('/business', (req, res) => {
  res.render('business', {
    title: '主要业务 - 托普沃德',
    page: 'business',
    activeMenu: 'business',
    extraCSS: ['/css/business.css'],
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    title: '联系我们 - 托普沃德',
    page: 'contact',
    activeMenu: 'contact',
    extraCSS: ['/css/contact.css'],
  });
});

// 404 페이지
app.use((req, res) => {
  res.status(404).render('404', {
    title: '页面未找到 - 托普沃德',
    page: '404',
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
