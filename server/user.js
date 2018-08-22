const express = require('express');
const utils = require('utility')
const Router = express.Router();
const model = require('./model')
const User = model.getModel('user')

// 用户列表
Router.get('/list', function (req, res) {
    // User.remove({}, function(e, d){})
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
            const encryption = md5PWd(pwd);
            User.create({ user, pwd: encryption }, function (e, d) {
                if (e) {
                    return res.json({ code: 1, msg: '服务器出错啦' })
                } else {
                    return res.json({ code: 0, msg: '注册成功' });
                }
            })
        }
    })
})

// 用户登录
Router.post('/login', function (req, res) {
    const { user, pwd } = req.body;
    User.findOne({ user }, function (err, doc) {
        console.log(doc);
        if (!doc) {
            return res.json({ code: 1, msg: '用户名不存在' })
        } else {
            if (doc.pwd !== md5PWd(pwd)) {
                return res.json({ code: 1, msg: '密码错误' })
            } else {
                doc.pwd = 0;
                return res.json({ code: 0, msg: '登录成功' , data: doc})
            }
        }
    })
})

function md5PWd(pwd) {
    const salt = 'Poem_NJNKWE_1f(#$@JW_123~~``:"qwr@#';
    return utils.md5(utils.md5(pwd + salt));
}

// 用户注册
module.exports = Router