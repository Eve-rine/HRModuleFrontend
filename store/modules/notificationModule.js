export const state = () => ({
	toast:{},
});

const getters = {
	toast (state) {
		return state.toast;
	}
};

const mutations = {
	SET_TOAST_MESSAGES (state, payload, status) {
		state.toast= payload;
		status = payload.statusCode[0];
		UIkit.notification(payload.errors.password, status);
	}
};

const actions = {
	setToast ({ commit }, toast) {
		commit('SET_TOAST_MESSAGES', toast);
	},
	clearToast ({ commit }) {
		commit('SET_TOAST_MESSAGES', {});
	}
	
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
  