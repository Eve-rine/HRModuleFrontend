import Vue from 'vue';

import { mapGetters } from 'vuex';

const ToastMessage = {
	install (Vue, options) {
		Vue.mixin({
			computed: {
				...mapGetters({
					toast: 'modules/notificationModule/toast'
				})
			}
		})
	}
}

Vue.use(ToastMessage);

