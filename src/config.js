import axios from 'axios'
import { Toast } from 'antd-mobile'
import 'antd-mobile/lib/toast/style/index.css';
// 拦截请求
axios.interceptors.request.use(function (config) {
	Toast.loading('加载中', 0)
	return config
})

// 拦截相应

axios.interceptors.response.use(function (config) {
	setTimeout(() => {
		Toast.hide()
	}, 2000)
	return config
})