import Toast from 'antd-mobile/lib/toast';
class Common {
    // 提示
    defaultTips(msg) {
        Toast.info(msg || '', 1);
    }
    // 错误提示
    errorTips(errMsg) {
        Toast.fail(errMsg || '好像哪里出错了', 1);
    }
    // 成功提示
    successTips(successMsg) {
        Toast.success(successMsg || '操作成功', 1);
    }
    getRedirectPath({ photo }) {
        let url = '/';
        if (!photo) {
            url += 'info';
        } else {
            url = '/dashboard';
        }
        return url;
    }
}

export default Common;