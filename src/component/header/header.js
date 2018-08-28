import React from "react";
import Icon from "antd/lib/icon";
import "antd/lib/icon/style/css";
import "./style.scss";
class Header extends React.Component {
  render() {
    const { title, backShow } = this.props;
    return (
      <div className='header'>
        {backShow && <span className='back'>
          <Icon type='left' />
        </span>
        }
        <span className='title'>
          {title}
        </span>
      </div>
    );
  }
}

export default Header;
