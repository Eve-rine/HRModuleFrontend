<template>
	<div class="uk-flex uk-flex-center uk-flex-middle sc-login-page-wrapper">
		<div class="uk-width-2-3@s uk-width-1-2@m uk-width-1-3@l uk-width-1-4@xl uk-margin-auto-vertical">
			<ScCard>
				<ScCardBody>
					<form>
						<div class="sc-login-page-logo uk-margin-small-top">
							<img :src="appLogo" alt="">
						</div>
						<div class="sc-login-page-logo sc-login-page-logo-light">
							<img :src="appLogoLight" alt="">
						</div>
						<div id="sc-login-form" class="sc-toggle-login-register sc-toggle-login-password">
							<div class="sc-login-page-inner">
								<div class="uk-margin-medium">
									<ScInput v-if="hasUsername" v-model="userData.username" name="username" :error-state="errors.username ? true : false">
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
								<div v-if="hasEmailText" class="uk-margin-medium">
									Please enter your email address. You will receive a link to reset your password.
								</div>
								<div v-if="hasEmail" class="uk-margin-medium">
									<ScInput v-model="userData.email" name="email" :error-state="errors.email ? true : false">
										<label>
											Email
										</label>
									</ScInput>
									<ul class="sc-vue-errors">
										<li v-if="errors.email">
											{{ errors.email[0] }}
										</li>
									</ul>
								</div>
								<div v-if="hasPassword" class="uk-margin-medium">
									<ScInput v-model="userData.password" type="password" name="password" :error-state="errors.password ? true : false">
										<label>
											Password
										</label>
									</ScInput>
									<ul class="sc-vue-errors">
										<li v-if="errors.password">
											{{ errors.password[0] }}
										</li>
									</ul>
									<div v-if="hasForgotPassword" class="uk-margin-small-top uk-text-small uk-text-right@s">
										<nuxt-link :to="'/iam/auth/reset-password'">
											Forgot Password?
										</nuxt-link>
									</div>
								</div>
								<!-- <div class="uk-margin-large-top">
									<button type="submit" class="sc-button sc-button-large sc-button-block sc-button-warning">
										<span style="color:black">
											Login to Dashboard
										</span>
									</button>
								</div> -->
								<div class="uk-margin-large-top">
									<button class="sc-button sc-button-primary sc-button-large sc-button-block sc-button-warning" @click.prevent="submitForm(userData)">
										<span style="color:black">
											{{ buttonText }}
										</span>
									</button>
									<div v-if="hasBackButton" class="uk-margin-large-top uk-flex uk-flex-middle uk-flex-center">
										<nuxt-link :to="'/iam/auth/login'">
											Back to login form
										</nuxt-link>
									</div>
								</div>
								<div v-if="hasSignupButton" class="uk-margin-large-top uk-text-center">
									<span class="sc-color-secondary">
										Don't have an account?
									</span>
									<div>
										<nuxt-link :to="'/iam/auth/signup'">
											Sign Up
										</nuxt-link>
									</div>
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
	name: 'AuthForm',
	components: { ScInput },
    	  props: {
		buttonText: {
			type: String,
			required: true
		},
		submitForm: {
			type: Function,
			required: true
		},
		hasEmail:{
			type:Boolean,
			default:false
		},
		hasSignupButton:{
			type:Boolean,
			default:false
		},
		hasBackButton:{
			type:Boolean,
			default:false
		},
		hasForgotPassword:{
			type:Boolean,
			default:true
		},
		hasPassword:{
			type:Boolean,
			default:true
		},
		hasUsername:{
			type:Boolean,
			default:true
		},
		hasEmailText:{
			type:Boolean,
			default:false
		},
	},
	auth: 'guest',
	data: () => ({
		userData: {
			username: '',
			password: '',
			email:''
		},
	}),
	head () { return { 'title': 'DukaPal - Login'	}	},
	computed: {
		appLogo () {
			return require('~/assets/img/dukap.png');
		},
		appLogoLight () {
			return require('~/assets/img/dukap.png');
		}
	},
	methods: {

	}
}
</script>
