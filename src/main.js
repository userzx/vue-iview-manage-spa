import Vue from 'vue';
import VueRouter from 'vue-router';
import App from 'components/app.vue';
import Routers from './router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(VueRouter);
Vue.use(iView);

// 开启debug模式
Vue.config.debug = true;

// 路由配置
let router = new VueRouter({
	// 是否开启History模式的路由, 如果生产环境的服务端没有进行相关配置,请慎用
	history: false
});

router.map(Routers);

router.beforeEach(() => {
	window.scrollTo(0, 0);
});

router.afterEach(() => {

});

router.redirect({
	'*': "/index"
});

router.start(App, '#app');