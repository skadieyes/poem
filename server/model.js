const mongoose = require('mongoose')
// 链接mongo 并且使用poem这个集合
const DB_URL = 'mongodb://localhost:27017/poem-db'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function () {
    console.log('mongo connect success')
})
const models = {
    user: {
        'user': { type: String, require: true },
        'pwd': { type: String, require: true },
        // 头像
        'photo': { type: String, require: true },
        // 个人简介
        'intro': { type: String, require: false }
    }
}

for (let m in models) {
    mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
    getModel: function (name) {
        return mongoose.model(name)
    }
}