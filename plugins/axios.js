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
		if(response.status === 201){
			store.dispatch('modules/notificationModule/setToast', response.data.toast);
			console.log('Oh no it returned a 404')
		}
		return response;
	});
	// Add a response interceptor
	const resInterceptor = axios.interceptors.response.use(function (response) {
	// Do something with response data like console.log, change header, or as we did here just added a conditional behaviour, to change the route or pop up an alert box, based on the reponse status  
		if (response.status === 200 || response.status===201) {
	  router.replace('homepage')
		} else {
	  alert('Unusual behaviour')
		}
		console.log(response)
		return response;
	}, function (error) {
	// Do something with response error
		return Promise.reject(error);
	});
	axios.interceptors.request.eject(resInterceptor);
}
