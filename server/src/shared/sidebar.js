import React, { Component } from 'react';
import { Layout, Menu, Anchor } from 'antd';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateTodo from "../components/create";
import EditTodo from "../components/edit";
import TodosList from "../components/toDo";

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    HomeOutlined,
    EditOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { Link } = Anchor;

export default class SideBar extends Component {
    state = {
        collapsed: true
    }
    render() {
        return (
            
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                <div className="logo" />
                <Anchor>
                    <Link href="/" title="Home" />
                    <Link href="/create" title="Create" />
                    <Link href="#API" title="Edit" />
                </Anchor>
                {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<HomeOutlined />}>
                Home
              </Menu.Item>
              <Menu.Item key="2" icon={<EditOutlined />}>
                Edit
              </Menu.Item>
              <Menu.Item key="2" icon={<EditOutlined />}>
                Edit
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                nav 3
              </Menu.Item>
            </Menu> */}
                <Route path="/" exact component={TodosList} />
                <Route path="/edit/:id" component={EditTodo} />
                <Route path="/create" component={CreateTodo} />
            </Sider>
        )
    }
}