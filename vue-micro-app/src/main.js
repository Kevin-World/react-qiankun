import Vue from "vue";
import "./public-path";
import App from "./App.vue";

Vue.config.productionTip = false;

let instance = null;

function render(props = {}) {
  const { container } = props;
  instance = new Vue({
    render: h => h(App),
  }).$mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}
export async function mount(props) {
  console.log("[vue] props from main framework -> mount", props);
  render(props);
}
// 增加 update 钩子以便主应用手动更新微应用
export async function update(props) {
  console.log("[vue] props from main framework -> update", props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
}
