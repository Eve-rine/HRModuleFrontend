import Vue from 'vue';
import Vuex from 'vuex';

import uiModule from './modules/uiModule'
import notificationModule from './modules/notificationModule'

Vue.use (Vuex);

export const store = new Vuex.Store ({
	strict:true,
	modules: {
		uiModule,
		notificationModule
		
	}
});
