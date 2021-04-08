import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import SideBar from './shared/sidebar';
import HeaderBar from './shared/header';
import MainPage from './components/mainPage'
import CreateTodo from "./components/create";
import EditTodo from "./components/edit";
import TodosList from "./components/toDo";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import { Layout, Menu,Anchor } from 'antd';
const { Header, Sider, Content } = Layout;
const { Link } = Anchor;

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
      <Layout>
      <Sider trigger={null} collapsible >
                <div className="logo" />
                <Anchor>
                    <Link href="/" title="Home" />
                    <Link href="/create" title="Create" />
                    <Link href="/edit" title="Edit" />
                </Anchor>
        </Sider>
        <Layout className="site-layout">
          <HeaderBar/>
          <MainPage/>
        </Layout>
      </Layout>
        {/* <div className="container">
          <h2>MERN-Stack Todo App</h2>
          <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        </div> */}
        {/* <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch> */}
         <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
      </Router>
  );
}

export default App;
