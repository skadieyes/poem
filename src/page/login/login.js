import React from 'react'
import './style.scss'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.register = this.register.bind(this);
    }

    register(){

    }
    render() {
        return <div className='login'>
            <div className='title'>
                语
        </div>
            <div className='form'>
                <div className='form-item'>
                    <FormControl className='form-control'>
                        <InputLabel>用户名</InputLabel>
                        <Input />
                    </FormControl>
                </div>
                <div className='form-item' >
                    <FormControl className='form-control'>
                        <InputLabel>密码</InputLabel>
                        <Input />
                    </FormControl>
                </div>
                <div className='form-item'>
                    <Button variant='contained' color='primary' className='btn' onClick = {this.register}>
                        登录
                    </Button>
                </div>
                <div className='form-item register'>
                    <Button color='primary' className='register-btn'>
                        注册
                    </Button>
                </div>
            </div>
        </div>
    }
}

export default Login