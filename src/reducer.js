
// 合并所有reducer 并且返回
import { combineReducers } from 'redux'
import { user } from 'service/user.redux'
export default combineReducers({user})

