<template>
	<div>
		<form>
			<div data-uk-grid>
				<div class="uk-width-1-1">
					<label class="uk-form-label">
						Personal Identification Type
					</label>
					<div class="uk-form-controls">
						<ScInput v-model="identification_details.personal_identification_type" name="personal_identification_type" mode="outline" :error-state="errors.personal_identification_type ? true : false">													
						</ScInput>
						<ul class="sc-vue-errors">
							<li v-if="errors.personal_identification_type">
								{{ errors.personal_identification_type[0] }}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</form>
		<div v-if="hasSubmitButton" class="uk-modal-footer uk-text-right">
			<button class="sc-button sc-button-primary" data-uk-tooltip="Save" @click.prevent="submitForm(identification_details)">
				{{ buttonText }}
			</button>
		</div>
	</div>
</template>

<script>
import ScInput from '~/components/Input'
export default {
	name: 'GenderForm',
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
		identification_details:{
			personal_identification_type:''	
		}
	}),
	head () {
		return {
			'title': 'Employee | Personal Identification Types'
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