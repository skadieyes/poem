import axios from 'axios';
import Common from 'util/common.js';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const ERROR_MSG = 'ERROR_MSG'
const LOGIN_SUCESS = 'LOGIN_SUCESS'
const _common = new Common();
const initState = {
    isAuth: false,
    redirectTo: '',
    msg: '',
    user: '',
    pwd: ''
}
// reducer
export function user(state = initState, action) {
    switch (action.type) {
        case REGISTER_SUCCESS: // 注册成功
            return { ...state, msg: '', redirectTo: _common.getRedirectPath(action.payload), isAuth: true, ...action.payload }
        case LOGIN_SUCESS: // 登录成功
            return { ...state, msg: '', redirectTo: _common.getRedirectPath(action.payload), isAuth: true, ...action.payload }
        case ERROR_MSG: // 失败
            return { ...state, isAuth: false, msg: action.msg }
        default:
            return state
    }
}

function errorMsg(msg) {
    _common.errorTips(msg);
    return { msg, type: ERROR_MSG }
}
function loginSuccess(data) {
    console.log(data);
    _common.successTips('登录成功');
    return { type: LOGIN_SUCESS, payload: data };
}
function registerSuccess(data) {
    _common.successTips('注册成功');
    return { type: REGISTER_SUCCESS, payload: data }
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
                dispatch(registerSuccess({ user, pwd, repwd }));
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
                dispatch(loginSuccess(res.data.data));
            } else {
                dispatch(errorMsg(res.data.msg));
            }
        })
    }
}