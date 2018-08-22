import React from 'react'
import './style.scss'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { login } from 'service/user.redux'
import { Redirect } from 'react-router-dom'
@connect(
    state => state.user,
    { login }
)
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            pwd: ''
        }
        this.register = this.register.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleChange(name, el) {
        this.setState({ [name]: el.target.value });
    }
    handleLogin() {
        this.props.login(this.state)
    }
    register() {
        this.props.history.push('/register');
    }
    render() {
        const { user, pwd } = this.state;
        return <div className='login'>
            {this.props.redirectTo && <Redirect to={this.props.redirectTo} />}
            <div className='title'>
                语
        </div>
            <div className='form'>
                <div className='form-item'>
                    <FormControl className='form-control'>
                        <InputLabel>用户名</InputLabel>
                        <Input value={user} onChange={this.handleChange.bind(this, 'user')} />
                    </FormControl>
                </div>
                <div className='form-item' >
                    <FormControl className='form-control'>
                        <InputLabel>密码</InputLabel>
                        <Input value={pwd} onChange={this.handleChange.bind(this, 'pwd')} />
                    </FormControl>
                </div>
                <div className='form-item'>
                    <Button variant='contained' color='primary' className='btn' onClick={this.handleLogin}>
                        登录
                    </Button>
                </div>
                <div className='form-item register'>
                    <Button color='primary' className='register-btn' onClick={this.register}>
                        注册
                    </Button>
                </div>
            </div>
        </div>
    }
}

export default Login