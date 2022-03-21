import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './public-path';
import App from './App';

function render(props: any) {
  const { container } = props;
  ReactDOM.render(
    <React.StrictMode>
      {/* @ts-ignore eslint-disable-next-line */}
      <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/micro-app/react/demo' : '/'}>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
    container ? container.querySelector('#root') : document.querySelector('#root')
  );
}

// @ts-ignore eslint-disable-next-line 
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props: any) {
  console.log('[react16] props from main framework', props);
  render(props);
}

export async function unmount(props: any) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}