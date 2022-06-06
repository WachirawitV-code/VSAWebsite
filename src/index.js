import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Get from './Get';
import Marklabel from './components/Marklabel';
import Home from './components/Home'
import {Router,Route,Link} from 'react-router'
import { browserHistory } from 'react-router';
import TestDraw from './components/TestDraw';
import DrawM from './components/DrawM';
import MapT from './components/Map';
import DrawPic from './components/DrawPic'
import AllProject from './components/AllProject'
import SelectImage from './components/SelectImage'
import Profile from './components/Profile'
import DetailProject from './components/DetailProject'
import ManageUser from './components/ManageUser'



ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}/>
    <Route path='/Get' component={Get}/>
    <Route path='/Home' component={Home}/>
    <Route path='/Marklabel' component={Marklabel}/>
    <Route path='/TestDraw' component={TestDraw}/>
    <Route path='/DrawM' component={DrawM}/>
    <Route path='/Map' component={MapT}/>
    <Route path='/DrawPic' component={DrawPic}/>
    <Route path='/AllProject' component={AllProject}/>
    <Route path='/SelectImage' component={SelectImage}/>
    <Route path='/Profile' component={Profile}/>
    <Route path='/DetailProject' component={DetailProject}/>
    <Route path='/ManageUser' component={ManageUser}/>
  </Router>,document.getElementById('root')
);
