export default function ({$axios, store}){
	$axios.onError(error => {
		if(error.response.status === 422){
			store.dispatch('modules/validationModule/setErrors', error.response.data.errors);
		}
		return Promise.reject(error);
	});
	$axios.onRequest(()=>{
		store.dispatch('modules/validationModule/clearErrors');
	});
	// Add a response interceptor
	$axios.interceptors.response.use(function (response) {
		if (response.status == 201) {
			store.dispatch('modules/notificationModule/setToast', response.data.toast);
		}
		return response;
	}, function (error) {
		return Promise.reject(error);
	});
}