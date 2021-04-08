import React, { Component } from 'react';
import { Layout } from 'antd';
const { Content } = Layout;
export default class MainPage extends Component {
    render() {
        return (
            <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        )
    }
}