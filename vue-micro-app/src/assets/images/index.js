//一个 context module 会导出一个（require）函数，此函数可以接收一个参数：request。
const fn = require.context("./svg", false, /\.svg$/);
const fileList = fn.keys();
fileList.map(fn);

import "./iconfont";
import "./hfins-iconfont";
