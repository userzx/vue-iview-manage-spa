const routers = {
	'/index': {
		component(resolve) {
			require(['./views/index.vue'], resolve);
		}
	},
	'/login': {
		component(resolve) {
			require(['./views/login.vue'], resolve);
		}
	}
};
export default routers;