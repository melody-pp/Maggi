import Vue from 'vue'
import Dialog from 'element-ui/packages/dialog'
import Input from 'element-ui/packages/input'
import Carousel from 'element-ui/packages/carousel'
import CarouselItem from 'element-ui/packages/carousel-item'
import Cascader from 'element-ui/packages/cascader'
import message from 'element-ui/packages/message'
import messageBox from 'element-ui/packages/message-box'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Dialog)
Vue.use(Input)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Cascader)
Vue.prototype.$msgbox = messageBox
Vue.prototype.$alert = messageBox.alert
Vue.prototype.$confirm = messageBox.confirm
Vue.prototype.$prompt = messageBox.prompt
Vue.prototype.$message = message
