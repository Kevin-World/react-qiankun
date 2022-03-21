const microAppConfig = [
  {
    name: 'vue-qiankun',
    entry: 'http://localhost:8100',
    container: '#vue_micro-app',
    activeRule: '/micro-app/vue/demo',
  },
  {
    name: 'react-qiankun',
    entry: 'http://localhost:8200',
    container: '#react_micro-app',
    activeRule: '/micro-app/react/demo',
  },
];

export default microAppConfig;