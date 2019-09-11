import ShTest from './src/test'

// 为组件提供 install 方法，供组件对外按需引入
ShTest.install = Vue => {
    Vue.component(ShTest.name, ShTest)
};

export default ShTest
