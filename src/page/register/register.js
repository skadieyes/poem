import React from 'react'
import './style.scss'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

class Register extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return <div className='register'>
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
                <div className='form-item' >
                    <FormControl className='form-control'>
                        <InputLabel>确认密码</InputLabel>
                        <Input />
                    </FormControl>
                </div>
                <div className='form-item'>
                    <Button variant="contained" color="primary" className='btn' >
                        成为用户
                    </Button>
                </div>
            </div>
        </div>
    }
}

export default Register