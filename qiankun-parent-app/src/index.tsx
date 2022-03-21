import React from 'react';
import ReactDOM from 'react-dom';
import { registerMicroApps, start } from 'qiankun';
import { BrowserRouter as Rourer } from 'react-router-dom';

import App from './App';
import microApps from './config/microAppsConfig';
import './index.css';

// 注册微应用
registerMicroApps(microApps);
// 启动 qiankun
start();

ReactDOM.render(
  <React.StrictMode>
    <Rourer>
      <App />
    </Rourer>
  </React.StrictMode>,
  document.getElementById('root')
);
