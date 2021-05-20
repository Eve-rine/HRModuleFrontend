<template>
	<div>
		<form>
			<div data-uk-grid>
				<div class="uk-width-1-1">
					<label class="uk-form-label">
						Country Code
					</label>
					<div class="uk-form-controls">
						<ScInput v-model="country_details.country_code" name="country_code" mode="outline" :error-state="errors.country_code ? true : false">													
						</ScInput>
						<ul class="sc-vue-errors">
							<li v-if="errors.country_code">
								{{ errors.country_code[0] }}
							</li>
						</ul>
					</div>
				</div>
				<div class="uk-width-1-1">
					<label class="uk-form-label">
						Country
					</label>
					<div class="uk-form-controls">
						<ScInput v-model="country_details.country" name="country" mode="outline" :error-state="errors.country ? true : false">													
						</ScInput>
						<ul class="sc-vue-errors">
							<li v-if="errors.country">
								{{ errors.country[0] }}
							</li>
						</ul>
					</div>
				</div>
				<div class="uk-width-1-1">
					<label class="uk-form-label">
						Nationality
					</label>
					<div class="uk-form-controls">
						<ScInput v-model="country_details.nationality" name="nationality" mode="outline" :error-state="errors.nationality ? true : false">													
						</ScInput>
						<ul class="sc-vue-errors">
							<li v-if="errors.nationality">
								{{ errors.nationality[0] }}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</form>
		<div v-if="hasSubmitButton" class="uk-modal-footer uk-text-right">
			<button class="sc-button sc-button-primary" data-uk-tooltip="Save" @click.prevent="submitForm(country_details)">
				{{ buttonText }}
			</button>
		</div>
	</div>
</template>

<script>
import ScInput from '~/components/Input'
export default {
	name: 'CountriesForm',
	components: {
		ScInput,
	},
	  props: {
		buttonText: {
			type: String,
			required: true
		},
		submitForm: {
			type: Function,
			required: true
		},
		getRecord: {
			type: Function,
			required: false,
			default:null
		},
		hasSubmitButton:{
			type:Boolean,
			default:false
		}

	},
	data: () => ({
		country_details:{
	        nationality:'',
			country_code:'',
			country:''
		}
	}),
	head () {
		return {
			'title': 'Employee | Countries'
		}
	},
	methods: {

	}
}
</script>
<style lang="scss">
  @import '~scss/plugins/vue-good-table.scss';
  
</style>
<style lang="scss" scoped>
@keyframes animate-stripes {
  0% { background-position: 0 0; }
  100% { background-position: 60px 0; }
}
</style>