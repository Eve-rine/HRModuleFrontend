<template>
	<div class="uk-flex uk-flex-center uk-flex-middle sc-login-page-wrapper">
		<div class="uk-width-2-3@s uk-width-1-2@m uk-width-1-3@l uk-width-1-4@xl uk-margin-auto-vertical">
			<ScCard>
				<ScCardBody>
					<form @submit.prevent="logIn">
						<div class="sc-login-page-logo">
							<img :src="appLogo" alt="">
						</div>
						<div class="sc-login-page-logo sc-login-page-logo-light">
							<img :src="appLogoLight" alt="">
						</div>
						<div id="sc-login-form" class="sc-toggle-login-register sc-toggle-login-password">
							<div class="sc-login-page-inner">
								<div class="uk-margin-medium">
									<ScInput v-model="loginData.username" name="username" :error-state="errors.username ? true : false">
										<label>
											Username
										</label>
									</ScInput>
									<ul class="sc-vue-errors">
										<li v-if="errors.username">
											{{ errors.username[0] }}
										</li>
									</ul>
								</div>
								<div class="uk-margin-medium">
									<ScInput v-model="loginData.password" type="password" name="password" :error-state="errors.password ? true : false">
										<label>
											Password
										</label>
									</ScInput>
									<ul class="sc-vue-errors">
										<li v-if="errors.password">
											{{ errors.password[0] }}
										</li>
									</ul>
									<div class="uk-margin-small-top uk-text-small uk-text-right@s">
										<a href="javascript:void(0)" class="sc-link" data-uk-toggle="target: .sc-toggle-login-password; animation: uk-animation-scale-up">
											Forgot Password?
										</a>
									</div>
								</div>
								<!-- <ul v-if="authError" class="sc-vue-errors uk-display-block">
									<li>
										{{ authError }}
									</li>
								</ul> -->
								<div class="uk-margin-large-top">
									<button type="submit" class="sc-button sc-button-large sc-button-block sc-button-warning">
										<span style="color:black">
											Login to Dashboard
										</span>
									</button>
								</div>
							</div>
						</div>
					</form>
				</ScCardBody>
			</ScCard>
		</div>
	</div>
</template>

<script>
import ScInput from '~/components/Input'

export default {
	name: 'LoginPage',
	components: { ScInput },
	layout: 'login_page',
	auth: 'guest',
	data: () => ({
		loginData: {
			username: '',
			password: ''
		},
		//error: this.$route.query.error
	}),
	head () { return { 'title': 'DukaPal - Login'	}	},
	computed: {
		appLogo () {
			return require('~/assets/img/logo_alt.png');
		},
		appLogoLight () {
			return require('~/assets/img/logo.png');
		}
	},
	// methods: {
	// 	async logIn (){
	// 		try{
	// 			await this.$$auth.loginWith('local', {
	// 				data: loginData
	// 			})
	// 		} catch(e){
	// 			return;
	// 		}
	// 	}
	// }
	methods: {
		async logIn () {
			try {
				 await this.$auth.loginWith('local', { data: this.loginData });
				 this.$router.push({name: 'index'});
			} catch (e) {
				return
			}
		}
	}
	// methods: {
	// 	async logIn () {
	// 		try {
	// 			await this.$axios.post('/login', this.loginData);
	// 			//this.$auth.login({data: this.loginData});
	// 			this.$store.dispatch('setToken', {token, expiresIn});
	// 		} catch(e) {
	// 			return;
	// 		}
	// 		this.$router.push(this.$route.query.redirect ? this.$route.query.redirect : '/');
			
	// 	}
	// },
	// methods: {
	// 	async logIn () {
	// 		try {
	// 			await this.$axios.post('/login', this.loginData);
	// 			this.$store.dispatch('setToken', {token, expiresIn});
	// 			this.$router.push({name: 'index'});
	// 		} catch(e){
	// 			return;
	// 		}
	// 		// this.$axios.$post('login', this.form)
	// 		// 	.then(({token, expiresIn}) => {
					
	// 		// 	})
	// 		// 	.catch(errors => {
	// 		// 		return;
	// 		// 	});
	// 	},
	// }
}
</script>
