import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';

import Loading from './components/lib/loading';
import CenterContainer from './components/lib/center-container';

Vue.config.productionTip = false;
Vue.component('loading', Loading);
Vue.component('center-container', CenterContainer);

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
