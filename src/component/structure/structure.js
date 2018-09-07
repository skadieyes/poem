import React from 'react'
import './style.scss'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from 'antd/lib/icon';

class Structcure extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }
    handleChange = (event, value) => {
        this.setState({ value });
    };
    render() {
        const { value } = this.state;
        return (
            <div className='structure'>
                <div>structure</div>
                {this.props.children}
                <div className='bottom'>
                <BottomNavigation
                    value={value}
                    onChange={this.handleChange}
                    showLabels
                >
                    <BottomNavigationAction label="发现" icon={<Icon type="bulb" theme="outlined" />} />
                    <BottomNavigationAction label="消息" icon={<Icon type="message" theme="outlined" />} />
                    <BottomNavigationAction label="个人" icon={<Icon type="user" theme="outlined" />} />
                </BottomNavigation>
                </div>
            </div>
        )
    }
}
export default Structcure;