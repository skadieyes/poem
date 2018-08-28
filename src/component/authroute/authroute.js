import React from 'react';
import axios from 'axios';
import Common from 'util/common.js';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadData } from 'service/user.redux'
const _common = new Common();
@withRouter
@connect(
    null,
    {loadData}
)
class AuthRoute extends React.Component {
    componentDidMount() {
        const publicList = ['/login', '/register']
        const pathname = this.props.location.pathname
        if (publicList.indexOf(pathname) > -1) {
            return null
        }
        // 获取用户信息
        axios.get('/user/info').then(res => {
            if (res.status === 200) {
                if(res.data.code === 0){
                    this.props.loadData(res.data.data)
                    return;
                }else{
                    _common.defaultTips(res.data.msg);
                    this.props.history.push('/login');
                }
            }
        })
    }
    render() {
        return null;
    }
}

export default AuthRoute;