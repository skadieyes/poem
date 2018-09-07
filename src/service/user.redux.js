import axios from 'axios';
import Common from 'util/common.js';
const AUTH_SUCCESS = 'AUTH_SUCCESS';
const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = 'LOAD_DATA'
const _common = new Common();
const initState = {
    isAuth: false,
    redirectTo: '',
    msg: '',
    user: ''
}
// reducer
export function user(state = initState, action) {
    switch (action.type) {
        case AUTH_SUCCESS: // 验证成功
            return { ...state, msg: '', redirectTo: _common.getRedirectPath(action.payload), isAuth: true, ...action.payload }
        case ERROR_MSG: // 失败
            return { ...state, isAuth: false, msg: action.msg };
        case LOAD_DATA:
            return { ...state, ...action.payload }
        default:
            return state
    }
}

function errorMsg(msg) {
    _common.errorTips(msg);
    return { msg, type: ERROR_MSG }
}
function authSuccess(data) {
    return { type: AUTH_SUCCESS, payload: data }
}

// 注册
export function register({ user, pwd, repwd }) {
    if (!user || !pwd) {
        return errorMsg('用户名密码必须输入')
    }
    if (pwd !== repwd) {
        return errorMsg('两次密码输入不同');
    }
    return dispatch => {
        axios.post('/user/register', { user, pwd, repwd }).then(res => {
            if (res.status === 200 && res.data.code === 0) {
                _common.successTips(res.data.msg);
                dispatch(authSuccess({ user, pwd, repwd }));
            } else {
                dispatch(errorMsg(res.data.msg));
            }
        })
    }
}

// 登录 
export function login({ user, pwd }) {
    if (!user || !pwd) {
        return errorMsg('用户名密码必须输入')
    }
    return dispatch => {
        axios.post('/user/login', { user, pwd }).then(res => {
            if (res.status === 200 && res.data.code === 0) {
                _common.successTips(res.data.msg);
                dispatch(authSuccess(res.data.data));
            } else {
                dispatch(errorMsg(res.data.msg));
            }
        })
    }
}

// 获取用户信息
export function loadData(userinfo) {
    return { type: LOAD_DATA, payload: userinfo }
}
// 完善信息
export function update(data) {
    return dispatch => {
        axios.post('/user/update', data).then(res => {
            if (res.status === 200 && res.data.code === 0) {
                _common.successTips(res.data.msg);
                dispatch(authSuccess(res.data.data));
            } else {
                dispatch(errorMsg(res.data.msg));
            }
        })
    }
}