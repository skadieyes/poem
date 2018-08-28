import React from 'react';
import Header from 'component/header/header';
import Avatar from '@material-ui/core/Avatar';
import { Row, Col } from 'antd/lib/grid';
import 'antd/lib/grid/style/index.css'
import 'antd/lib/grid/style/index.css'
import './style.scss';
class Information extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgList: ['cow', 'rabbit', 'lion', 'boy', 'girl', 'unicorn', 'cat', 'owl']
        }
    }
    getImgUrl(name) {
        const url = require(`assets/img/${name}.png`);
        return url;
    }
    render() {
        const imgList = this.state;
        return (
            <div className='page'>
                <Header title={'完善信息'} backShow={false} />
                <div className='page-content'>
                    <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">
                                <div className='avatar-box'>
                                    <Avatar alt="Remy Sharp" src={this.getImgUrl('boy')} className='avatar' />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Information;