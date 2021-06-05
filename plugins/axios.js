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
	// $axios.onResponse(response => {
	// 	if(response.status === 201){
	// 		store.dispatch('modules/notificationModule/setToast', response.data.toast);
	// 		console.log('Oh no it returned a 404')
	// 	}
	// 	return response;
	// });
	$axios.interceptors.response.use(
		response =>{
			if (response.status == 201) {
				store.dispatch('modules/notificationModule/setToast', response.data.toast);
				return response;
			}
		})
}