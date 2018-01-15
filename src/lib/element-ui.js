import Vue from 'vue'
import Dialog from 'element-ui/packages/dialog/index'
import Input from 'element-ui/packages/input/index'
import Carousel from 'element-ui/packages/carousel/index'
import CarouselItem from 'element-ui/packages/carousel-item/index'
import Cascader from 'element-ui/packages/cascader/index'
import message from 'element-ui/packages/message/index'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Dialog)
Vue.use(Input)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Cascader)
Vue.prototype.$message = message
