<template>
	<div>
		<AuthForm button-text="RESET PASSWORD"
			:submit-form="resetPassword"
			:has-email="true"
			:has-email-text="true"
			:has-forgot-password="false"
			:has-back-button="true"
			:has-username="false"
			:has-password="false"
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
		async resetPassword (userData) {
			var formdata = new FormData();
			formdata.append('email', userData.email);
			try {
				await this.$axios.post( 'api/reset-password',
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
