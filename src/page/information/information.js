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
        const { imgList } = this.state;
        console.log(imgList);
        return (
            <div className='page information-page'>
                <Header title={'完善信息'} backShow={false} />
                <div className='page-content'>
                <label className='label'>选择头像</label>
                    <Row gutter={16}>
                        {
                            imgList && imgList.map((item, index) => {
                                return <Col span={6} key={index} className='col'>
                                    <div className='avatar-box'>
                                        <Avatar alt={item} src={this.getImgUrl(item)} className='avatar' />
                                    </div>
                                </Col>
                            })
                        }
                    </Row>
                </div>
            </div>
        )
    }
}

export default Information;