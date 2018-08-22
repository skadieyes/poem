const express = require('express');
const utils = require('utility')
const Router = express.Router();
const model = require('./model')
const User = model.getModel('user')

// 用户列表
Router.get('/list', function (req, res) {
    User.find({}, function (err, doc) {
        return res.json(doc)
    })
})

// 用户有没有cookie
Router.get('/info', function (req, res) {
    return res.json({ code: 0 });
})
// 用户注册
Router.post('/register', function (req, res) {
    const { user, pwd } = req.body;
    User.findOne({ user: user }, function (err, doc) {
        if (doc) {
            return res.json({ code: 1, msg: '用户名重复' })
        } else {
            let encryption = md5PWd(pwd);
            User.create({ user, pwd : encryption }, function (e, d) {
                if (e) {
                    return res.json({ code: 1, msg: '服务器出错啦' })
                } else {
                    return res.json({ code: 0, msg: '注册成功' });
                }
            })
        }
    })
})

function md5PWd(pwd){
    const salt = 'Poem_NJNKWE_1f(#$@JW_123~~``:"qwr@#';
    return utils.md5(utils.md5(pwd + salt));
}

// 用户注册
module.exports = Router