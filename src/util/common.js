import message from 'antd/lib/message';
import 'antd/lib/message/style/css';

class Common {
  // 错误提示
  errorTips(errMsg) {
    message.error(errMsg || '好像哪里出错了');
  }
  // 成功提示
  successTips(successMsg) {
    message.success(successMsg || '操作成功');
  }
  getRedirectPath({ photo }) {
    let url = '/';
    if (!photo) {
      url += 'info';
    }
    return url;
  }
}

export default Common;