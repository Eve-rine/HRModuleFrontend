<template>
	<div>
		<AuthForm button-text="	Login to Dashboard"
			:submit-form="logIn"
			:has-signup-button="true"
			:has-forgot-password="true"
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
			'title': 'IAM | LogIn'
		}
	},
	methods: {
		async logIn (userData) {
			var formdata = new FormData();
			formdata.append('username', userData.username);
			formdata.append('password', userData.password);
			try {
				 await this.$auth.loginWith('local', {data: formdata});
				 this.$router.push({name: 'index'});
			} catch (e) {
				return
			}
		},
	}
}
</script>
