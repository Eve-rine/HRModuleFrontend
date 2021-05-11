export default function ({$axios, store}){
	$axios.onError(error => {
		if(error.response.status === 422){
			store.dispatch('modules/validationModule/setErrors', error.response.data.errors);
			store.dispatch('modules/notificationModule/setToast',  error.response.data);
		}
		return Promise.reject(error);
	});
	$axios.onRequest(()=>{
		store.dispatch('modules/validationModule/clearErrors');
	});
	$axios.onResponse(response => {
		if(response.status === 201 || response.status === 202){
			store.dispatch('modules/notificationModule/setToast', response.data);
		}
		return response;
	});
}
