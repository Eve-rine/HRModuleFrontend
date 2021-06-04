<template>
	<div>
		<AuthForm button-text="SIGNUP"
			:submit-form="SignUp"
			:has-email="true"
			:has-forgot-password="false"
			:has-back-button="true"
		/>
	</div>
</template>

<script>
import  AuthForm from "~/components/serviceComponents/iam/auth-form";
export default {
	components: {
		AuthForm
	},
	layout: 'auth',
	head () {
		return {
			'title': 'IAM | SignUp'
		}
	},
	methods: {
		async SignUp (userData) {
			var formdata = new FormData();
			formdata.append('username', userData.username);
			formdata.append('password', userData.password);
			formdata.append('email', userData.email);
			try {
				await this.$axios.post( 'api/register',
					formData,
					{
						headers: {
							'x-service': 'ems-svc'
						},
					},
				).then(response=>{
					this.$router.push('/iam/login')
					return response
				}) 
			}catch{
				return
			}
		},
	}
}
</script>
