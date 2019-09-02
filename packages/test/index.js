// 为组件提供 install 方法，供组件对外按需引入
import ShTest from './src/test'
ShTest.install = Vue => {
    Vue.component(ShTest.name, ShTest)
}
export default ShTest