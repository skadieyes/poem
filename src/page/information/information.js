import React from 'react';
import Header from 'component/header/header';
import Avatar from '@material-ui/core/Avatar';
import { Row, Col } from 'antd/lib/grid';
import { TextArea } from 'antd/lib/input';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { update } from 'service/user.redux';
import { Redirect } from 'react-router-dom'
import 'antd/lib/grid/style/index.css'
import 'antd/lib/grid/style/index.css'
import 'antd/lib/input/style/index.css'
import './style.scss';

@connect(
    state => state.user,
    { update }
)
class Information extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgList: ['cow', 'rabbit', 'lion', 'boy', 'girl', 'unicorn', 'cat', 'owl'],
            photo: 'cow',
            intro: '',
            introduce: {
                width: '100%',
                marginTop: 10,
                borderRadius: 4,
                padding: 8
            }
        }
        this.handelClick = this.handelClick.bind(this);
    }

    getImgUrl(name) {
        const url = require(`assets/img/${name}.png`);
        return url;
    }
    handleChange(name, e) {
        this.setState({ [name]: e.target.value });
    }
    changeImg(name, value) {
        this.setState({ [name]: value });
    }
    handelClick() {
        const { intro, photo } = this.state;
        this.props.update({ intro, photo });
    }
    render() {
        const { imgList } = this.state;
        return (
            <div className='page information-page'>
                {this.props.redirectTo && <Redirect to={this.props.redirectTo} />}
                <Header title={'完善信息'} backShow={false} />
                <div className='page-content'>
                    <label className='label'>选择头像</label>
                    <Row gutter={16}>
                        {
                            imgList && imgList.map((item, index) => {
                                return <Col span={6} key={index} className='col'>
                                    <div className={`avatar-box ${this.state.photo === item ? 'active' : ''}`} onClick={this.changeImg.bind(this, 'photo', item)}>
                                        <Avatar alt={item} src={this.getImgUrl(item)} className={`avatar`} />
                                    </div>
                                </Col>
                            })
                        }
                    </Row>
                    <label className='label'>简介</label>
                    <Row gutter={16}>
                        <Col span={24}>
                            <TextArea placeholder='一句话介绍一下自己吧' autosize={{ minRows: 4, maxRows: 6 }} style={this.state.introduce}
                                value={this.state.intro} onChange={this.handleChange.bind(this, 'intro')}
                            />
                        </Col>
                    </Row>
                </div>
                <div className='page-bottom'>
                    <Button variant="contained" color="primary" style={{ width: '100%' }} onClick={this.handelClick}>
                        开始
                    </Button>
                </div>
            </div>
        )
    }
}

export default Information;