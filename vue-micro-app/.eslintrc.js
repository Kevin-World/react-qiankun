module.exports = {
  root: true,
  env: {
    node: true,
    browser: true, // 浏览器环境及全局变量
    es6: true // es6环境及全局变量
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/prettier"
  ],
  globals: {
    navigator: false, // 禁用navigator全局变量
    document: true,
    localStorage: true,
    window: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    'generator-star-spacing': 0,
    'object-curly-spacing': 0,
    'vue/no-use-v-if-with-v-for': 0,
    'no-console': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-alert': 2, //禁止使用alert confirm prompt
    "block-scoped-var": 2, // 强制把变量的使用限制在其定义的作用域范围内
    "generator-star-spacing": 1,// 强制 generator 函数中 * 号周围使用一致的空格
    "no-multi-spaces": 2, // 禁止使用多个空格
    "no-unused-vars": 2,
    'no-extra-semi': 0, // 禁止多余的分号
    "no-var": 1, // 禁止使用var
    "no-useless-catch": 0,
    "no-undef": 2,
    'use-isnan': 2, // 禁止比较时使用NaN，只能用isNaN()
    'no-cond-assign': 2, // 禁止在条件表达式中使用赋值语句
    'no-const-assign': 2, // 禁止修改const声明的变量
    'no-eq-null': 2, // 禁止对null使用==或!=运算符
    'no-extra-bind': 2, // 禁止不必要的函数绑定
    'no-extra-boolean-cast': 2, // 禁止不必要的bool转换
    'no-fallthrough': 1, // 禁止switch穿透
    'no-mixed-requires': [0, false], // 声明时不能混用声明类型
    'no-mixed-spaces-and-tabs': [0, false], // 禁止混用tab和空格
    'no-multiple-empty-lines': [
      1,
      {
        max: 2
      }
    ], // 空行最多不能超过2行
    'no-self-compare': 2, // 不能比较自身
    'no-unreachable': 2, // 不能有无法执行的代码
    'array-bracket-spacing': [2, 'never'], // 是否允许非空数组里面有多余的空格
  },
}