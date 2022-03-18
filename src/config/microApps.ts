const microAppConfig = [
  {
    name: 'vue-qiankun',
    entry: 'http://localhost:8100',
    container: '#vue_micro-app',
    activeRule: '/vue-micro-app/demo',
  },
  {
    name: 'reactApp',
    entry: 'http://localhost:3002',
    container: '#react_micro-app',
    activeRule: '/react-micro-app/demo',
  },
];

export default microAppConfig;