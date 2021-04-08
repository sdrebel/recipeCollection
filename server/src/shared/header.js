import React, { Component } from 'react';

import { Layout } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  } from '@ant-design/icons';
const { Header, Sider, Content } = Layout;

export default class HeaderBar extends Component {
    state={
        collapsed:''
    }
    render() {
        return (
            <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
        )
    }
}